import type { Node, Edge } from "@xyflow/react";

// Backend DTO for skill node
export type BackendSkillNode = {
  id: string;
  name: string;
  description?: string;
  xpPoint?: number;
  unlocked: boolean;
  skillTreeId?: string;
  children?: BackendSkillNode[];
  parentNodeId?: string;
};

// Backend to React Flow
export function backendTreeToReactFlow(root: BackendSkillNode) {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  function walk(node: BackendSkillNode, parentId?: string) {
    nodes.push({
      id: node.id,
      type: "skillNode",
      position: { x: 0, y: 0 },
      data: {
        label: node.name,
        description: node.description,
        xp: node.xpPoint,
        unlocked: node.unlocked,
        skillTreeId: node.skillTreeId,
        main: !parentId,
        parentNodeId: parentId,
      },
    });
    if (parentId) {
      edges.push({
        id: `${parentId}__${node.id}`,
        source: parentId,
        target: node.id,
        type: "smoothstep",
        style: { stroke: node.unlocked ? "#10b981" : "#9ca3af" },
      });
    }
    node.children?.forEach((child) => walk(child, node.id));
  }

  walk(root);

  return { nodes, edges };
}

// React Flow to Backend
export function reactFlowToBackendTree(
  nodes: Node[],
  edges: Edge[],
  skillTreeId: string
): BackendSkillNode[] {
  // build node map for every node
  const nodeMap: Record<string, BackendSkillNode> = {};
  // map positions to help decide parent/child when unsure on edge direction
  const posMap: Record<string, { x?: number; y?: number }> = {};

  for (const n of nodes) {
    const d = (n.data ?? {}) as any;
    nodeMap[String(n.id)] = {
      id: String(n.id),
      name:
        (typeof d?.title === "string" && d.title) ||
        (typeof d?.label === "string" && d.label) ||
        "",
      description:
        typeof d?.description === "string" ? d.description : undefined,
      xpPoint: typeof d?.xp === "number" ? d.xp : undefined,
      unlocked: typeof d?.unlocked === "boolean" ? d.unlocked : false,
      skillTreeId,
      children: [],
      parentNodeId: undefined,
    };

    // capture position if present
    if (n.position) {
      posMap[String(n.id)] = { x: n.position.x, y: n.position.y };
    }
  }

  // wire parent/child using edges
  // if both nodes have positions, pick upper node (smaller y) as parent
  // otherwise edges
  for (const e of edges) {
    const srcId = String(e.source);
    const tgtId = String(e.target);
    const srcNode = nodeMap[srcId];
    const tgtNode = nodeMap[tgtId];

    if (!srcNode && !tgtNode) {
      console.debug("reactFlowToBackendTree: edge references missing nodes", e);
      continue;
    }

    let parent: BackendSkillNode | undefined;
    let child: BackendSkillNode | undefined;

    if (srcNode && tgtNode) {
      const srcPos = posMap[srcId];
      const tgtPos = posMap[tgtId];
      if (typeof srcPos?.y === "number" && typeof tgtPos?.y === "number") {
        // smaller y = visually above => parent
        if (srcPos.y <= tgtPos.y) {
          parent = srcNode;
          child = tgtNode;
        } else {
          parent = tgtNode;
          child = srcNode;
        }
      } else {
        // or just use edges
        parent = srcNode;
        child = tgtNode;
      }
    } else if (srcNode) {
      parent = srcNode;
      child = undefined;
    } else if (tgtNode) {
      parent = tgtNode;
      child = undefined;
    }

    if (parent && child) {
      parent.children = parent.children ?? [];
      parent.children.push(child);
      child.parentNodeId = parent.id;
    }
  }

  // find roots
  const roots = Object.values(nodeMap).filter((n) => !n.parentNodeId);
  
  return roots;
}
