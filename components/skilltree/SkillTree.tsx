"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  ConnectionMode,
  useNodesState,
  useEdgesState,
  Position,
  applyNodeChanges,
  type NodeChange,
  type Connection,
} from "@xyflow/react";
import type { Edge, Node, NodeTypes } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import SkillNode from "@/components/skilltree/SkillNode";
import {
  computeStatuses,
  layoutTopDown,
  buildChildrenMap,
  buildParentMap,
} from "@/components/skilltree/graph";
import type { SkillNodeData, SkillTreeDTO } from "@/components/skilltree/types";

const nodeTypes = { skill: SkillNode } satisfies NodeTypes;

// keep children at least this many px below their lowest parent
const MIN_CHILD_GAP_Y = 200;

/* ---------- helpers: ensure a single root, named by community ---------- */

function pickRootId(
  nodes: Node<SkillNodeData>[],
  edges: Edge[],
  preferredRootId?: string
): string {
  if (preferredRootId && nodes.some((n) => n.id === preferredRootId))
    return preferredRootId;
  const sources = new Set(edges.map((e) => String(e.source)));
  const candidates = nodes.filter((n) => !sources.has(String(n.id)));
  return candidates.length
    ? String(candidates[0].id)
    : preferredRootId ?? "root";
}

function ensureRoot(
  nodesIn: Node<SkillNodeData>[],
  edges: Edge[],
  communityName: string,
  preferredRootId?: string
): { nodes: Node<SkillNodeData>[]; rootId: string } {
  let nodes = nodesIn.map((n) => ({ ...n, type: "skill" as const }));
  const rootId = pickRootId(nodes, edges, preferredRootId);

  const existing = nodes.find((n) => String(n.id) === rootId);
  if (!existing) {
    nodes = [
      ...nodes,
      {
        id: rootId,
        type: "skill",
        data: { title: communityName, isPrimary: true, xp: 0 },
        position: { x: 0, y: 0 },
      },
    ];
  } else {
    existing.data = {
      ...existing.data,
      title: communityName,
      isPrimary: true,
      xp: existing.data?.xp ?? 0,
    };
  }
  return { nodes, rootId };
}

const arraysEqual = (a: string[], b: string[]) =>
  a.length === b.length && a.every((v, i) => v === b[i]);

const initialKey = (dto: SkillTreeDTO) =>
  JSON.stringify({
    n: dto.nodes.map((n) => ({
      id: n.id,
      x: n.position?.x ?? 0,
      y: n.position?.y ?? 0,
    })),
    e: dto.edges.map((e) => ({ s: e.source, t: e.target })),
    c: [...dto.completedIds].sort(),
  });

/* ---------------------------------------------------------------------- */

type Props = {
  initial?: SkillTreeDTO;
  communityName: string;
  rootId?: string;
  onComplete?: (nodeId: string) => Promise<void> | void;
  className?: string;
};

