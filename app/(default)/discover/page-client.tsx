"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TSkillTree } from "@/types";
import { toast } from "sonner";
import { joinSkillTreeAction } from "@/actions/join-skilltree-action";
import { getIsMember } from "@/actions/get-is-member";
import { cn } from "@/lib/utils";

export default function CommunitiesPageClient({
  communities,
}: {
  communities: TSkillTree[];
}) {
  const router = useRouter();
  const [pendingCommunity, setPendingCommunity] = useState<TSkillTree | null>(
    null
  );

  return (
    <>
      <div className="container h-full mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">Communities</h1>
        <p className="mb-5 text-muted-foreground">
          Discover and join communities that match your interests and skills.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communities.map((community: TSkillTree) => (
            <CommunityCard
              key={community.id}
              community={community as TSkillTree}
              pendingCommunity={pendingCommunity}
              setPendingCommunity={setPendingCommunity}
            />
          ))}
        </div>
        {communities.length === 0 && (
          <div className="py-12 text-center">
            <h3 className="mb-2 text-lg font-semibold">No communities found</h3>
            <p className="mb-4 text-muted-foreground">
              There are no communities available at the moment.
            </p>
            <Button>Create Community</Button>
          </div>
        )}
      </div>
    </>
  );
}

const CommunityCard = ({
  community,
  pendingCommunity,
  setPendingCommunity,
}: {
  community: TSkillTree;
  pendingCommunity: TSkillTree | null;
  setPendingCommunity: React.Dispatch<React.SetStateAction<TSkillTree | null>>;
}) => {
  const router = useRouter();
  const [isJoining, setIsJoining] = useState(false);

  return (
    <Card className={cn("flex flex-col h-full")}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="mb-2 text-xl">{community.name}</CardTitle>
          </div>
        </div>
        <CardDescription className="line-clamp-3">
          {community.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-2" />
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex flex-col w-full gap-2 md:w-full md:flex-row">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                onClick={() => {
                  setPendingCommunity(community);
                }}
                className="flex-1 transition-transform duration-150 hover:scale-105"
                size="sm"
                disabled={isJoining}
              >
                {isJoining ? "Joining..." : "Join Community"}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Join {pendingCommunity?.name}?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  You&apos;re about to join this community. You&apos;ll be
                  redirected to its page.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  disabled={isJoining}
                  onClick={async () => {
                    setIsJoining(true);
                    try {
                      const response = await joinSkillTreeAction(community.id);
                      if (response.ok) {
                        toast.success("Successfully joined skill tree!");
                      } else {
                        toast.error("Failed to join skill tree.");
                      }
                    } finally {
                      setIsJoining(false);
                    }
                  }}
                >
                  {isJoining ? "Joining..." : "Confirm"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Button
            onClick={() => router.push(`/community/${community.id}`)}
            variant="outline"
            size="sm"
            className="flex-1 transition-transform duration-150 hover:scale-105"
          >
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
