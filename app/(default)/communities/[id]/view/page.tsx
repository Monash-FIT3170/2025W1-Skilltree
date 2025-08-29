"use client";

import React, { useState } from "react";
import CommunitySkillTree from "@/components/CommunitySkillTree";
import FilteringSkillTree from "@/components/FilteringSkillTree";
import RecentEvents from "@/components/RecentEvents";
import PostProofPracButton from "@/components/PostProofPracButton";
import PostFeedbackForm from "@/components/PostFeedbackForm";
import PostView from "@/components/PostView";
import { PostInteractionPanel } from "@/components/PostInteractionPanel";
import { Button } from "@/components/ui/button";

export default function CommunityPage() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // for an example
  const posts = [
    {
      id: "1",
      user: "Example User",
      title: "Snowboarding Jump Node",
      body: "this is me doing a jump. how good!",
      image: "/snowboard.jpg",
      likes: 59,
      comments: [
        { id: "c1", user: "User 1", text: "Wow very cool jump example user!" },
        { id: "c2", user: "User 1", text: "I wish I could do that….." },
      ],
    },
        {
      id: "2",
      user: "Example User",
      title: "Snowboarding Jump Node",
      body: "this is me doing a jump. how good!",
      image: "/snowboard.jpg",
      likes: 59,
      comments: [
        { id: "c1", user: "User 1", text: "Wow very cool jump example user!" },
        { id: "c2", user: "User 1", text: "I wish I could do that….." },
      ],
    },
        {
      id: "3",
      user: "Example User",
      title: "Snowboarding Jump Node",
      body: "this is me doing a jump. how good!",
      image: "/snowboard.jpg",
      likes: 59,
      comments: [
        { id: "c1", user: "User 1", text: "Wow very cool jump example user!" },
        { id: "c2", user: "User 1", text: "I wish I could do that….." },
      ],
    },
  ];

  // example skill tree
  const exampleSkillTree = { // integrate skill tree here
    id: "snowboarding",
    label: "Snowboarding",
    unlocked: true,
    children: [
      {
        id: "jump",
        label: "Jumping",
        unlocked: false,
        children: [
          { id: "grab", label: "Grab Tricks", unlocked: false },
          { id: "spin", label: "Spin Tricks", unlocked: false },
        ],
      },
      { id: "grind", label: "Rails / Boxes", unlocked: true },
    ],
  };
// integrate events, skilltree, posts here
  return (
    <div className="w-full h-full">
      {/* Title */}
      <header className="flex justify-center bg-white p-6 gap-3">
        <h1 className="text-3xl font-bold">Snowboarding Community Tree</h1>
        <div className = "ml-auto gap-3">
        <Button>View Community</Button>
        </div>

      </header>

      {/* SkillTree */}
      <div className = "flex justify-center">
      <CommunitySkillTree rootSkill={exampleSkillTree} />
      </div>
    
    </div>
  );
}
