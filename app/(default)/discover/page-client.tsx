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
import { Users, MessageSquare } from "lucide-react";
import { communities } from "@/lib/mocks";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { TAuthSkillTree, TSkillTree } from "@/types";

export default function CommunitiesPageClient({
  communities,
}: {
  communities: TAuthSkillTree[];
}) {
  const router = useRouter();

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingCommunity, setPendingCommunity] = useState<any | null>(null);

  const openJoinConfirm = (community: any) => {
    setPendingCommunity(community);
    setConfirmOpen(true);
  };

  const confirmJoin = () => {};

  return (
    <>
      <div className="container h-full mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">Communities</h1>
        <p className="mb-5 text-muted-foreground">
          Discover and join communities that match your interests and skills.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communities.map((community: TAuthSkillTree) => (
            <Card key={community.id} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="mb-2 text-xl">
                      {community.name}
                    </CardTitle>
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
                    <span>{community.skillTreeUser.length} members</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="flex w-full gap-2">
                  <Button
                    onClick={() => openJoinConfirm(community)}
                    className="flex-1 transition-transform duration-150 hover:scale-105"
                    size="sm"
                  >
                    Join Community
                  </Button>
                  <Button
                    onClick={() => router.push(`/community/${community.id}`)}
                    variant="outline"
                    size="sm"
                    className="transition-transform duration-150 hover:scale-105"
                  >
                    View Details
                  </Button>
                </div>
              </CardFooter>
            </Card>
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

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Join {pendingCommunity?.community}?
            </AlertDialogTitle>
            <AlertDialogDescription>
              You&apos;re about to join this community. You&apos;ll be
              redirected to its page.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmJoin}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
