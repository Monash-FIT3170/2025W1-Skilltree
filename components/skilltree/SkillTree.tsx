// components/skilltree/SkillTree.tsx
'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  ConnectionMode,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import type { Edge, Node, NodeTypes } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import SkillNode from '@/components/skilltree/SkillNode';
import { computeStatuses, layoutTopDown, buildChildrenMap } from '@/components/skilltree/graph';
import type { SkillNodeData, SkillTreeDTO } from '@/components/skilltree/types';

const nodeTypes = { skill: SkillNode } satisfies NodeTypes;

/* ---------- helpers: ensure a single root, named by community ---------- */

function pickRootId(
  nodes: Node<SkillNodeData>[],
  edges: Edge[],
  preferredRootId?: string
): string {
  if (preferredRootId && nodes.some(n => n.id === preferredRootId)) return preferredRootId;
  // Root = node that is never a SOURCE (i.e., not a child of anyone)
  const sources = new Set(edges.map(e => String(e.source)));
  const candidates = nodes.filter(n => !sources.has(String(n.id)));
  return candidates.length ? String(candidates[0].id) : (preferredRootId ?? 'root');
}

function ensureRoot(
  nodesIn: Node<SkillNodeData>[],
  edges: Edge[],
  communityName: string,
  preferredRootId?: string
): { nodes: Node<SkillNodeData>[]; rootId: string } {
  let nodes = nodesIn.map(n => ({ ...n, type: 'skill' as const }));
  const rootId = pickRootId(nodes, edges, preferredRootId);

  const existing = nodes.find(n => String(n.id) === rootId);
  if (!existing) {
    nodes = [
      ...nodes,
      {
        id: rootId,
        type: 'skill',
        data: { title: communityName, isPrimary: true },
        position: { x: 0, y: 0 },
      },
    ];
  } else {
    existing.data = { ...existing.data, title: communityName, isPrimary: true };
  }
  return { nodes, rootId };
}

/* ---------------------------------------------------------------------- */

type Props = {
  /** Initial graph from API (nodes may be empty/missing root) */
  initial?: SkillTreeDTO;
  /** Community name — used as the root node title */
  communityName: string;
  /** Optional fixed root id (defaults to "root") */
  rootId?: string;

  /** Called when user completes a node */
  onComplete?: (nodeId: string) => Promise<void> | void;

  /** Optional: control width/height of canvas container */
  className?: string;
};

