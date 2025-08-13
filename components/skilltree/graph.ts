// components/skill-tree/graph.ts
import type { Edge, Node } from '@xyflow/react';
import { Position } from '@xyflow/react';
import type { SkillStatus, SkillNodeData } from './types';

export function buildChildrenMap(edges: Edge[]): Record<string, string[]> {
  // edges are child -> parent
  const map: Record<string, string[]> = {};
  for (const e of edges) {
    const child = e.source!;
    const parent = e.target!;
    if (!map[parent]) map[parent] = [];
    map[parent].push(child);
    if (!map[child]) map[child] = [];
  }
  return map;
}

export function computeStatuses(
  nodes: Node<SkillNodeData>[],
  edges: Edge[],
  completed: Set<string>
): Map<string, SkillStatus> {
  const children = buildChildrenMap(edges);
  const memo = new Map<string, SkillStatus>();
  const nodeIds = new Set(nodes.map(n => n.id));

  const getStatus = (id: string): SkillStatus => {
    if (memo.has(id)) return memo.get(id)!;
    if (!nodeIds.has(id)) { memo.set(id, 'locked'); return 'locked'; }
    if (completed.has(id)) { memo.set(id, 'completed'); return 'completed'; }

    const kids = children[id] ?? [];
    if (kids.length === 0) { memo.set(id, 'unlocked'); return 'unlocked'; }

    const allKidsCompleted = kids.every(k => getStatus(k) === 'completed');
    const s: SkillStatus = allKidsCompleted ? 'unlocked' : 'locked';
    memo.set(id, s);
    return s;
  };

  nodes.forEach(n => getStatus(n.id));
  return memo;
}

/** Tiny auto-layout: stacks by "level" (distance from leaves). */
export function layoutTopDown(
  nodes: Node<SkillNodeData>[],
  edges: Edge[],
  colGap = 260,
  rowGap = 120
): Node<SkillNodeData>[] {
  const children = buildChildrenMap(edges);

  // depth from leaves: leaves = 0, parents = maxChildDepth + 1
  const depthMemo = new Map<string, number>();
  const depth = (id: string): number => {
    if (depthMemo.has(id)) return depthMemo.get(id)!;
    const kids = children[id] ?? [];
    const d = kids.length === 0 ? 0 : Math.max(...kids.map(depth)) + 1;
    depthMemo.set(id, d);
    return d;
  };

  nodes.forEach(n => depth(n.id));
  const levels = new Map<number, Node<SkillNodeData>[]>();
  nodes.forEach(n => {
    const d = depthMemo.get(n.id)!;
    const arr = levels.get(d) ?? [];
    arr.push(n);
    levels.set(d, arr);
  });

  let laidOut: Node<SkillNodeData>[] = [];
  const maxDepth = Math.max(...levels.keys());

  for (let d = maxDepth; d >= 0; d--) {
    const row = (levels.get(d) ?? []).sort((a, b) => a.id.localeCompare(b.id));
    row.forEach((n, i) => {
      laidOut.push({
        ...n,
        sourcePosition: Position.Top,
        targetPosition: Position.Bottom,
        
      });
    });
  }
  return laidOut;
}
