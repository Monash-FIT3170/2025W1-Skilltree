"use client";

import React, { useEffect, useCallback, useRef, useState } from "react";
import {
  ReactFlow,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

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

type FilterNodeData = {
  label: string;
  unlocked: boolean;
  selected: boolean;
  onClickRef?: React.RefObject<((id: string) => void) | null>;
};

// custom node component to handle its own clicks
// TODO: pick a colour
const FilterNode = ({ id, data }: { id: string; data: FilterNodeData }) => {
  const bgColor = data.selected
    ? "#2563eb"
    : data.unlocked
      ? "#34d399"
      : "#d1d5db";
  const textColor = data.selected
    ? "white"
    : data.unlocked
      ? "white"
      : "#374151";

  // make the selected border explicit so it always shows
  const selectedBorder = data.selected
    ? "1px solid #1d4ed8"
    : "1px solid transparent";

  return (
    <div
      onClick={() => data.onClickRef?.current?.(id)}
      className="px-3 py-1 rounded font-medium text-center"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: selectedBorder,
        minWidth: 100,
        maxWidth: 140,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={false}
        style={{ pointerEvents: "none" }}
      />
      <div style={{ pointerEvents: "none" }}>{data.label}</div>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={false}
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
};

export default function SkillTreeFilter({
  rootSkill,
  onSelect,
}: SkillTreeFilterProps) {
  const nodeTypes = { filterNode: FilterNode };

  const [nodes, setNodes, onNodesChange] = useNodesState(
    [] as Node<FilterNodeData>[]
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState([] as Edge[]);

  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  // stable ref for click handler
  const selectRef = useRef<((id: string) => void) | null>(null);

  const handleSelect = useCallback(
    (id: string) => {
      const newSelectedId = id === selectedNodeId ? null : id;
      setSelectedNodeId(newSelectedId);

      // Update both the node.selected property (React Flow internals)
      setNodes((nds) =>
        nds.map((n) => ({
          ...n,
          selected: n.id === newSelectedId,
          data: {
            ...n.data,
            selected: n.id === newSelectedId,
          },
        }))
      );

      onSelect(newSelectedId);
    },
    [selectedNodeId, onSelect, setNodes]
  );

  // keep the ref pointing to the latest handler
  useEffect(() => {
    selectRef.current = handleSelect;
  }, [handleSelect]);

  // build the tree -> nodes/edges
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

      const node: Node<FilterNodeData> = {
        id,
        type: "filterNode",
        position: { x, y },
        data: {
          label: skill.label,
          unlocked: skill.unlocked,
          selected: id === selectedNodeId,
          onClickRef: selectRef,
        },
        // keep node.selected aligned too
        selected: id === selectedNodeId,
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

      let allNodes: Node<FilterNodeData>[] = [node];
      let allEdges: Edge[] = [...edgeList];

      if (skill.children && skill.children.length > 0) {
        skill.children.forEach((child: SkillNode, childIndex) => {
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
    [selectedNodeId]
  );

  // regene nodes when tree or selection changes
  useEffect(() => {
    const { nodes: flatNodes, edges: flatEdges } = generateElements(
      rootSkill,
      null
    );
    setNodes(flatNodes);
    setEdges(flatEdges);
  }, [rootSkill, generateElements, setNodes, setEdges]);

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
        elementsSelectable={true}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        selectionOnDrag={false}
      ></ReactFlow>
    </div>
  );
}
