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
import { useEffect, useMemo, useState } from 'react';
import SkillNode from './SkillNode';
import { computeStatuses, layoutTopDown } from './graph';
import type { SkillNodeData, SkillTreeDTO } from './types';


const nodeTypes: Record<string, React.ComponentType<any>> = { skill: SkillNode };

type Props = {
  /** Provide initial data from your API (or start empty and fetch later) */
  initial?: SkillTreeDTO;
  /** Called when user completes a node */
  onComplete?: (nodeId: string) => Promise<void> | void;
  /** Optional: control width/height of canvas container */
  className?: string;
};

export default function SkillTree({ initial, onComplete, className }: Props) {
  // hold base graph (positions, ids). Layout once on mount or when initial changes.
  const [baseNodes, setBaseNodes] = useState<Node<SkillNodeData>[]>(() => {
    const n = (initial?.nodes ?? []).map(n => ({ ...n, type: 'skill' as const }));
    return layoutTopDown(n, initial?.edges ?? []);
  });
  const [baseEdges, setBaseEdges] = useState<Edge[]>(() => initial?.edges ?? []);

  const [completedIds, setCompletedIds] = useState<Set<string>>(
    () => new Set(initial?.completedIds ?? [])
  );

  // reactflow state wrappers
  const [nodes, setNodes, onNodesChange] = useNodesState<Node<SkillNodeData>>(baseNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(baseEdges);

  // recompute layout if initial changes (e.g., fetched)
  useEffect(() => {
    if (!initial) return;
    const n = (initial.nodes ?? []).map(n => ({ ...n, type: 'skill' as const }));
    setBaseNodes(layoutTopDown(n, initial.edges ?? []));
    setBaseEdges(initial.edges ?? []);
    setNodes(layoutTopDown(n, initial.edges ?? []));
    setEdges(initial.edges ?? []);
    setCompletedIds(new Set(initial.completedIds ?? []));
  }, [initial, setEdges, setNodes]);

  // compute derived statuses, then inject into node data (render-only)
  const nodesWithStatus = useMemo(() => {
    const statusMap = computeStatuses(nodes, edges, completedIds);
    return nodes.map(n => ({
      ...n,
      data: {
        ...n.data,
        status: statusMap.get(n.id),
        onComplete: async (id: string) => {
          setCompletedIds(prev => new Set(prev).add(id));
          try { await onComplete?.(id); } catch { /* swallow UI errors here */ }
        }
      },
    }));
  }, [nodes, edges, completedIds, onComplete]);

  return (
    <div className={className ?? 'h-[75vh] w-full rounded-md border'}>
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
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
