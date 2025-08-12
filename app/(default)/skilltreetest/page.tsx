"use client";

import React from "react";
import CommunitySkillTree from "@/components/CommunitySkillTree";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillTreeTestPage() {
  // testing tree
  const knittingSkillTree = {
    id: "knitting",
    label: "Knitting",
    unlocked: true,
    children: [
      {
        id: "cross-stitch",
        label: "Cross Stitch",
        unlocked: false,
        children: [
          { id: "pattern-reading", label: "Pattern Reading", unlocked: false }, 
          { id: "thread-selection", label: "Thread Selection", unlocked: true }, 
        ],
      },
      { id: "purl", label: "Random knitting thing", unlocked: false }, 
      { id: "casting-on", label: "I have no clue", unlocked: false }, 
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Skill Tree Demo</h1>

      <Card>
        <CardContent>
            <CommunitySkillTree rootSkill={knittingSkillTree} />
        </CardContent>
      </Card>
    </div>
  );
}
