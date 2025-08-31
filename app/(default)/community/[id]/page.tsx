"use client";

import React, { useState } from "react";
import FilteringSkillTree from "@/components/FilteringSkillTree";
import RecentEvents from "@/components/RecentEvents";
import { Button } from "@/components/ui/button";
import ViewCommunityMembersButton from "@/components/ViewCommunityMembersButton";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PostView from "@/components/PostView";

const userImage = "/placeholder.png";
const skillNodes = [
  "React Basics",
  "State Management",
  "Component Composition",
  "Hooks Mastery",
  "TypeScript Integration",
  "API Handling",
  "Testing & Debugging",
  "UI/UX Best Practices",
];

export default function CommunityPage() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const isMember = true;
  const isAdmin = true;
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [allowVerification, setAllowVerification] = useState(false);

  const handleSubmit = () => {
    console.log({ title, tags, body, allowVerification });
  };

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
    // … other posts
  ];

  const exampleSkillTree = {
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

  return (
    <div className="flex flex-col w-full">
      {/* Title */}
      <header className="flex">
        <h1 className="text-3xl font-bold">Snowboarding Community</h1>
        <div className="flex ml-auto gap-3">
          <ViewCommunityMembersButton />
          <Button>View Skill Tree</Button>
          {isAdmin && <Button>Settings</Button>}
          {isMember ? (
            <Button variant="destructive">Leave</Button>
          ) : (
            <Button>Join</Button>
          )}
        </div>
      </header>

      {/* Scrollable area */}
      <main className="flex-1 container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Side */}
        <aside className="space-y-6">
          <div className="rounded-xl shadow-sm p-4">
            <FilteringSkillTree
              rootSkill={exampleSkillTree}
              onSelect={(nodeId) => setSelectedSkill(nodeId)}
            />
          </div>
          <RecentEvents />
        </aside>

        {/* Posts feed */}
        <section className="md:col-span-2 space-y-6 overflow-y-auto max-h-[100vh] py-5">
          <div className="w-full flex items-center justify-between gap-4">
            <Avatar>
              <AvatarFallback>U</AvatarFallback>
              <AvatarImage className="border" src={userImage} />
            </Avatar>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" className="flex-1">
                  Upload some Proof of Practice...
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload Proof of Practice</DialogTitle>
                  <DialogDescription>
                    Share your progress and get feedback from the community.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-2 w-full text-sm">
                  <Label htmlFor="skill-tree-node">Select Skill Tree</Label>
                  <Select>
                    <SelectTrigger id="skill-tree-node" className="w-full">
                      <SelectValue placeholder="Select skill tree node" />
                    </SelectTrigger>
                    <SelectContent>
                      {skillNodes.map((node) => (
                        <SelectItem key={node} value={node}>
                          {node}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 w-full py-2">
                  <Label>Upload Media</Label>
                  <Input type="file" />
                  {preview && (
                    <Image
                      width={720}
                      height={720}
                      src={preview}
                      alt="Preview"
                      className="mt-2 max-h-60 object-contain rounded-xl border"
                    />
                  )}
                </div>

                <div className="space-y-2 w-full">
                  <Label>Description</Label>
                  <Textarea
                    rows={5}
                    className="w-full"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Write about what you practiced today..."
                  />
                </div>

                <DialogFooter>
                  <Button variant="destructive">Cancel</Button>
                  <Button onClick={handleSubmit}>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {posts.map((post) => (
            <div key={post.id} className="rounded-xl shadow-sm space-y-4">
              <PostView userRole={"normal"} />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
