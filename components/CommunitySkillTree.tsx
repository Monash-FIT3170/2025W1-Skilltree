"use client";

import React, { useEffect, useCallback, useState } from "react";
import {
  ReactFlow,
  Controls,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  ReactFlowInstance,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Button } from "./ui/button";
import { TSkillNode } from "@/types";

const NODE_WIDTH = 140;
const NODE_HEIGHT = 70;
const H_SPACING = NODE_WIDTH * 1.4;
const V_SPACING = NODE_HEIGHT * 1.8;

const Legend = () => {
  const items = [
    {
      label: "Main Skill",
      bg: "#064e3b",
      border: "transparent",
      text: "white",
    },
    { label: "Unlocked", bg: "#34d399", border: "transparent", text: "white" },
    { label: "Locked", bg: "#d1d5db", border: "#9ca3af", text: "#6b7280" },
    {
      label: "Unlockable",
      bg: "#d1d5db",
      border: "#10b981",
      text: "#6b7280",
      borderWidth: 3,
    },
  ];

  return (
    <div className="p-4 flex gap-6 items-center rounded">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <div
            className="rounded shadow-sm border"
            style={{
              width: 32,
              height: 32,
              backgroundColor: item.bg,
              borderColor: item.border,
              borderWidth: item.borderWidth ?? 1,
            }}
          />
          <span className="text-sm text-gray-700">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const SkillNodeComponent = ({ data }: any) => {
  const bgColor = data.unlocked
    ? data.main
      ? "#064e3b"
      : "#34d399"
    : "#d1d5db";
  const textColor = data.unlocked ? "white" : "#374151";
  const borderColor = data.unlockable
    ? "#10b981"
    : data.unlocked
      ? "transparent"
      : "#9ca3af";

  return (
    <div
      className="px-3 py-1 rounded font-medium text-center"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: `1px solid ${borderColor}`,
        minWidth: 100,
        maxWidth: 140,
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

type CommunitySkillNode = {
  id: string;
  name: string;
  childNode?: CommunitySkillNode[];
};

export default function CommunitySkillTree({
  rootSkill,
  inRoot = false,
}: {
  rootSkill: TSkillNode;
  inRoot?: boolean;
}) {
  const nodeTypes = { skillNode: SkillNodeComponent };

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);

  // flatten tree to nodes + edges and compute positions
  const generateElements = useCallback(
    (
      skill: CommunitySkillNode,
      parentId: string | null,
      depth = 0,
      index = 0,
      siblingCount = 1
    ) => {
      const id = skill.id;
      // center the siblings around x = 0
      const x = (index - (siblingCount - 1) / 2) * H_SPACING;
      const y = depth * V_SPACING;

      const node: Node = {
        id,
        type: "skillNode",
        position: { x, y },
        data: {
          label: skill.name,
          main: !parentId,
          unlocked: true,
          unlockable: true,
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

      if (skill.childNode && skill.childNode.length > 0) {
        skill.childNode.forEach((child, childIndex) => {
          const { nodes: cNodes, edges: cEdges } = generateElements(
            child,
            id,
            depth + 1,
            childIndex,
            skill.childNode!.length
          );
          allNodes = allNodes.concat(cNodes);
          allEdges = allEdges.concat(cEdges);
        });
      }

      return { nodes: allNodes, edges: allEdges };
    },
    []
  );

  // build nodes+edges
  useEffect(() => {
    const { nodes: flatNodes, edges: flatEdges } = generateElements(
      rootSkill as CommunitySkillNode,
      null
    );
    setNodes(flatNodes);
    setEdges(flatEdges);
  }, [rootSkill, generateElements, setNodes, setEdges]);

  // for search
  const handleSearch = () => {
    if (!searchTerm || !reactFlowInstance) return;
    const targetNode = nodes.find((n) => {
      const label = n.data.label;
      return (
        typeof label === "string" &&
        label.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    if (targetNode) {
      reactFlowInstance.fitView({
        nodes: [targetNode],
        padding: 0.4,
        duration: 800,
      });
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "650px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Search bar */}
      {!inRoot && (
        <div className="p-2 flex gap-2 items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search skill..."
            className="border rounded px-3 py-1 w-64"
          />
          <Button onClick={handleSearch}>Go</Button>
        </div>
      )}

      <div style={{ flex: 1 }}>
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
          panOnDrag={true}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          selectionOnDrag={false}
          onInit={setReactFlowInstance}
        >
          <Controls />
        </ReactFlow>
      </div>

      {!inRoot && <Legend />}
    </div>
  );
}
