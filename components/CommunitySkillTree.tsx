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
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Button } from "./ui/button";

type SkillNode = {
  id: string;
  label: string;
  unlocked: boolean;
  children?: SkillNode[];
};

type CommunitySkillTreeProps = {
  rootSkill: SkillNode;
};

const NODE_WIDTH = 180;
const NODE_HEIGHT = 90;
const H_SPACING = NODE_WIDTH * 1.4;
const V_SPACING = NODE_HEIGHT * 1.8;

const SkillNodeComponent = ({ data }: any) => {
  // TODO: change these colours later
  const bgColor = data.unlocked
    ? data.main
      ? "#064e3b"
      : "#34d399"
    : "#d1d5db";
  const textColor = data.unlocked ? "white" : "#6b7280";

  return (
    <div
      className="px-4 py-2 rounded-lg font-semibold text-center shadow-md border"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: data.unlocked ? "transparent" : "#9ca3af",
        minWidth: 140,
        maxWidth: 180,
      }}
    >
      {/* for the edges */}
      <Handle type="target" position={Position.Top} isConnectable={false}/>
      <div style={{ padding: "6px 2px" }}>{data.label}</div>
      <Handle type="source" position={Position.Bottom} isConnectable={false}/>

    </div>
  );
};

export default function CommunitySkillTree({
  rootSkill,
}: CommunitySkillTreeProps) {
  const nodeTypes = { skillNode: SkillNodeComponent };

  // for dragging
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  // flatten tree to nodes + edges and compute positions
  const generateElements = useCallback(
    (
      skill: SkillNode,
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
          label: skill.label,
          main: !parentId,
          unlocked: skill.unlocked,
        },
      };

      const edgeList: Edge[] =
        parentId !== null
          ? [
              {
                id: `${parentId}__${id}`,
                source: parentId,
                target: id,
                type: "smoothstep",
                // if its unlocked, have an unlocked edge colour
                style: { stroke: skill.unlocked ? "#10b981" : "#9ca3af" },
              },
            ]
          : [];

      let allNodes: Node[] = [node];
      let allEdges: Edge[] = [...edgeList];
      // math
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
    []
  );

  // build nodes+edges
  useEffect(() => {
    const { nodes: flatNodes, edges: flatEdges } = generateElements(
      rootSkill,
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
      return typeof label === "string" && label.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (targetNode) {
      reactFlowInstance.fitView({ nodes: [targetNode], padding: 0.4, duration: 800 });
    }
  };

  return (
    <div style={{ width: "100%", height: "650px", display: "flex", flexDirection: "column" }}>
      {/* Search bar */}
      <div className="p-2 flex gap-2 items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search skill..."
          className="border rounded px-3 py-1 w-64"
        />
        <Button
          onClick={handleSearch}
        >
          Go
        </Button>
    </div>

    <div style={{ flex: 1  }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        defaultEdgeOptions={{ type: "smoothstep", animated: false }}
        // for user interaction -> do we want to keep this?
        nodesDraggable={false}
        nodesConnectable={false} 
        onInit={setReactFlowInstance}
        zoomOnScroll={false}
        panOnScroll={true}
      >
        <Controls />
      </ReactFlow>
    </div>
    </div>
  );
}
