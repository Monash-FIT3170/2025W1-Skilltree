"use client";

import React, { useState } from "react";
import CommunitySkillTree from "@/components/CommunitySkillTree";
import FilteringSkillTree from "@/components/FilteringSkillTree";
import RecentEvents from "@/components/RecentEvents";
import AddPostProofPrac from "@/components/AddPostProofPrac";
import PostProofPracButton from "@/components/PostProofPracButton";
import PostFeedbackForm from "@/components/PostFeedbackForm";
import PostView from "@/components/PostView";
import { PostInteractionPanel } from "@/components/PostInteractionPanel";

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

  // example skill tree
  const exampleSkillTree = { // integrate skill tree here
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
// integrate events, skilltree, posts here
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Title */}
      <header className="bg-white shadow p-6">
        <h1 className="text-3xl font-bold">Snowboarding Community</h1>
      </header>

      {/* SkillTree */}
      <section className="flex justify-center py-12">
        <CommunitySkillTree rootSkill={exampleSkillTree} />
      </section>

      {/* Scrollable area */}
      <main className="flex-1 container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <section className="md:col-span-2 space-y-6">
          {posts.map((post) => ( // integrate posts here
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-sm p-4 space-y-4"
            >
              <PostProofPracButton />
              <PostView userRole={"normal"}/>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
