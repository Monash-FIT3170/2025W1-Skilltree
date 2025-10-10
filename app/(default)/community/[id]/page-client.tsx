"use client";

import React, { useEffect, useState } from "react";
import FilteringSkillTree from "@/components/FilteringSkillTree";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
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
import { userStore } from "@/stores";
import { useRouter } from "next/navigation";
import { TSkillTree } from "@/actions/get-community-action";
import { leaveSkillTreeAction } from "@/actions/leave-skilltree-action";
import { joinSkillTreeAction } from "@/actions/join-skilltree-action";
import { toast } from "sonner";
import { TSkillNode } from "@/actions/get-all-post-for-skilltree";
import { Clock12, MessagesSquareIcon, ThumbsUp, Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getIsAdmin } from "@/actions/get-is-admin";
import { getIsMember } from "@/actions/get-is-member";

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
const events = [
  {
    id: "1",
    title: "Race Day Bingo",
    mode: "unranked",
    club: "Fan Garage",
    category: "Community Engagement",
  },
  {
    id: "2",
    title: "Livery Jam - 800 XP",
    mode: "ranked",
    club: "Fan Garage",
    category: "Race Strategy",
  },
  {
    id: "3",
    title: "100m Sprint Ladder - 1000 XP",
    mode: "ranked",
    club: "Swim Circle",
    category: "Freestyle Sprint",
  },
  {
    id: "4",
    title: "Backyard Six Fest",
    mode: "unranked",
    club: "Cricket Corner",
    category: "Hits Showcase",
  },
];

