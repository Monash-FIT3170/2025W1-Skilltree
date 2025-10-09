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
  // map of nodeId -> node
  const nodeMap: Record<string, BackendSkillNode> = {};
  nodes.forEach((n) => {
    nodeMap[n.id] = {
      id: n.id,
      name: typeof n.data.label === "string" ? n.data.label : "",
      description: typeof n.data.description === "string" ? n.data.description : undefined,
      xpPoint: typeof n.data.xp === "number" ? n.data.xp : undefined,
      unlocked: typeof n.data.unlocked === "boolean" ? n.data.unlocked : false,
      skillTreeId,
      children: [],
      parentNodeId: typeof n.data.parentNodeId === "string" ? n.data.parentNodeId : undefined,
    };
  });

  edges.forEach((e) => {
    const parent = nodeMap[e.source];
    const child = nodeMap[e.target];
    if (parent && child) {
      parent.children!.push(child);
      child.parentNodeId = parent.id;
    }
  });

  // find root nodes (no parentNodeId)
  const roots = Object.values(nodeMap).filter((n) => !n.parentNodeId);

  return roots;
}
