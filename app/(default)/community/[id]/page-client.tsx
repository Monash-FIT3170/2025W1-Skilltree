"use client";

import React, { useState } from "react";
import FilteringSkillTree from "@/components/FilteringSkillTree";
import RecentEvents from "@/components/RecentEvents";
import { Button } from "@/components/ui/button";
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
import { userStore } from "@/stores";
import { useRouter } from "next/navigation";
import { TSkillTree } from "@/actions/get-community-action";
import { leaveSkillTreeAction } from "@/actions/leave-skilltree-action";
import { joinSkillTreeAction } from "@/actions/join-skilltree-action";
import { toast } from "sonner";
import { TSkillNode } from "@/actions/get-all-post-for-skilltree";
import { Clock12, MessagesSquareIcon, ThumbsUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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

const ViewCommunityClient = ({
  community,
  posts,
}: {
  community: TSkillTree;
  posts: TSkillNode[];
}) => {
  const user = userStore.getState();
  const router = useRouter();

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const isAdmin = community.skillTreeUser.some(
    (u) => u.user.id === user.user!.id && u.role === "ADMIN"
  );
  const isMember = community.skillTreeUser.some(
    (u) => u.user.id === user.user!.id && u.role === "MEMBER"
  );

  const [title, setTitle] = useState(community.name);
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  const handleSubmit = () => {
    // console.log({ title, tags, body, allowVerification });
  };

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
      <header className="flex">
        <h1 className="text-3xl font-bold">{community.name}</h1>
        <div className="flex gap-3 ml-auto">
          <Button
            onClick={() => router.push(`/community/${community.id}/members`)}
          >
            View Community Members
          </Button>
          <Button
            onClick={() => router.push(`/community/${community.id}/view`)}
          >
            View Skill Tree
          </Button>
          {isAdmin && (
            <Button
              onClick={() => router.push(`/community/${community.id}/settings`)}
            >
              Settings
            </Button>
          )}
          {!isAdmin &&
            (isMember ? (
              <Button
                type="button"
                onClick={async () => {
                  const response = await leaveSkillTreeAction(community.id);
                  if (response.ok) {
                    toast.success("Successfully left skill tree.");
                  } else {
                    toast.error("Failed to leave skill tree.");
                  }
                }}
                variant="destructive"
              >
                Leave
              </Button>
            ) : (
              <Button
                type="button"
                onClick={async () => {
                  const response = await joinSkillTreeAction(community.id);
                  if (response.ok) {
                    toast.success("Successfully joined skill tree!");
                  } else {
                    toast.error("Failed to join skill tree.");
                  }
                }}
              >
                Join
              </Button>
            ))}
        </div>
      </header>
      <main className="container grid flex-1 grid-cols-1 gap-8 px-6 py-8 mx-auto md:grid-cols-2">
        <aside className="md:col-span-1">
          <div className="py-5 space-y-6">
            <div className="p-4 shadow-sm rounded-xl">
              <FilteringSkillTree
                rootSkill={exampleSkillTree}
                onSelect={(nodeId) => setSelectedSkill(nodeId)}
              />
            </div>
            <RecentEvents />
          </div>
        </aside>

        {/* Posts feed */}
        <section className="py-5 space-y-6 md:col-span-1">
          <div className="flex items-center justify-between w-full gap-4">
            <Avatar>
              <AvatarFallback>U</AvatarFallback>
              <AvatarImage className="border" src={userImage} />
            </Avatar>

            <Dialog>
              <DialogTrigger asChild>
                <Button disabled variant="secondary" className="flex-1">
                  Upload some Proof of Practice (WIP)
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload Proof of Practice</DialogTitle>
                  <DialogDescription>
                    Share your progress and get feedback from the community.
                  </DialogDescription>
                </DialogHeader>

                <div className="w-full space-y-2 text-sm">
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

                <div className="w-full py-2 space-y-2">
                  <Label>Upload Media</Label>
                  <Input type="file" />
                  {preview && (
                    <Image
                      width={720}
                      height={720}
                      src={preview}
                      alt="Preview"
                      className="object-contain mt-2 border max-h-60 rounded-xl"
                    />
                  )}
                </div>

                <div className="w-full space-y-2">
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
            <Card key={post.id} className="w-full my-8">
              <CardHeader className="flex items-center w-full gap-4 pb-4 border-b">
                <div className="flex items-center justify-between w-full">
                  <div className="p-0 m-0 text-lg font-bold">
                    {post.skillNode.name} <br />
                    <span className="text-sm">in {community.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <Clock12 /> {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-base">{post.content}</div>
                <div className="flex items-center justify-center w-full">
                  <Image
                    src={"https://picsum.photos/600/350"}
                    alt="Post Image"
                    width={600}
                    height={350}
                    className="object-cover rounded"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between w-full">
                <Button variant={"default"} className="flex items-center gap-2">
                  <ThumbsUp />
                  {post.likes.length} Like(s)
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex items-center gap-2">
                      <MessagesSquareIcon />
                      <span>{post.feedback.length} Feedback(s)</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    {post.feedback.map((fb) => (
                      <Card
                        key={`${fb.postId}_${fb.verifierId}`}
                        className="flex flex-col gap-5 text-sm font-bold"
                      >
                        <CardHeader className="flex items-center gap-2">
                          Verified by {fb.verifier.name}
                          <CardDescription>
                            <Badge>{fb.multiplier}x</Badge>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>{fb.feedbackText}</CardContent>
                      </Card>
                    ))}
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ViewCommunityClient;
