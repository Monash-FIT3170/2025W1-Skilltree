"use client";

import React, { useState } from "react";
import CommunitySkillTree from "@/components/CommunitySkillTree";
import { Button } from "@/components/ui/button";
import { getCommunityAction } from "@/actions/get-community-action";
import { useParams } from "next/navigation";
import { TAuthSkillTree } from "@/types";
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

  if (!skillTree) return;

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
        <CommunitySkillTree rootSkill={skillTree!.skillNodes[0]} />
      </div>
    </div>
  );
}
