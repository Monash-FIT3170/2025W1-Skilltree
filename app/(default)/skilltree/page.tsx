'use client';

import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  ConnectionMode,
  useNodesState,
  useEdgesState,
  NodeTypes,
  Edge,
  Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import SkillNode from '@/components/skilltree/SkillNode';
import { computeStatuses, layoutTopDown } from '@/components/skilltree/graph';
import type { SkillNodeData, SkillTreeDTO } from '@/components/skilltree/types';

const WrappedSkillNode = (props: any) => {
  const { id, data, selected } = props;
  return <SkillNode id={id} data={data} selected={selected} width={undefined} height={undefined} sourcePosition={undefined} targetPosition={undefined} dragHandle={undefined} parentId={undefined} type={undefined} dragging={undefined} zIndex={undefined} selectable={undefined} deletable={undefined} draggable={undefined} isConnectable={false} positionAbsoluteX={0} positionAbsoluteY={0} />;
};

const nodeTypes: NodeTypes = { skill: WrappedSkillNode };

type Props = {
  /** Provide initial data from your API (or start empty and fetch later) */
  initial?: SkillTreeDTO;
  /** Called when user completes a node */
  onComplete?: (nodeId: string) => Promise<void> | void;
  /** Emits the whole DTO whenever nodes/edges/completions change */
  onChange?: (dto: SkillTreeDTO) => void;
  /** Optional: control width/height of canvas container */
  className?: string;
};

export default function SkillTree({ initial, onComplete, onChange, className }: Props) {
  // ---- base graph (we'll keep using your top-down layout helper)
  const [baseNodes, setBaseNodes] = useState<Node<SkillNodeData>[]>(() => {
    const n = (initial?.nodes ?? []).map((n) => ({ ...n, type: 'skill' as const }));
    return layoutTopDown(n, initial?.edges ?? []);
  });
  const [baseEdges, setBaseEdges] = useState<Edge[]>(() => initial?.edges ?? []);

  const [completedIds, setCompletedIds] = useState<Set<string>>(
    () => new Set(initial?.completedIds ?? [])
  );

  // React Flow state wrappers
  const [nodes, setNodes, onNodesChange] = useNodesState<Node<SkillNodeData>>(baseNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(baseEdges);

  // Selection (for add-child / delete)
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // refresh when initial changes
  useEffect(() => {
    if (!initial) return;
    const n = (initial.nodes ?? []).map((x) => ({ ...x, type: 'skill' as const }));
    const laid = layoutTopDown(n, initial.edges ?? []);
    setBaseNodes(laid);
    setBaseEdges(initial.edges ?? []);
    setNodes(laid);
    setEdges(initial.edges ?? []);
    setCompletedIds(new Set(initial.completedIds ?? []));
    setSelectedIds([]);
  }, [initial, setEdges, setNodes]);

  // compute derived statuses, then inject into node data
  const nodesWithStatus = useMemo(() => {
    const statusMap = computeStatuses(nodes, edges, completedIds);
    return nodes.map((n) => ({
      ...n,
      data: {
        ...n.data,
        status: statusMap.get(n.id),
        onComplete: async (id: string) => {
          setCompletedIds((prev) => new Set(prev).add(id));
          try {
            await onComplete?.(id);
          } catch {
            /* swallow UI errors here */
          }
        },
      },
    }));
  }, [nodes, edges, completedIds, onComplete]);

  // Emit DTO to parent if requested
  const emitChange = useCallback(() => {
    onChange?.({
      nodes: nodes.map((n) => ({
        id: n.id,
        type: 'skill',
        data: n.data,
        position: n.position,
      })),
      edges,
      completedIds: Array.from(completedIds),
    });
  }, [nodes, edges, completedIds, onChange]);

  useEffect(() => {
    emitChange();
  }, [emitChange]);

  // ---- helpers: id + layout
  const makeId = useCallback(
    () => `n_${Math.random().toString(36).slice(2, 9)}`,
    []
  );

  const relayout = useCallback(
    (nextNodes: Node<SkillNodeData>[], nextEdges: Edge[]) =>
      layoutTopDown(
        // ensure all nodes have type set
        nextNodes.map((n) => ({ ...n, type: 'skill' as const })),
        nextEdges
      ),
    []
  );

  // ---- mutations
  const addRoot = useCallback(() => {
    const id = makeId();
    const newNode: Node<SkillNodeData> = {
      id,
      type: 'skill',
      data: { title: 'New node' },
      position: { x: 0, y: 0 },
    };
    const laid = relayout([...nodes, newNode], edges);
    setNodes(laid);
  }, [edges, makeId, nodes, relayout, setNodes]);

  const addChild = useCallback(() => {
    const parentId = selectedIds[0];
    if (!parentId) return;

    const id = makeId();
    const newNode: Node<SkillNodeData> = {
      id,
      type: 'skill',
      data: { title: 'New child' },
      position: { x: 0, y: 0 },
    };
    const newEdge: Edge = {
      id: `e-${id}-${parentId}`,
      source: id, // child
      target: parentId, // parent
    };

    const nextNodes = [...nodes, newNode];
    const nextEdges = [...edges, newEdge];

    setEdges(nextEdges);
    setNodes(relayout(nextNodes, nextEdges));
    setSelectedIds([id]); // focus the new node
  }, [edges, nodes, relayout, selectedIds, makeId]);

  const deleteSelected = useCallback(() => {
    if (selectedIds.length === 0) return;
    const toRemove = new Set(selectedIds);

    const nextNodes = nodes.filter((n) => !toRemove.has(n.id));
    const nextEdges = edges.filter(
      (e) => !toRemove.has(e.source as string) && !toRemove.has(e.target as string)
    );
    const nextCompleted = new Set(
      Array.from(completedIds).filter((id) => !toRemove.has(id))
    );

    setCompletedIds(nextCompleted);
    setEdges(nextEdges);
    setNodes(relayout(nextNodes, nextEdges));
    setSelectedIds([]);
  }, [completedIds, edges, nodes, relayout, selectedIds]);

  return (
    <div className={className ?? 'h-[75vh] w-full rounded-md border flex flex-col'}>
      {/* Tiny toolbar */}
      <div className="flex items-center gap-2 p-2 border-b bg-muted/30">
        <button
          className="px-2 py-1 border rounded-md text-xs hover:bg-muted"
          onClick={addRoot}
        >
          + Add root
        </button>
        <button
          className="px-2 py-1 border rounded-md text-xs hover:bg-muted disabled:opacity-50"
          onClick={addChild}
          disabled={!selectedIds.length}
        >
          + Add child
        </button>
        <button
          className="px-2 py-1 border rounded-md text-xs hover:bg-destructive/20 disabled:opacity-50"
          onClick={deleteSelected}
          disabled={!selectedIds.length}
        >
          🗑 Delete selected
        </button>

        <div className="ml-auto text-xs text-muted-foreground">
          {selectedIds.length
            ? `${selectedIds.length} selected`
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
            // sel: { nodes: Node[], edges: Edge[] }
            setSelectedIds((sel?.nodes ?? []).map((n) => n.id));
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
