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
import { userStore } from "@/stores";
import { useRouter } from "next/navigation";
import { TSkillTree } from "@/actions/get-community-action";
import { leaveSkillTreeAction } from "@/actions/leave-skilltree-action";
import { joinSkillTreeAction } from "@/actions/join-skilltree-action";
import { toast } from "sonner";
import { TSkillNode } from "@/actions/get-all-post-for-skilltree";
import {
  Clock12,
  MessagesSquareIcon,
  ThumbsUp,
  Plus,
  AlertCircle,
} from "lucide-react";
import { createPostAction } from "@/actions/create-post-action";
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
import { createProofOfPracticeAction } from "@/actions/create-proof-of-practice-action";
import { createVerificationAction } from "@/actions/create-feedback";
import { Skeleton } from "@/components/ui/skeleton";
import { likePostAction } from "@/actions/like-post-action";
import { unlikePostAction } from "@/actions/unlike-post-action";
import { deletePostAction } from "@/actions/delete-post-action";

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

  const [loadingStates, setLoadingStates] = useState({
    joinLeave: false,
    addingProof: false,
    submittingFeedback: false,
    submittingFeedbackNoXp: false,
  });

  const skillNodes = community.skillNodes.map((node) => ({
    name: node.name,
    id: node.id,
  }));

  const [addProofOfPracticeForm, setAddProofOfPracticeForm] = useState<{
    skillNodeId: string;
    proofMedia: string | null;
    content: string;
  }>({
    skillNodeId: "",
    proofMedia: null,
    content: "",
  });
  const [addFeedbackForm, setAddFeedbackForm] = useState<{
    feedbackText: string; 
    multiplier: number;
  }>({
    feedbackText: "",
    multiplier: 1,
  });

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [openPostId, setOpenPostId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [popModalOpen, setPopModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const adminStatus = await getIsAdmin(community.id);
      setIsAdmin(adminStatus.message as boolean);
      const memberStatus = await getIsMember(community.id);
      setIsMember(memberStatus.message as boolean);
    })();
  }, [community.id, posts.length]);

  const handleCommentSubmit = () => {};

  const handleLeave = async () => {
    setLoadingStates((prev) => ({ ...prev, joinLeave: true }));
    const response = await leaveSkillTreeAction(community.id);
    if (response.ok) {
      toast.success("Successfully left skill tree.");
    } else {
      console.log(JSON.stringify(response, null, 2));

      toast.error(response.message || "Failed to leave skill tree.");
    }
    setLoadingStates((prev) => ({ ...prev, joinLeave: false }));
  const isAdmin = community.skillTreeUser.some(
    (u) => u.user && u.user.id === user.user!.id && u.role === "ADMIN"
  );

  const isMember = community.skillTreeUser.some(
    (u) => u.user && u.user.id === user.user!.id && u.role === "MEMBER"
  );

  const [title, setTitle] = useState(""); // UI label removed below, but preserve variable if you want to keep future use
  const [body, setBody] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [fileB64, setFileB64] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setLikedPosts({});
  }, [posts]);

  const handlePostSubmit = async () => {
    if (!selectedNode) {
      toast.error("Please select a skill node");
      return;
    }

    setSubmitting(true);
    const res = await createPostAction({
      skillNodeId: selectedNode,
      content: body,
      proofMedia: fileB64 ?? undefined,
    });
    setSubmitting(false);

    if (res.ok) {
      toast.success("Post created");
      setBody("");
      setPreview(null);
      setFileB64(null);
      setIsDialogOpen(false);
      // Ideally revalidate and refresh list
      router.refresh?.();
    } else {
      toast.error(typeof res.message === "string" ? res.message : "Failed to create post");
    }
  };
  const handleCommentSubmit = () => {
    //here we need to add the submission of a comment
    // console.log({ title, tags, body, allowVerification });
  };

  const handleJoin = async () => {
    setLoadingStates((prev) => ({ ...prev, joinLeave: true }));
    const response = await joinSkillTreeAction(community.id);
    if (response.ok) {
      toast.success(
        "Successfully joined skill tree, your feed will be updated soon."
      );
    } else {
      toast.error("Failed to join skill tree.");
    }
    setLoadingStates((prev) => ({ ...prev, joinLeave: false }));
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

  const handleAddProofOfPractice = async () => {
    const { skillNodeId, proofMedia, content } = addProofOfPracticeForm;
    if (!skillNodeId) {
      console.error("Please select a skill tree node.");
      toast.error("Please select a skill tree node.");
      return;
    }
    if (!proofMedia) {
      console.error("Please upload a media file.");
      toast.error("Please upload a media file.");
      return;
    }
    if (!content) {
      console.error("Please enter a description.");
      toast.error("Please enter a description.");
      return;
    }

    setLoadingStates((prev) => ({ ...prev, addingProof: true }));
    try {
      const response = await createProofOfPracticeAction({
        skillNodeId: addProofOfPracticeForm.skillNodeId as string,
        proofMedia: addProofOfPracticeForm.proofMedia as string,
        content: addProofOfPracticeForm.content as string,
      });
      if (response.ok) {
        toast.success(
          "Proof of practice added successfully, it will reflect in the feed shortly."
        );
        setAddProofOfPracticeForm({
          skillNodeId: "",
          proofMedia: null,
          content: "",
        });
        setPreview(null);
        // Optionally refresh posts or close dialog
      } else {
        toast.error(
          typeof response.message === "string"
            ? response.message
            : "Failed to add proof of practice."
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding proof of practice.");
    } finally {
      setLoadingStates((prev) => ({ ...prev, addingProof: false }));
      setPopModalOpen(false);
    }
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
      const response = await createVerificationAction({
        postId: openPostId,
        feedbackText: addFeedbackForm.feedbackText,
        multiplier: noXp ? 1 : isAdmin ? 3 : 2,
      });

      toast.success("Feedback submitted successfully. It will appear soon.");

      setAddFeedbackForm({ feedbackText: "", multiplier: 1 });
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
  async function handleLikeToggle({
    post,
    userId,
    toast,
    router,
  }: {
    post: TSkillNode;
    userId: string;
    toast: any;
    router: ReturnType<typeof useRouter>;
  }) {
    const hasLiked = post.likes.some(like => like.id === userId) || likedPosts[post.id];
    let res;
    if (hasLiked) {
      res = await unlikePostAction(post.id);
      if (res.ok) {
        toast.success("Unliked!");
        setLikedPosts(prev => ({ ...prev, [post.id]: false }));
        router.refresh?.();
      } else {
        toast.error("Failed to unlike post");
      }
    } else {
      res = await likePostAction(post.id);
      if (res.ok) {
        toast.success("Liked!");
        setLikedPosts(prev => ({ ...prev, [post.id]: true }));
        router.refresh?.();
      } else {
        toast.error("Failed to like post");
      }
    }
  }

  // Helper function for deleting a post
  async function handleDeletePost({
    postId,
    toast,
    router,
  }: {
    postId: string;
    toast: any;
    router: ReturnType<typeof useRouter>;
  }) {
    const res = await deletePostAction(postId);
    if (res.ok) {
      toast.success("Post deleted!");
      router.refresh?.();
    } else {
      toast.error("Failed to delete post");
    }
  }

  return (
    <div className="flex flex-col w-full">
      <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full">
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
              <FilteringSkillTree
                rootSkill={exampleSkillTree}
                onSelect={(nodeId) => setSelectedSkill(nodeId)}
              />
            </div>
            <section className="w-full">
              <div className="w-full text-center">
                <h2 className="text-lg font-semibold">Recent Events</h2>
              </div>

              <div className="flex flex-col items-stretch w-full py-5 gap-4 rounded">
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
        <section
          className="py-5 space-y-6 md:col-span-1"
        >
          <div className="mb-4">
            <h2 className="flex items-center justify-center relative text-lg font-semibold">
              <span>Posts</span>
              <Dialog open={popModalOpen} onOpenChange={setPopModalOpen}>
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
                    <Label htmlFor="skill-tree-node">Select Skill Tree Node</Label>
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
                      value={addProofOfPracticeForm.content}
                      onChange={(e) =>
                        setAddProofOfPracticeForm((prev) => ({
                          ...prev,
                          content: e.target.value,
                        }))
                      }
                      placeholder="Write about what you practiced today..."
                    />
                  </div>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        onClick={() => {
                          setPreview(null);
                          setAddProofOfPracticeForm({
                            skillNodeId: "",
                            proofMedia: null,
                            content: "",
                          });
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
          <div style={{
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto",
            paddingRight: ".5rem",
          }}>
          {posts.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-2 items-center justify-center w-full h-80">
                <AlertCircle className="w-12 h-12 mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">
                  No posts yet. Be the first to add a proof of practice!
                </p>
              </div>
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
                      post.likes.some(like => like.id === user.user!.id) || likedPosts[post.id]
                        ? "outline"
                        : "default"
                    }
                    className="flex items-center gap-2"
                    onClick={() =>
                      handleLikeToggle({
                        post,
                        userId: user.user!.id,
                        toast,
                        router,
                      })
                    }
                  >
                    <ThumbsUp />
                    {post.likes.length + (likedPosts[post.id] ? 1 : 0)} Like(s)
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
                </CardFooter>
                {(isAdmin) && (
                  <Button
                    variant="destructive"
                    onClick={() =>
                      handleDeletePost({
                        postId: post.id,
                        toast,
                        router,
                      })
                    }
                  >
                    Delete
                  </Button>
                )}
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