export default function SkillTree({
  initial,
  communityName,
  rootId: preferredRootId = "root",
  onComplete,
  className,
}: Props) {
  const seed = useMemo(() => {
    const ensured = ensureRoot(
      initial?.nodes ?? [],
      initial?.edges ?? [],
      communityName,
      preferredRootId
    );
    return {
      nodes: layoutTopDown(ensured.nodes, initial?.edges ?? []),
      edges: initial?.edges ?? [],
      completed: new Set(initial?.completedIds ?? []),
      rootId: ensured.rootId,
    };
  }, [initial, communityName, preferredRootId]);

  const [rootId, setRootId] = useState<string>(seed.rootId);
  const [nodes, setNodes, _rfOnNodesChange] = useNodesState<Node<SkillNodeData>>(
    seed.nodes
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(seed.edges);
  const [completedIds, setCompletedIds] = useState<Set<string>>(seed.completed);
  const [selectedIds, setSelectedIds] = useState<string[]>([seed.rootId]);

  // Guard against parents re-supplying a new "initial" every render
  const lastAppliedInitialRef = useRef<string>(
    initial
      ? initialKey({
          nodes: seed.nodes,
          edges: seed.edges,
          completedIds: Array.from(seed.completed),
        })
      : ""
  );

  // Re-apply when initial/communityName/rootId prop changes — only if materially different
  useEffect(() => {
    const ensured = ensureRoot(
      initial?.nodes ?? [],
      initial?.edges ?? [],
      communityName,
      preferredRootId
    );
    const laid = layoutTopDown(ensured.nodes, initial?.edges ?? []);
    const key = initialKey({
      nodes: laid,
      edges: initial?.edges ?? [],
      completedIds: initial?.completedIds ?? [],
    });
    if (key === lastAppliedInitialRef.current) return;

    setNodes(laid);
    setEdges(initial?.edges ?? []);
    setCompletedIds(new Set(initial?.completedIds ?? []));
    setRootId(ensured.rootId);
    setSelectedIds([ensured.rootId]);

    lastAppliedInitialRef.current = key;
  }, [initial, communityName, preferredRootId, setEdges, setNodes]);

  /* ---------- stable handlers ---------- */

  const handleComplete = useCallback(
    async (id: string) => {
      setCompletedIds((prev) => {
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
    [onComplete]
  );

  const handleRename = useCallback(
    (id: string, title: string) => {
      setNodes((prev) =>
        (prev as Node<SkillNodeData>[]).map((node) =>
          node.id === id ? { ...node, data: { ...node.data, title } } : node
        )
      );
    },
    [setNodes]
  );

  const handleChangeXp = useCallback(
    (id: string, xp: number) => {
      setNodes((prev) =>
        (prev as Node<SkillNodeData>[]).map((node) =>
          node.id === id ? { ...node, data: { ...node.data, xp } } : node
        )
      );
    },
    [setNodes]
  );

  const nodesWithStatus = useMemo<Node<SkillNodeData>[]>(() => {
    const statusMap = computeStatuses(
      nodes as Node<SkillNodeData>[],
      edges,
      completedIds
    );

    return (nodes as Node<SkillNodeData>[]).map((n) => {
      const nextStatus = statusMap.get(n.id);
      const curr = n.data as SkillNodeData | undefined;

      const sameStatus = curr?.status === nextStatus;
      const sameHandlers =
        curr?.onComplete === handleComplete &&
        curr?.onRename === handleRename &&
        curr?.onChangeXp === handleChangeXp;
      const typeOk = n.type === "skill";

      if (sameStatus && sameHandlers && typeOk) return n;

      return {
        ...n,
        type: "skill",
        data: {
          ...n.data,
          status: nextStatus,
          onComplete: handleComplete,
          onRename: handleRename,
          onChangeXp: handleChangeXp,
        },
      };
    });
  }, [
    nodes,
    edges,
    completedIds,
    handleComplete,
    handleRename,
    handleChangeXp,
  ]);

  // ---- layout helper (used for deletes; preserves remaining positions)
  const relayout = useCallback(
    (nextNodes: Node<SkillNodeData>[], nextEdges: Edge[]) =>
      layoutTopDown(
        nextNodes.map((n) => ({ ...n, type: "skill" as const })),
        nextEdges
      ),
    []
  );

  // ---- mutations
  const makeId = useCallback(
    () => `n_${Math.random().toString(36).slice(2, 9)}`,
    []
  );

  /** Add a child relative to the parent's CURRENT position (no global relayout). */
  const addChild = useCallback(() => {
    const parentId = selectedIds[0] ?? rootId;
    const parent = (nodes as Node<SkillNodeData>[]).find(
      (n) => n.id === parentId
    );
    const { x: px = 0, y: py = 0 } = parent?.position ?? { x: 0, y: 0 };

    // Sibling-aware offset
    const childrenMap = buildChildrenMap(edges);
    const childIds = childrenMap[parentId] ?? [];
    const existingChildren = (nodes as Node<SkillNodeData>[]).filter((n) =>
    childIds.includes(n.id)
  );
    const dx = 240;                 // base sibling spacing
    const extraNewChildGap = 80;    // the extra gap you want
    const spacingX = dx + extraNewChildGap;

    // Find the current rightmost child's X (fallback to parent X if none)
    const rightmostX = existingChildren.length
      ? Math.max(...existingChildren.map((c) => c.position?.x ?? px))
      : px;

    const dy = 140;
    const childX = existingChildren.length ? rightmostX + spacingX : px;
    const childY = Math.max(py + dy, py + MIN_CHILD_GAP_Y); // ensure lower than parent

    const id = makeId();
    const newNode: Node<SkillNodeData> = {
      id,
      type: "skill",
      data: { title: "New child", xp: 0 },
      position: { x: childX, y: childY },
      sourcePosition: Position.Top,
      targetPosition: Position.Bottom,
    };
    const newEdge: Edge = {
      id: `e-${id}-${parentId}`,
      source: id,     // child
      target: parentId, // parent
    };

    setEdges((prev) => [...prev, newEdge]);
    setNodes((prev) => [...(prev as Node<SkillNodeData>[]), newNode]);
    setSelectedIds([id]);
  }, [edges, nodes, selectedIds, rootId, makeId]);

  /** Cascading delete (children & descendants). Root protected. */
  const deleteSelected = useCallback(() => {
    if (selectedIds.length === 0) return;

    const childrenMap = buildChildrenMap(edges);
    const collectDescendants = (id: string, acc: Set<string>) => {
      const kids = childrenMap[id] ?? [];
      for (const k of kids) {
        if (!acc.has(k)) {
          acc.add(k);
          collectDescendants(k, acc);
        }
      }
    };

    const toRemove = new Set<string>();
    for (const id of selectedIds) {
      if (id === rootId) continue;
      toRemove.add(id);
      collectDescendants(id, toRemove);
    }
    if (toRemove.size === 0) return;

    const nextNodes = (nodes as Node<SkillNodeData>[]).filter(
      (n) => !toRemove.has(n.id)
    );
    const nextEdges = edges.filter(
      (e) => !toRemove.has(String(e.source)) && !toRemove.has(String(e.target))
    );
    const nextCompleted = new Set(
      Array.from(completedIds).filter((id) => !toRemove.has(id))
    );

    setCompletedIds(nextCompleted);
    setEdges(nextEdges);
    setNodes(relayout(nextNodes, nextEdges));
    setSelectedIds([rootId]);
  }, [completedIds, edges, nodes, relayout, selectedIds, rootId]);

  /** Clamp moves so children never go above the lowest parent; also re-clamp descendants when a parent moves. */
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes((prev) => {
        const parentsMap = buildParentMap(edges);
        const childrenMap = buildChildrenMap(edges);

        // first, apply incoming changes normally
        let next = applyNodeChanges(changes, prev) as Node<SkillNodeData>[];

        const idToNode = new Map(next.map((n) => [n.id, n]));
        const movedIds = new Set(
          changes
            .map((c) => (c.type === "position" ? c.id : undefined))
            .filter((id): id is string => typeof id === "string")
        );

        // helper: compute min allowed Y for a node given all its parents
        const minAllowedYFor = (id: string): number | undefined => {
          const pids = parentsMap[id] ?? [];
          if (pids.length === 0) return undefined;
          return Math.max(
            ...pids.map(
              (pid) => (idToNode.get(pid)?.position?.y ?? 0) + MIN_CHILD_GAP_Y
            )
          );
        };

        // build extra "position" changes to clamp children + descendants if any parent moved
        const extra: NodeChange[] = [];
        const queue: string[] = Array.from(movedIds);

        while (queue.length) {
          const pid = queue.shift()!;
          const kids = childrenMap[pid] ?? [];
          for (const kid of kids) {
            const child = idToNode.get(kid);
            if (!child) continue;
            const minY = minAllowedYFor(kid);
            if (minY !== undefined) {
              const cy = child.position?.y ?? 0;
              const cx = child.position?.x ?? 0;
              if (cy < minY) {
                extra.push({
                  id: kid,
                  type: "position",
                  position: { x: cx, y: minY },
                  dragging: false,
                });
              }
            }
            // always propagate to descendants
            queue.push(kid);
          }
        }

        if (extra.length) {
          next = applyNodeChanges(extra, next) as Node<SkillNodeData>[];
        }

        // final pass: any node directly moved by the user and is a child must be clamped too
        if (movedIds.size) {
          const directExtra: NodeChange[] = [];
          for (const id of movedIds) {
            const node = next.find((n) => n.id === id);
            if (!node) continue;
            const minY = minAllowedYFor(id);
            if (minY === undefined) continue;
            const cy = node.position?.y ?? 0;
            const cx = node.position?.x ?? 0;
            if (cy < minY) {
              directExtra.push({
                id,
                type: "position",
                position: { x: cx, y: minY },
                dragging: false,
              });
            }
          }
          if (directExtra.length) {
            next = applyNodeChanges(directExtra, next) as Node<SkillNodeData>[];
          }
        }

        return next;
      });
    },
    [edges, setNodes]
  );

  // (optional) block illegal connections if you enable user-created edges
  const isValidConnection = useCallback((conn: Edge | Connection) => {
    if (!conn.source || !conn.target) return false;
    const src = (nodes as Node<SkillNodeData>[]).find((n) => n.id === conn.source); // child
    const tgt = (nodes as Node<SkillNodeData>[]).find((n) => n.id === conn.target); // parent
    if (!src || !tgt) return false;
    const sy = src.position?.y ?? 0;
    const ty = tgt.position?.y ?? 0;
    return sy >= ty + MIN_CHILD_GAP_Y;
  }, [nodes]);

  return (
    <div className={className ?? "h-full w-full rounded border flex flex-col"}>
      {/* Toolbar — no "Add root" */}
      <div className="flex items-center gap-2 p-2 border-b bg-muted/30">
        <button
          className="px-2 py-1 border rounded text-xs hover:bg-muted disabled:opacity-50"
          onClick={addChild}
        >
          + Add child
        </button>
        <button
          className="px-2 py-1 border rounded text-xs hover:bg-destructive/20 disabled:opacity-50"
          onClick={deleteSelected}
          disabled={
            selectedIds.length === 0 ||
            (selectedIds.length === 1 && selectedIds[0] === rootId)
          }
        >
          🗑 Delete
        </button>

        <div className="ml-auto text-xs text-muted-foreground">
          {selectedIds.length
            ? `${selectedIds.length} selected${
                selectedIds.includes(rootId) ? " (root protected)" : ""
              }`
            : "No selection"}
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
          isValidConnection={isValidConnection}   /* optional, safe to keep */
          onSelectionChange={(sel: { nodes: Node<SkillNodeData>[] } | null) => {
            const nextSel = (sel?.nodes ?? []).map((n) => n.id);
            const target = nextSel.length ? nextSel : [rootId];
            setSelectedIds((prev) =>
              arraysEqual(prev, target) ? prev : target
            );
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
