import type { Edge, Node } from "@xyflow/react";
import { Position } from "@xyflow/react";
import type { SkillStatus, SkillNodeData } from "./types";

/** child -> [children...] using your semantics: edge.source = child, edge.target = parent */
export function buildChildrenMap(edges: Edge[]): Record<string, string[]> {
  const map: Record<string, Set<string>> = {};
  for (const e of edges) {
    const child = String(e.source);
    const parent = String(e.target);
    if (!child || !parent || child === parent) continue;
    (map[parent] ??= new Set()).add(child);
    map[child] ??= new Set();
  }
  return Object.fromEntries(Object.entries(map).map(([k, v]) => [k, [...v]]));
}

/** child -> [parents...] */
export function buildParentMap(edges: Edge[]): Record<string, string[]> {
  const map: Record<string, Set<string>> = {};
  for (const e of edges) {
    const child = String(e.source);
    const parent = String(e.target);
    if (!child || !parent || child === parent) continue;
    (map[child] ??= new Set()).add(parent);
    map[parent] ??= map[parent] ?? new Set();
  }
  return Object.fromEntries(Object.entries(map).map(([k, v]) => [k, [...v]]));
}

export function computeStatuses(
  nodes: Node<SkillNodeData>[],
  edges: Edge[],
  completed: Set<string>
): Map<string, SkillStatus> {
  const children = buildChildrenMap(edges);
  const nodeIds = new Set(nodes.map((n) => n.id));
  const memo = new Map<string, SkillStatus>();
  const stack = new Set<string>();

  const getStatus = (id: string): SkillStatus => {
    if (memo.has(id)) return memo.get(id)!;
    if (stack.has(id)) {
      memo.set(id, "locked");
      return "locked";
    }

    if (!nodeIds.has(id)) {
      memo.set(id, "locked");
      return "locked";
    }
    if (completed.has(id)) {
      memo.set(id, "completed");
      return "completed";
    }

    stack.add(id);
    const kids = children[id] ?? [];
    const status: SkillStatus =
      kids.length === 0
        ? "unlocked"
        : kids.every((k) => getStatus(k) === "completed")
          ? "unlocked"
          : "locked";
    stack.delete(id);

    memo.set(id, status);
    return status;
  };

  nodes.forEach((n) => getStatus(n.id));
  return memo;
}

export function layoutTopDown(
  nodes: Node<SkillNodeData>[],
  edges: Edge[],
  colGap = 260,
  rowGap = 120
): Node<SkillNodeData>[] {
  const children = buildChildrenMap(edges);

  const depthMemo = new Map<string, number>();
  const depth = (id: string): number => {
    if (depthMemo.has(id)) return depthMemo.get(id)!;
    const kids = children[id] ?? [];
    const d = kids.length === 0 ? 0 : Math.max(...kids.map(depth)) + 1;
    depthMemo.set(id, d);
    return d;
  };

  nodes.forEach((n) => depth(n.id));

  const levels = new Map<number, Node<SkillNodeData>[]>();
  nodes.forEach((n) => {
    const d = depthMemo.get(n.id)!;
    const arr = levels.get(d) ?? [];
    arr.push(n);
    levels.set(d, arr);
  });

  const maxDepth = Math.max(...levels.keys());
  const laidOut: Node<SkillNodeData>[] = [];

  for (let d = maxDepth; d >= 0; d--) {
    const row = (levels.get(d) ?? []).sort((a, b) =>
      String(a.id).localeCompare(String(b.id))
    );
    const count = row.length || 1;
    const totalWidth = (count - 1) * colGap;

    row.forEach((n, i) => {
      const x = -totalWidth / 2 + i * colGap;
      const y = (maxDepth - d) * rowGap;
      laidOut.push({
        ...n,
        position: n.position ?? { x, y },
        sourcePosition: Position.Top,
        targetPosition: Position.Bottom,
      });
    });
  }

  return laidOut;
}
