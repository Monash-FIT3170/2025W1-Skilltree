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

const MIN_CHILD_GAP_Y = 100;

const nodeTypes = { skill: SkillNode } satisfies NodeTypes;

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
    : (preferredRootId ?? "root");
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
        data: {
          title: communityName,
          isPrimary: true,
          xp: 0,
          description: "",
          onChangeDescription: () => {},
          onComplete: () => {},
          onRename: () => {},
          onChangeXp: () => {},
        },
        position: { x: 0, y: 0 },
      },
    ];
  } else {
    existing.data = {
      ...existing.data,
      title: communityName,
      isPrimary: true,
      xp: existing.data?.xp ?? 0,
      description: existing.data?.description ?? "",
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

type Props = {
  initial?: SkillTreeDTO;
  communityName: string;
  rootId?: string;
  onComplete?: (nodeId: string) => Promise<void> | void;
  className?: string;
  onExport?: (dto: SkillTreeDTO) => void;
};

export default function SkillTree({
  initial,
  communityName,
  rootId: preferredRootId = "root",
  onComplete,
  className,
  onExport,
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
  const [nodes, setNodes, _rfOnNodesChange] = useNodesState<
    Node<SkillNodeData>
  >(seed.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(seed.edges);
  const [completedIds, setCompletedIds] = useState<Set<string>>(seed.completed);
  const [selectedIds, setSelectedIds] = useState<string[]>([seed.rootId]);

  // remember last selected
  const lastSelectedRef = useRef<string[]>([seed.rootId]);
  useEffect(() => {
    // if root id changes
    lastSelectedRef.current = [seed.rootId];
  }, [seed.rootId]);

  // guard for reapplying parents
  const lastAppliedInitialRef = useRef<string>(
    initial
      ? initialKey({
          nodes: seed.nodes,
          edges: seed.edges,
          completedIds: Array.from(seed.completed),
        })
      : ""
  );

  // just incase reference changes
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

  // handlers

  const handleComplete = useCallback(
    async (id: string) => {
      setCompletedIds((prev) => {
        const next = new Set(prev);
        next.add(id);
        return next;
      });
      try {
        await onComplete?.(id);
      } catch {}
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

  const handleChangeDescription = useCallback(
    (id: string, description: string) => {
      setNodes((prev) =>
        (prev as Node<SkillNodeData>[]).map((node) =>
          node.id === id
            ? { ...node, data: { ...node.data, description } }
            : node
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
        curr?.onChangeDescription === handleChangeDescription &&
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
          onChangeDescription: handleChangeDescription,
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
    handleChangeDescription,
  ]);

  // for positions
  const relayout = useCallback(
    (nextNodes: Node<SkillNodeData>[], nextEdges: Edge[]) =>
      layoutTopDown(
        nextNodes.map((n) => ({ ...n, type: "skill" as const })),
        nextEdges
      ),
    []
  );

  const makeId = useCallback(
    () => `n_${Math.random().toString(36).slice(2, 9)}`,
    []
  );

  // Add a child relative to the parent's CURRENT position
  const addChild = useCallback(() => {
    const parentId = selectedIds[0] ?? rootId;
    const parent = (nodes as Node<SkillNodeData>[]).find(
      (n) => n.id === parentId
    );
    const { x: px = 0, y: py = 0 } = parent?.position ?? { x: 0, y: 0 };

    const childrenMap = buildChildrenMap(edges);
    const childIds = childrenMap[parentId] ?? [];
    const existingChildren = (nodes as Node<SkillNodeData>[]).filter((n) =>
      childIds.includes(n.id)
    );
    const dx = 240; // base sibling spacing
    const extraNewChildGap = 80; // the extra gap you want
    const spacingX = dx + extraNewChildGap;

    // Find the current rightmost child's X (fallback to parent X if none)
    const rightmostX = existingChildren.length
      ? Math.max(...existingChildren.map((c) => c.position?.x ?? px))
      : px;

    const dy = 140;
    const childX = existingChildren.length ? rightmostX + spacingX : px;
    const childY = Math.max(py + dy, py + 200); // ensure lower than parent

    const id = makeId();
    const newNode: Node<SkillNodeData> = {
      id,
      type: "skill",
      data: {
        title: "New child",
        xp: 0,
        description: "",
        onChangeDescription: handleChangeDescription,
        onComplete: handleComplete,
        onRename: handleRename,
        onChangeXp: handleChangeXp,
      },
      position: { x: childX, y: childY },
      sourcePosition: Position.Top,
      targetPosition: Position.Bottom,
    };
    const newEdge: Edge = {
      id: `e-${id}-${parentId}`,
      source: id, // child
      target: parentId, // parent
    };

    setEdges((prev) => [...prev, newEdge]);
    setNodes((prev) => [...(prev as Node<SkillNodeData>[]), newNode]);
    setSelectedIds([id]);
  }, [edges, nodes, selectedIds, rootId, makeId]);

  // Cascading delete, root protected
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

  // for dragging
  const [draggingNodes, setDraggingNodes, onDraggingNodesChange] =
    useNodesState<Node>([]);
  const [draggingEdges, setDraggingEdges, onDraggingEdgesChange] =
    useEdgesState<Edge>([]);

  // derive completed ids for export
  const derivedCompletedIds = React.useMemo(
    () =>
      nodes
        .filter((n) => (n.data as SkillNodeData | any)?.status === "completed")
        .map((n) => String(n.id)),
    [nodes]
  );

  // leave out current dto whenever nodes/edges/derivedCompleted change, but only when it actually differs
  const lastExportKeyRef = useRef<string | null>(null);
  React.useEffect(() => {
    if (!onExport) return;
    const key = JSON.stringify({
      n: nodes.map((n) => ({
        id: n.id,
        x: n.position?.x ?? 0,
        y: n.position?.y ?? 0,
      })),
      e: edges.map((e) => ({ s: e.source, t: e.target })),
      c: [...derivedCompletedIds].sort(),
    });
    if (lastExportKeyRef.current === key) return;
    lastExportKeyRef.current = key;
    onExport({
      nodes,
      edges,
      completedIds: Array.from(derivedCompletedIds),
    });
  }, [nodes, edges, derivedCompletedIds, onExport]);

  // after nodes, edges, completedIds state declarations
  useEffect(() => {
    try {
      onExport?.({
        nodes: nodes as any,
        edges: edges as any,
        completedIds: Array.from(completedIds ?? []),
      });
    } catch (e) {
      console.warn("SkillTree onExport failed", e);
    }
  }, [nodes, edges, completedIds, onExport]);

  return (
    <div className={className ?? "h-full w-full rounded border flex flex-col"}>
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
          onNodesChange={_rfOnNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          connectionMode={ConnectionMode.Loose}
          elementsSelectable
          proOptions={{ hideAttribution: true }}
          onSelectionChange={(sel) => {
            const next = (sel?.nodes ?? []).map((n) => n.id);
            const target = next.length ? next : [rootId];
            if (arraysEqual(lastSelectedRef.current, target)) return;
            lastSelectedRef.current = target;
            setSelectedIds(target);
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
