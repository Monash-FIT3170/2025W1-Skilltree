"use client";
//TODO: I need to fix this, currently isnt functional
import React, { useEffect, useCallback, useState } from "react";
import ReactFlow, {
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

type SkillNode = {
  id: string;
  label: string;
  unlocked: boolean;
  children?: SkillNode[];
};

type SkillTreeFilterProps = {
  rootSkill: SkillNode;
  onSelect: (nodeId: string | null) => void; // returns selected node id
};

const NODE_WIDTH = 140;
const NODE_HEIGHT = 70;
const H_SPACING = NODE_WIDTH * 1.4;
const V_SPACING = NODE_HEIGHT * 1.8;

// 🔹 Custom node that handles its own click
const FilterNode = ({ id, data }: any) => {
  const bgColor = data.selected
    ? "#2563eb" // blue for selected
    : data.unlocked
    ? "#34d399" // green for unlocked
    : "#d1d5db"; // grey default

  const textColor = data.selected ? "white" : data.unlocked ? "white" : "#374151";

  return (
    <div
      onClick={() => data.onClick?.(id)} // ✅ click handler
      className="px-3 py-1 rounded-md font-medium text-center shadow-sm border"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: data.selected ? "#1d4ed8" : "transparent",
        minWidth: 100,
        maxWidth: 140,
        cursor: "pointer",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={false}
        style={{ pointerEvents: "none" }}
      />
      {data.label}
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={false}
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
};

export default function SkillTreeFilter({ rootSkill, onSelect }: SkillTreeFilterProps) {
  const nodeTypes = { filterNode: FilterNode };

  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  // TODO: Fix this
  // selection logic
  const handleSelect = useCallback(
    (id: string) => {
      const newSelectedId = id === selectedNodeId ? null : id;
      setSelectedNodeId(newSelectedId);

      setNodes((nds) =>
        nds.map((n) => ({
          ...n,
          data: {
            ...n.data,
            selected: n.id === newSelectedId,
            onClick: handleSelect, // keep passing the handler
          },
        }))
      );

      onSelect(newSelectedId);
    },
    [selectedNodeId, onSelect]
  );

  const generateElements = useCallback(
    (
      skill: SkillNode,
      parentId: string | null,
      depth = 0,
      index = 0,
      siblingCount = 1
    ) => {
      const id = skill.id;
      const x = (index - (siblingCount - 1) / 2) * H_SPACING;
      const y = depth * V_SPACING;

      const node: Node = {
        id,
        type: "filterNode",
        position: { x, y },
        data: {
          label: skill.label,
          unlocked: skill.unlocked,
          selected: false,
          onClick: handleSelect,
        },
        draggable: false,
      };

      const edgeList: Edge[] =
        parentId !== null
          ? [
              {
                id: `${parentId}__${id}`,
                source: parentId,
                target: id,
                type: "smoothstep",
                style: { stroke: "#9ca3af" },
              },
            ]
          : [];

      let allNodes: Node[] = [node];
      let allEdges: Edge[] = [...edgeList];

      if (skill.children && skill.children.length > 0) {
        skill.children.forEach((child, childIndex) => {
          const { nodes: cNodes, edges: cEdges } = generateElements(
            child,
            id,
            depth + 1,
            childIndex,
            skill.children!.length
          );
          allNodes = allNodes.concat(cNodes);
          allEdges = allEdges.concat(cEdges);
        });
      }

      return { nodes: allNodes, edges: allEdges };
    },
    [handleSelect]
  );

  useEffect(() => {
    const { nodes: flatNodes, edges: flatEdges } = generateElements(rootSkill, null);
    setNodes(flatNodes);
    setEdges(flatEdges);
  }, [rootSkill, generateElements]);

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Background gap={16} />
      </ReactFlow>
    </div>
  );
}
