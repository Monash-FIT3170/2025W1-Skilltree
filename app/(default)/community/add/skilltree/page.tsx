"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createCommunityAction } from "@/actions/create-community-action";
import SkillTree from "@/components/skilltree/SkillTree";
import type { SkillTreeDTO } from "@/components/skilltree/types";
import { Button } from "@/components/ui/button";
import { reactFlowToBackendTree } from "@/components/skilltree/treeTransform";

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

  const [skillTreeDto, setSkillTreeDto] = useState<SkillTreeDTO>(initial);
  const [loading, setLoading] = useState(false);

  const communityData = useMemo(() => {
    if (typeof window === "undefined") return null;
    const raw = sessionStorage.getItem("communityData");
    return raw ? JSON.parse(raw) : null;
  }, []);

  // redirect back if no community meta
  useEffect(() => {
    if (!communityData) {
      router.push("/community/add");
    }
  }, [communityData, router]);

  const handleCreate = useCallback(async () => {
    if (!communityData) {
      router.push("/community/add");
      return;
    }

    setLoading(true);
    try {
      const backendRoots = reactFlowToBackendTree(
        skillTreeDto.nodes,
        skillTreeDto.edges,
        ""
      );
      const skillTreePayload = backendRoots.length ? backendRoots[0] : null;

      const iconDataUrl =
        typeof window !== "undefined"
          ? sessionStorage.getItem("communityIcon")
          : null;
      let pfpFile: File | undefined;
      if (iconDataUrl) {
        const res = await fetch(iconDataUrl);
        const blob = await res.blob();
        pfpFile = new File([blob], "community-icon.png", {
          type: blob.type || "image/png",
        });
      }

      // call server action
      const result = await createCommunityAction({
        name: communityData.name,
        description: communityData.description ?? "",
        tags: communityData.tags ?? [],
        pfp: pfpFile ?? null,
        skillTree: skillTreePayload ?? undefined,
      });

      if (!result || result.ok === false) {
        console.error("createCommunityAction failed", result);
        alert("Failed to create community: " + (result?.message ?? "unknown"));
        return;
      }

      // cleanup and navigate
      sessionStorage.removeItem("communityData");
      sessionStorage.removeItem("communityIcon");

      const id = result.data?.id ?? result.data?.skillTree?.id ?? makeId();
      router.push(`/community/${id}`);
    } catch (err) {
      console.error(err);
      alert("Failed to create community");
    } finally {
      setLoading(false);
    }
  }, [communityData, router, skillTreeDto]);

  const handleExport = useCallback((dto: SkillTreeDTO) => {
    setSkillTreeDto(dto);
  }, []);

  return (
    <div className="max-h-[calc(100vh-6.5rem)] h-full mx-auto container w-full overflow-hidden flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h1 className="text-2xl font-semibold">{communityName} — Skill Tree</h1>
        <div className="flex gap-2 mt-2 md:mt-0">
          <Button onClick={handleCreate} disabled={loading}>
            {loading ? "Creating..." : "Create Community"}
          </Button>
        </div>
      </div>

      <div className="h-full">
        <SkillTree
          communityName={communityData?.name ?? communityName}
          initial={initial}
          onExport={handleExport} // stable handler
        />
      </div>
    </div>
  );
}
