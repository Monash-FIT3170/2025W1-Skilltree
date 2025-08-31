"use client";

import React, { useState } from "react";
import CommunitySkillTree from "@/components/CommunitySkillTree";
import { Button } from "@/components/ui/button";

export default function CommunityPage() {
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
  const exampleSkillTree = {
    // integrate skill tree here
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
      <header className="flex justify-center gap-3 mb-5 ">
        <h1 className="text-3xl font-bold">Snowboarding Community Tree</h1>
        <div className="ml-auto gap-3">
          <Button>View Community</Button>
        </div>
      </header>

      {/* SkillTree */}
      <div className="flex justify-center">
        <CommunitySkillTree rootSkill={exampleSkillTree} />
      </div>
    </div>
  );
}
