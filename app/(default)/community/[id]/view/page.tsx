"use client";

import React, { useState, useMemo } from "react";
import CommunitySkillTree from "@/components/CommunitySkillTree";
import { Button } from "@/components/ui/button";
import { getCommunityAction } from "@/actions/get-community-action";
import { useParams } from "next/navigation";
import { TAuthSkillTree, TSkillNode } from "@/types";
import { useRouter } from "next/navigation";

export default function CommunityPage() {
  const params = useParams();
  const id = params.id;
  const [skillTree, setSkillTree] = useState<TAuthSkillTree | null>(null);
  const router = useRouter();

  const fetchData = async () => {
    const data = await getCommunityAction(id as string);
    setSkillTree(data.message as TAuthSkillTree);
  };

  React.useEffect(() => {
    fetchData();
  }, [id]);

  type FlatNode = {
    id: string;
    name: string;
    parentId?: string | null;
    parentNodeId?: string | null;
  };

  function buildTree(nodes: FlatNode[], communityName: string) {
    if (!nodes || nodes.length === 0) {
      return {
        id: "root",
        name: communityName,
        childNode: [],
      } as TSkillNode;
    }

    const byParent = new Map<string | null, FlatNode[]>();

    // group by parent
    nodes.forEach((n) => {
      const key = (n as any).parentNodeId ?? (n as any).parentId ?? null;
      if (!byParent.has(key)) byParent.set(key, []);
      byParent.get(key)!.push(n);
    });

    const toNode = (n: FlatNode): TSkillNode => ({
      id: n.id,
      name: n.name,
      childNode: (byParent.get(n.id) ?? []).map(toNode),
    });

    // Find root nodes
    const rootNodes = byParent.get(null) ?? [];

    // If we have exactly one root node
    if (rootNodes.length === 1) {
      return toNode(rootNodes[0]);
    }

    // Handle multiple roots case
    if (rootNodes.length > 1) {
      console.debug(
        `Found ${rootNodes.length} root nodes, using first one as main root`
      );
      return toNode(rootNodes[0]);
    }

    // No root nodes
    if (nodes.length > 0) {
      console.debug(
        "No root nodes found but nodes exist, using first node as root"
      );
      return toNode(nodes[0]);
    }

    // no roots
    return {
      id: "root",
      name: communityName,
      childNode: [],
    } as TSkillNode;
  }

  const rootSkill = useMemo(() => {
    if (!skillTree) return null;
    return buildTree(skillTree.skillNodes as any, skillTree.name);
  }, [skillTree]);

  if (!skillTree || !rootSkill) return null;

  // integrate events, skilltree, posts here
  return (
    <div className="w-full h-full">
      <header className="flex justify-center gap-3 mb-5 ">
        <h1 className="text-3xl font-bold">{skillTree.name}</h1>
        <div className="ml-auto gap-3">
          <Button onClick={() => router.push(`/community/${id}`)}>
            View Community
          </Button>
        </div>
      </header>

      {/* SkillTree */}
      <div className="flex justify-center">
        <CommunitySkillTree rootSkill={rootSkill} />
      </div>
    </div>
  );
}