export default function SkillTree({
  initial,
  communityName,
  rootId: preferredRootId = 'root',
  onComplete,
  className,
}: Props) {
  // ----- initialise with an ensured root
  const seed = useMemo(() => {
    const ensured = ensureRoot(initial?.nodes ?? [], initial?.edges ?? [], communityName, preferredRootId);
    return {
      nodes: layoutTopDown(ensured.nodes, initial?.edges ?? []),
      edges: initial?.edges ?? [],
      completed: new Set(initial?.completedIds ?? []),
      rootId: ensured.rootId,
    };
  }, [initial, communityName, preferredRootId]);

  const [rootId, setRootId] = useState<string>(seed.rootId);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node<SkillNodeData>>(seed.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(seed.edges);
  const [completedIds, setCompletedIds] = useState<Set<string>>(seed.completed);
  const [selectedIds, setSelectedIds] = useState<string[]>([seed.rootId]);

  // Re-apply when initial/communityName/rootId prop changes
  useEffect(() => {
    const ensured = ensureRoot(initial?.nodes ?? [], initial?.edges ?? [], communityName, preferredRootId);
    const laid = layoutTopDown(ensured.nodes, initial?.edges ?? []);
    setNodes(laid);
    setEdges(initial?.edges ?? []);
    setCompletedIds(new Set(initial?.completedIds ?? []));
    setRootId(ensured.rootId);
    setSelectedIds([ensured.rootId]); // auto-select root for quick "Add child"
  }, [initial, communityName, preferredRootId, setEdges, setNodes]);

  // compute derived statuses, then inject into node data
  const nodesWithStatus = useMemo<Node<SkillNodeData>[]>(() => {
    const statusMap = computeStatuses(nodes as Node<SkillNodeData>[], edges, completedIds);
    return (nodes as Node<SkillNodeData>[]).map(n => ({
      ...n,
      type: 'skill',
      data: {
        ...n.data,
        status: statusMap.get(n.id),
        onComplete: async (id: string) => {
          setCompletedIds(prev => {
            const next = new Set(prev);
            next.add(id);
            return next;
          });
          try {
            await onComplete?.(id);
          } catch {
            /* no-op */
          }
        },
        onRename: (id: string, title: string) => {
          setNodes(prev =>
            (prev as Node<SkillNodeData>[]).map(node =>
              node.id === id ? { ...node, data: { ...node.data, title } } : node
            )
          );
        },
      },
    }));
  }, [nodes, edges, completedIds, onComplete, setNodes]);

  // ---- layout helper
  const relayout = useCallback(
    (nextNodes: Node<SkillNodeData>[], nextEdges: Edge[]) =>
      layoutTopDown(
        nextNodes.map(n => ({ ...n, type: 'skill' as const })),
        nextEdges
      ),
    []
  );

  // ---- mutations (NO "add root"; root is guaranteed)
  const makeId = useCallback(() => `n_${Math.random().toString(36).slice(2, 9)}`, []);

  const addChild = useCallback(() => {
    const parentId = selectedIds[0] ?? rootId; // fallback to root if nothing selected
    const id = makeId();
    const newNode: Node<SkillNodeData> = {
      id,
      type: 'skill',
      data: { title: 'New child' },
      position: { x: 0, y: 0 },
    };
    const newEdge: Edge = { id: `e-${id}-${parentId}`, source: id, target: parentId };

    const nextNodes = [...(nodes as Node<SkillNodeData>[]), newNode];
    const nextEdges = [...edges, newEdge];

    setEdges(nextEdges);
    setNodes(relayout(nextNodes, nextEdges));
    setSelectedIds([id]);
  }, [edges, nodes, relayout, selectedIds, rootId, makeId]);

  /** Cascading delete: delete selected nodes AND all of their descendants (children, grandchildren, ...). Root stays protected. */
  const deleteSelected = useCallback(() => {
    if (selectedIds.length === 0) return;

    // Build parent -> children map from current edges (child -> parent semantics)
    const childrenMap = buildChildrenMap(edges);

    // Collect all descendants for a given id (DFS)
    const collectDescendants = (id: string, acc: Set<string>) => {
      const kids = childrenMap[id] ?? [];
      for (const k of kids) {
        if (!acc.has(k)) {
          acc.add(k);
          collectDescendants(k, acc);
        }
      }
    };

    // Start with selected (excluding root), then add their descendants
    const toRemove = new Set<string>();
    for (const id of selectedIds) {
      if (id === rootId) continue; // protect root
      toRemove.add(id);
      collectDescendants(id, toRemove);
    }
    if (toRemove.size === 0) return;

    // Filter nodes/edges/completions
    const nextNodes = (nodes as Node<SkillNodeData>[]).filter(n => !toRemove.has(n.id));
    const nextEdges = edges.filter(
      e => !toRemove.has(String(e.source)) && !toRemove.has(String(e.target))
    );
    const nextCompleted = new Set(
      Array.from(completedIds).filter(id => !toRemove.has(id))
    );

    setCompletedIds(nextCompleted);
    setEdges(nextEdges);
    setNodes(relayout(nextNodes, nextEdges));
    setSelectedIds([rootId]); // return focus to root
  }, [completedIds, edges, nodes, relayout, selectedIds, rootId]);

  return (
    <div className={className ?? 'h-[75vh] w-full rounded-md border flex flex-col'}>
      {/* Toolbar — no "Add root" */}
      <div className="flex items-center gap-2 p-2 border-b bg-muted/30">
        <button
          className="px-2 py-1 border rounded-md text-xs hover:bg-muted disabled:opacity-50"
          onClick={addChild}
        >
          + Add child
        </button>
        <button
          className="px-2 py-1 border rounded-md text-xs hover:bg-destructive/20 disabled:opacity-50"
          onClick={deleteSelected}
          disabled={
            selectedIds.length === 0 ||
            (selectedIds.length === 1 && selectedIds[0] === rootId)
          }
        >
          🗑 Delete selected
        </button>

        <div className="ml-auto text-xs text-muted-foreground">
          {selectedIds.length
            ? `${selectedIds.length} selected${selectedIds.includes(rootId) ? ' (root protected)' : ''}`
            : 'No selection'}
        </div>
      </div>

      <div className="flex-1">
        <ReactFlow
          nodes={nodesWithStatus}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          connectionMode={ConnectionMode.Loose}
          elementsSelectable
          proOptions={{ hideAttribution: true }}
          onSelectionChange={(sel) => {
            const next = (sel?.nodes ?? []).map(n => n.id);
            setSelectedIds(next.length ? next : [rootId]);
          }}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}
