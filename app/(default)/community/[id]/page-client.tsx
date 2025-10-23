"use client";

import React, { useEffect, useState } from "react";
// FilteringSkillTree import removed (unused)
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
import { TEvent, TPost, TSkillNode } from "@/types";
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
// mongoose 'set' import removed (unused)
import { createProofOfPracticeAction } from "@/actions/create-proof-of-practice-action";
import { createVerificationAction } from "@/actions/create-feedback";
import { Skeleton } from "@/components/ui/skeleton";
import { TAuthSkillTree } from "@/types";
import CommunitySkillTree from "@/components/CommunitySkillTree";
import { getEventsAction } from "@/actions/get-events";
import { format } from "date-fns";

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

  const skillNodes = community.skillNodes.map((node: any) => ({
    name: node.name,
    id: node.id,
  }));

  const [events, setEvents] = useState<TEvent[]>([]);

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

  // selectedSkill removed (unused)
  const [openPostId, setOpenPostId] = useState<string | null>(null);

  const [membership, setMembership] = useState({
    admin: false,
    member: false,
  });
  // isMember state removed (unused)
  const [preview, setPreview] = useState<string | null>(null);
  const [popModalOpen, setPopModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const adminStatus = await getMembership(community.id);
      const getEvents = await getEventsAction();

      setEvents(getEvents.message);
      setMembership({
        admin: adminStatus.message.admin,
        member: adminStatus.message.member,
      });
    })();
  }, [community.id, posts.length, membership.admin, membership.member]);

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
      await createVerificationAction({
        postId: openPostId,
        feedbackText: addFeedbackForm.feedbackText,
        multiplier: noXp ? 1 : membership.admin ? 3 : 2,
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
          {membership.admin && (
            <Button
              onClick={() => router.push(`/community/${community.id}/settings`)}
            >
              Settings
            </Button>
          )}
          {community.skillTreeUser!.some(
            (member: any) => member.user.id === userStore.getState().user?.id
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
      <main className="container grid flex-1 grid-cols-1 gap-8 px-6 py-8 mx-auto md:grid-cols-2">
        <aside className="md:col-span-1">
          <div className="py-5 space-y-6">
            <div className="p-4 rounded shadow-sm">
              {/* <FilteringSkillTree
                rootSkill={community.skillNodes[0]}
                onSelect={(nodeId) => setSelectedSkill(nodeId)}
              /> */}
              <CommunitySkillTree inRoot rootSkill={community!.skillNodes[0]} />
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
                    <Label htmlFor="skill-tree-node">
                      Select Skill Tree Node
                    </Label>
                    <Select
                      value={addProofOfPracticeForm.skillNodeId}
                      onValueChange={(value) =>
                        setAddProofOfPracticeForm({
                          ...addProofOfPracticeForm,
                          skillNodeId: value,
                        })
                      }
                    >
                      <SelectTrigger id="skill-tree-node" className="w-full">
                        <SelectValue placeholder="Select skill tree node" />
                      </SelectTrigger>
                      <SelectContent>
                        {skillNodes.map((node: TSkillNode) => (
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
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const file = e.target.files[0];
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setPreview(reader.result as string);
                            setAddProofOfPracticeForm((prev) => ({
                              ...prev,
                              proofMedia: reader.result as string,
                            }));
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      type="file"
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
                    <Button
                      onClick={handleAddProofOfPractice}
                      disabled={loadingStates.addingProof}
                    >
                      {loadingStates.addingProof ? "Adding..." : "Confirm"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </h2>
          </div>

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
            posts.map((post: TPost) => {
              return (
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
                        src={post.proofMedia ?? "https://picsum.photos/600/350"}
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
                </Card>
              );
            })
          )}
        </section>
      </main>
    </div>
  );
};

export default ViewCommunityClient;
