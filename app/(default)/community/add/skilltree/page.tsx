"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import SkillTree from "@/components/skilltree/SkillTree";
import type { SkillTreeDTO } from "@/components/skilltree/types";
import { Button } from "@/components/ui/button";

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return (crypto as Crypto).randomUUID().slice(0, 8);
  }
  return Math.random().toString(36).slice(2, 10);
}

export default function Page() {
  const router = useRouter();

  const communityName = "Community";

  const initial: SkillTreeDTO = {
    nodes: [],
    edges: [],
    completedIds: [],
  };

  const handleCreate = useCallback(() => {
    const id = makeId();
    router.push(`/communities/${id}`);
  }, [router]);

  return (
    <div className="max-h-[calc(100vh-6.5rem)] h-full mx-auto container w-full overflow-hidden flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">{communityName} — Skill Tree</h1>
        <Button onClick={handleCreate}>Create Skilltree</Button>
      </div>

      <div className="h-full">
        <SkillTree communityName={communityName} initial={initial} />
      </div>
    </div>
  );
}