const ViewCommunityClient = ({
  community,
  posts,
}: {
  community: TSkillTree;
  posts: TSkillNode[];
}) => {
  const router = useRouter();

  const [isJoinLeaveButtonLoading, setIsJoinLeaveButtonLoading] =
    useState(false);

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [openPostId, setOpenPostId] = useState<string | null>(null);

  const [isAdmin, setIsAdmin] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [title, setTitle] = useState(community.name);
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const adminStatus = await getIsAdmin(community.id);
      setIsAdmin(adminStatus.message as boolean);
      const memberStatus = await getIsMember(community.id);
      setIsMember(memberStatus.message as boolean);
    })();
  }, [community.id, posts.length, isAdmin, isMember]);

  const handleCommentSubmit = () => {
    //here we need to add the submission of a comment
    // console.log({ title, tags, body, allowVerification });
  };

  const handleLeave = async () => {
    setIsJoinLeaveButtonLoading(true);
    const response = await leaveSkillTreeAction(community.id);
    if (response.ok) {
      toast.success("Successfully left skill tree.");
    } else {
      console.log(JSON.stringify(response, null, 2));

      toast.error(response.message || "Failed to leave skill tree.");
    }
    setIsJoinLeaveButtonLoading(false);
  };

  const handleJoin = async () => {
    setIsJoinLeaveButtonLoading(true);
    const response = await joinSkillTreeAction(community.id);
    if (response.ok) {
      toast.success("Successfully joined skill tree!");
    } else {
      toast.error("Failed to join skill tree.");
    }
    setIsJoinLeaveButtonLoading(false);
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
          {community.skillTreeUser.some(
            (member) => member.user.id === userStore.getState().user?.id
          ) ? (
            <Button type="button" onClick={handleLeave} variant="destructive">
              {isJoinLeaveButtonLoading ? "Leaving..." : "Leave"}
            </Button>
          ) : (
            <Button type="button" onClick={handleJoin}>
              {isJoinLeaveButtonLoading ? "Joining..." : "Join"}
            </Button>
          )}
        </div>
      </header>
      <main className="container grid flex-1 grid-cols-1 gap-8 px-6 py-8 mx-auto md:grid-cols-2">
        <aside className="md:col-span-1">
          <div className="py-5 space-y-6">
            <div className="p-4 rounded shadow-sm">
              <FilteringSkillTree
                rootSkill={exampleSkillTree}
                onSelect={(nodeId) => setSelectedSkill(nodeId)}
              />
            </div>
            <section className="w-full">
              <div className="w-full text-center">
                <h2 className="text-lg font-semibold">Recent Events</h2>
              </div>

              <div className="flex flex-col items-stretch w-full gap-4 rounded">
                {events.map((ev) => (
                  <Card key={ev.id} className="w-full rounded">
                    <CardContent className="flex flex-col gap-2 p-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-semibold">{ev.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {ev.club} · {ev.category}
                        </p>
                      </div>
                      <Badge
                        className={`shrink-0 self-start sm:self-center ${
                          ev.mode === "ranked"
                            ? "bg-red-100 text-red-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {ev.mode === "ranked" ? "Ranked" : "UN-Ranked"}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </aside>

        {/* Posts feed */}
        <section className="py-5 space-y-6 md:col-span-1">
          <div className="mb-4">
            <h2 className="flex items-center justify-center relative text-lg font-semibold">
              <span>Posts</span>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 w-8 p-0 absolute right-0"
                  >
                    <Plus className="h-4 w-4" />
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
                    <Label htmlFor="skill-tree-node">
                      Select Skill Tree Node
                    </Label>
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
                    <DialogClose asChild>
                      <Button variant="destructive">Cancel</Button>
                    </DialogClose>
                    <Button>Confirm</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </h2>
          </div>

          {posts.length === 0 ? (
            <div>Woah. Such Empty.</div>
          ) : (
            posts.map((post) => (
              <Card key={post.id} className="w-full my-8">
                <CardHeader className="flex items-center w-full gap-4 pb-4 border-b">
                  <div className="flex items-center justify-between w-full">
                    <div className="p-0 m-0 text-lg font-bold">
                      {post.skillNode.name} <br />
                      <span className="text-sm">in {community.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <Clock12 />{" "}
                      {new Date(post.createdAt).toLocaleDateString()}
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
                <CardFooter className="flex flex-col w-full gap-4">
                  <div className="flex items-center justify-between w-full">
                    <Button
                      variant="default"
                      className="flex items-center gap-2"
                    >
                      <ThumbsUp />
                      {post.likes.length} Like(s)
                    </Button>
                    <Button
                      className="flex items-center gap-2"
                      onClick={() =>
                        setOpenPostId(openPostId === post.id ? null : post.id)
                      }
                    >
                      <MessagesSquareIcon />
                      <span>{post.feedback.length} Feedback(s)</span>
                    </Button>
                  </div>

                  {/* Feedback shown inline below post when open */}
                  {openPostId === post.id && (
                    <div className="w-full mt-4 space-y-3">
                      {post.feedback.map((fb) => (
                        <Card
                          key={`${fb.postId}_${fb.verifierId}`}
                          className="flex flex-col gap-3 text-sm font-bold"
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

                      {/* Feedback box */}
                      <div className="flex flex-col p-4 mt-4 border rounded-lg bg-muted/30 gap-3">
                        <Label htmlFor={`comment-${post.id}`}>
                          Leave some feedback
                        </Label>
                        <Textarea
                          id={`comment-${post.id}`}
                          placeholder="Write your feedback..."
                          className="mt-2"
                          rows={3}
                        />
                        <div className="flex justify-end mt-2 gap-2">
                          <Button
                            variant="outline"
                            onClick={() => setOpenPostId(null)}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="destructive"
                            onClick={() => {
                              handleCommentSubmit();
                              toast.success("Comment submitted!");
                            }}
                          >
                            Submit Without XP
                          </Button>
                          <Button
                            onClick={() => {
                              handleCommentSubmit();
                              toast.success("Comment submitted!");
                            }}
                          >
                            Submit
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardFooter>
              </Card>
            ))
          )}
        </section>
      </main>
    </div>
  );
};

export default ViewCommunityClient;
