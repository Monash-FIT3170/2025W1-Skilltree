"use client";

import React, { useEffect, useMemo, useState } from "react";
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
import { userStore } from "@/stores";
import { useRouter } from "next/navigation";
import { leaveSkillTreeAction } from "@/actions/leave-skilltree-action";
import { joinSkillTreeAction } from "@/actions/join-skilltree-action";
import { toast } from "sonner";
import { TEvent, TPost, TSkillNode, TAuthSkillTree } from "@/types";
import {
  ThumbsUp,
  AlertCircle,
  Plus,
  Clock12,
  MessagesSquareIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getMembership } from "@/actions/get-membership";
import { createVerificationAction } from "@/actions/create-feedback";
import { Skeleton } from "@/components/ui/skeleton";
import { getEventsAction } from "@/actions/get-events";
import { format } from "date-fns";
import FilteringSkillTree from "@/components/FilteringSkillTree";
import { createPostAction } from "@/actions/create-post-action";
import { likePostAction } from "@/actions/like-post-action";
import { unlikePostAction } from "@/actions/unlike-post-action";
import { deletePostAction } from "@/actions/delete-post-action";
import { cn } from "@/lib/utils";

const ViewCommunityClient = ({
  community,
  posts,
}: {
  community: TAuthSkillTree;
  posts: TPost[];
}) => {
  const router = useRouter();

  const [loadingStates, setLoadingStates] = useState({
    joinLeave: false,
    addingProof: false,
    submittingFeedback: false,
    submittingFeedbackNoXp: false,
  });

  const [membership, setMembership] = useState({
    member: false,
    admin: false,
  });

  const [events, setEvents] = useState<TEvent[]>([]);
  const [addFeedbackForm, setAddFeedbackForm] = useState<{
    feedbackText: string;
    multiplier: number;
  }>({
    feedbackText: "",
    multiplier: 1,
  });

  const [selectedSkill, setSelectedSkillState] = useState<string | null>(null);
  const [openPostId, setOpenPostId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileB64, setFileB64] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [postContent, setPostContent] = useState("");

  const user = userStore.getState();

  useEffect(() => {
    (async () => {
      const { member, admin } = (await getMembership(community.id)).message;
      setMembership({ member, admin });
      const getEvents = await getEventsAction();
      setEvents(getEvents.message);
    })();
  }, [community.id]);

  useEffect(() => {
    setLikedPosts({});
  }, [posts]);

  type FlatNode = {
    id: string;
    name: string;
    parentId?: string | null;
    parentNodeId?: string | null;
  };

  function buildTree(nodes: FlatNode[], communityName: string) {
    if (!nodes || nodes.length === 0) {
      return {
        id: "root",
        label: communityName,
        unlocked: true,
        children: [],
      };
    }

    const byParent = new Map<string | null, FlatNode[]>();

    // group by parent
    nodes.forEach((n) => {
      const key = (n as any).parentNodeId ?? (n as any).parentId ?? null;
      if (!byParent.has(key)) byParent.set(key, []);
      byParent.get(key)!.push(n);
    });

    const toNode = (n: FlatNode): any => ({
      id: n.id,
      label: n.name,
      unlocked: true,
      children: (byParent.get(n.id) ?? []).map(toNode),
    });

    // Find root nodes
    const rootNodes = byParent.get(null) ?? [];

    // If we have exactly one root node
    if (rootNodes.length === 1) {
      return toNode(rootNodes[0]);
    }

    // Handle multiple roots case
    if (rootNodes.length > 1) {
      console.debug(
        `Found ${rootNodes.length} root nodes, using first one as main root`
      );
      return toNode(rootNodes[0]);
    }

    // No root nodes
    if (nodes.length > 0) {
      console.debug(
        "No root nodes found but nodes exist, using first node as root"
      );
      return toNode(nodes[0]);
    }

    // no roots
    return {
      id: "root",
      label: communityName,
      unlocked: true,
      children: [],
    };
  }

  const rootSkill = useMemo(
    () => buildTree(community.skillNodes as any, community.name),
    [community.skillNodes, community.name]
  );

  // ensure we pass the actual root node to the tree component
  const displayedRoot = useMemo(() => {
    if (!rootSkill) return null;
    if (
      rootSkill.id === "root" &&
      Array.isArray(rootSkill.children) &&
      rootSkill.children.length > 0
    ) {
      return rootSkill.children[0];
    }
    return rootSkill;
  }, [rootSkill]);

  function setSelectedSkill(nodeId: string | null): void {
    // store selected skill locally
    setSelectedSkillState(nodeId);

    // close any open post feedback panel when changing selection
    setOpenPostId(null);

    // if user later wants to add proof, prefill the skill node in the upload form
    if (nodeId) {
      setSelectedNode(nodeId);
    }

    // optional UX: bring posts section into view when a skill is chosen
    if (typeof window !== "undefined" && nodeId) {
      const container = document.querySelector("main");
      container?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const handlePostSubmit = async () => {
    if (!selectedNode) {
      toast.error("Please select a skill node");
      return;
    }

    setSubmitting(true);
    const res = await createPostAction({
      skillNodeId: selectedNode,
      content: postContent,
      proofMedia: fileB64 ?? undefined,
    });
    setSubmitting(false);

    if (res.ok) {
      toast.success("Post created");
      setPostContent("");
      setPreview(null);
      setFileB64(null);
      setSelectedNode(null);
      setIsDialogOpen(false);
      router.refresh();
    } else {
      toast.error(
        typeof res.message === "string" ? res.message : "Failed to create post"
      );
    }
  };

  const handleLeave = async () => {
    setLoadingStates((prev) => ({ ...prev, joinLeave: true }));
    const response = await leaveSkillTreeAction(community.id);
    if (response.ok) {
      toast.success("Successfully left skill tree.");
      router.refresh();
    } else {
      toast.error(response.message || "Failed to leave skill tree.");
    }
    setLoadingStates((prev) => ({ ...prev, joinLeave: false }));
  };

  const handleJoin = async () => {
    setLoadingStates((prev) => ({ ...prev, joinLeave: true }));
    const response = await joinSkillTreeAction(community.id);
    if (response.ok) {
      toast.success(
        "Successfully joined skill tree, your feed will be updated soon."
      );
      router.refresh();
    } else {
      toast.error("Failed to join skill tree.");
    }
    setLoadingStates((prev) => ({ ...prev, joinLeave: false }));
  };

  const handleAddFeedback = async (noXp: boolean = false) => {
    if (!openPostId) {
      toast.error("No post selected for feedback.");
      return;
    }
    if (!addFeedbackForm.feedbackText) {
      toast.error("Feedback text cannot be empty.");
      return;
    }

    if (noXp) {
      setLoadingStates((prev) => ({ ...prev, submittingFeedbackNoXp: true }));
    } else {
      setLoadingStates((prev) => ({ ...prev, submittingFeedback: true }));
    }
    try {
      await createVerificationAction({
        postId: openPostId,
        feedbackText: addFeedbackForm.feedbackText,
        multiplier: noXp ? 1 : membership.admin ? 3 : 2,
      });

      toast.success("Feedback submitted successfully. It will appear soon.");
      setAddFeedbackForm({ feedbackText: "", multiplier: 1 });
      router.refresh();
    } catch (error) {
      console.error("Error creating verification:", error);
      toast.error((error as Error).message || "Failed to submit feedback.");
    } finally {
      if (noXp) {
        setLoadingStates((prev) => ({
          ...prev,
          submittingFeedbackNoXp: false,
        }));
      } else {
        setLoadingStates((prev) => ({ ...prev, submittingFeedback: false }));
      }
    }
  };

  // Helper function for like/unlike logic
  async function handleLikeToggle(post: TPost) {
    const hasLiked =
      post.likes.some((like) => like.id === user.user?.id) ||
      likedPosts[post.id];
    let res;
    if (hasLiked) {
      res = await unlikePostAction(post.id);
      if (res.ok) {
        toast.success("Unliked!");
        setLikedPosts((prev) => ({ ...prev, [post.id]: false }));
        router.refresh();
      } else {
        toast.error("Failed to unlike post");
      }
    } else {
      res = await likePostAction(post.id);
      if (res.ok) {
        toast.success("Liked!");
        setLikedPosts((prev) => ({ ...prev, [post.id]: true }));
        router.refresh();
      } else {
        toast.error("Failed to like post");
      }
    }
  }

  // Helper function for deleting a post
  async function handleDeletePost(postId: string) {
    const res = await deletePostAction(postId);
    if (res.ok) {
      toast.success("Post deleted!");
      router.refresh();
    } else {
      toast.error("Failed to delete post");
    }
  }

  return (
    <div className="flex flex-col w-full">
      <header className="mb-5 flex flex-col lg:flex-row items-start lg:items-center justify-between w-full">
        <h1 className="text-3xl font-bold">{community.name}</h1>
        <div className="flex gap-3">
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
          {membership.admin && (
            <Button
              onClick={() => router.push(`/community/${community.id}/settings`)}
            >
              Settings
            </Button>
          )}
          {community.skillTreeUser?.some(
            (member) => member.user?.id === user.user?.id
          ) ? (
            <Button type="button" onClick={handleLeave} variant="destructive">
              {loadingStates.joinLeave ? "Leaving..." : "Leave"}
            </Button>
          ) : (
            <Button type="button" onClick={handleJoin}>
              {loadingStates.joinLeave ? "Joining..." : "Join"}
            </Button>
          )}
        </div>
      </header>
      <main className="w-full grid flex-1 grid-cols-1 gap-8 mx-auto md:grid-cols-2">
        <aside className="md:col-span-1">
          <div className="py-5 space-y-6">
            <div className="p-4 rounded shadow-sm">
              {displayedRoot ? (
                <FilteringSkillTree
                  rootSkill={displayedRoot}
                  onSelect={(nodeId) => setSelectedSkill(nodeId)}
                />
              ) : (
                <div>No skill nodes</div>
              )}
            </div>
            <section className="w-full">
              <div className="w-full text-center">
                <h2 className="text-lg font-semibold mb-5">Recent Events</h2>
              </div>

              <div className="flex flex-col items-stretch w-full gap-4 rounded">
                {events.map((ev) => (
                  <Card key={ev.id} className="w-full rounded">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <h3>{ev.title}</h3>

                        <div>
                          <p className="text-sm text-muted-foreground">
                            {format(new Date(ev.startDate), "PPP")} -{" "}
                            {format(new Date(ev.endDate), "PPP")}
                          </p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <CardDescription>{ev.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Badge>
                        {ev.mode}{" "}
                        {ev.mode === "RANKED" ? `- ${ev.xpPayout} XP` : ""}
                      </Badge>
                    </CardFooter>
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

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger
                  className={cn(membership.member ? "block" : "hidden")}
                  asChild
                >
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
                    <Select
                      value={selectedNode ?? undefined}
                      onValueChange={(val) => setSelectedNode(val)}
                    >
                      <SelectTrigger id="skill-tree-node" className="w-full">
                        <SelectValue placeholder="Select skill tree node" />
                      </SelectTrigger>
                      <SelectContent>
                        {community.skillNodes.map((node) => (
                          <SelectItem key={node.id} value={node.id}>
                            {node.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="w-full py-2 space-y-2">
                    <Label>Upload Media</Label>
                    <Input
                      type="file"
                      accept="image/*,video/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = () => {
                          const result = reader.result as string;
                          setPreview(result);
                          setFileB64(result);
                        };
                        reader.readAsDataURL(file);
                      }}
                    />
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
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                      placeholder="Write about what you practiced today..."
                    />
                  </div>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        onClick={() => {
                          setPreview(null);
                          setPostContent("");
                          setFileB64(null);
                          setSelectedNode(null);
                        }}
                        variant="destructive"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button onClick={handlePostSubmit} disabled={submitting}>
                      {submitting ? "Submitting..." : "Confirm"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </h2>
          </div>
          <div>
            {posts.length === 0 ? (
              <div className="w-full flex flex-col items-center justify-center">
                <Skeleton className="flex flex-col gap-2 items-center justify-center w-full h-80">
                  <AlertCircle className="w-12 h-12 mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    No posts yet. Be the first to add a proof of practice!
                  </p>
                </Skeleton>
              </div>
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
                    {post.proofMedia && (
                      <div className="flex items-center justify-center w-full">
                        <Image
                          src={post.proofMedia}
                          alt="Post Media"
                          width={600}
                          height={350}
                          className="object-cover rounded"
                        />
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex flex-col w-full gap-4">
                    <div className="flex items-center justify-between w-full">
                      <Button
                        variant={
                          post.likes.some(
                            (like) => like.id === user.user?.id
                          ) || likedPosts[post.id]
                            ? "outline"
                            : "default"
                        }
                        className="flex items-center gap-2"
                        onClick={() => handleLikeToggle(post)}
                      >
                        <ThumbsUp />
                        {post.likes.length + (likedPosts[post.id] ? 1 : 0)}{" "}
                        Like(s)
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
                            className="flex flex-col gap-3 text-sm"
                          >
                            <CardHeader className="font-bold flex items-center gap-2">
                              Verified by {fb.verifier.name}
                              <CardDescription>
                                <Badge className="font-bold">
                                  {fb.multiplier}x
                                </Badge>
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
                            value={addFeedbackForm.feedbackText}
                            onChange={(e) =>
                              setAddFeedbackForm({
                                ...addFeedbackForm,
                                feedbackText: e.target.value,
                              })
                            }
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
                                handleAddFeedback(true);
                              }}
                              disabled={loadingStates.submittingFeedbackNoXp}
                            >
                              {loadingStates.submittingFeedbackNoXp
                                ? "Submitting..."
                                : "Submit Without XP"}
                            </Button>
                            <Button
                              onClick={() => {
                                handleAddFeedback();
                              }}
                              disabled={loadingStates.submittingFeedback}
                            >
                              {loadingStates.submittingFeedback
                                ? "Submitting..."
                                : "Submit"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {membership.admin && (
                      <Button
                        variant="destructive"
                        onClick={() => handleDeletePost(post.id)}
                        className="w-full"
                      >
                        Delete Post
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ViewCommunityClient;
