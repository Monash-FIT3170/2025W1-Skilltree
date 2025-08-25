"use client";

import React, { useState } from "react";
import CommunitySkillTree from "@/components/CommunitySkillTree";
import FilteringSkillTree from "@/components/FilteringSkillTree";
import RecentEvents from "@/components/RecentEvents";
import PostProofPracButton from "@/components/PostProofPracButton";
import PostFeedbackForm from "@/components/PostFeedbackForm";
import PostView from "@/components/PostView";
import { PostInteractionPanel } from "@/components/PostInteractionPanel";
import {Button} from "@/components/ui/button";

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
  ];

  const isMember = false;

  // example skill tree
  const exampleSkillTree = {
    id: "snowboarding",
    label: "Snowboarding",
    unlocked: true,
    children: [
      {
        id: "jump",
        label: "Jumping",
        unlocked: true,
        children: [
          { id: "grab", label: "Grab Tricks", unlocked: false },
          { id: "spin", label: "Spin Tricks", unlocked: false },
        ],
      },
      { id: "grind", label: "Rails / Boxes", unlocked: false },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Title */}
      <header className="flex bg-white shadow p-6 gap-3">
        <h1 className="text-3xl font-bold">Snowboarding Community Tree</h1>
        {isMember?<Button className="ml-auto" variant={"destructive"}>Leave</Button>:<Button className="ml-auto">Join</Button>}
        
      </header>

      {/* SkillTree */}
      <section className="flex justify-center py-12">
        <CommunitySkillTree rootSkill={exampleSkillTree} />
      </section>

      {/* Scrollable area */}
      <div className = "flex justify-center w-full items-center border-3 rounded-3xl border-grey-500 bg-white">
        <h2 className="flex justify-center text-3xl font-bold p-6">Snowboarding Community Interaction</h2>
      </div>
      <main className="flex-1 container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 py-15">
        
        {/* Side */}
        <aside className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <FilteringSkillTree
              rootSkill={exampleSkillTree}
              onSelect={(nodeId) => setSelectedSkill(nodeId)}
            />
          </div>
          <RecentEvents />
        </aside>

        {/* Posts feed */}
      
        <section className="md:col-span-2 space-y-6 overflow-y-auto max-h-[100vh]">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-sm p-4 space-y-4"
            >
              {isMember && <PostProofPracButton />}
              <PostView userRole={"nonMember"}/>
              <PostView userRole={"normal"}/>
              <PostView userRole={"normal"}/>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
