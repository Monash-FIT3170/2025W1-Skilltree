"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TSkillTreeMember } from "@/actions/get-community-members";
import { toast } from "sonner";
import { TSkillTree } from "@/actions/get-community-action";
import { useStore } from "@xyflow/react";
import { userStore } from "@/stores";
import { removeUserFromSkillTree } from "@/actions/remove-user-from-skilltree";

const roles = ["ADMIN", "MEMBER"];

const CommunityMembersClient = ({
  id,
  community,
  members,
}: {
  id: string;
  community: TSkillTree;
  members: TSkillTreeMember[];
}) => {
  const router = useRouter();
  const user = userStore.getState();

  const isAdmin = community.skillTreeUser.some(
    (u) =>
      user.userId! === community.creator.id ||
      (u.role === "ADMIN" && u.user.id === user.userId!)
  );

  return (
    <div className="flex flex-col min-w-full min-h-screen">
      <h2 className="mb-5 text-2xl font-semibold">View All Members</h2>

      <main className="flex-1">
        <div className="space-y-4">
          {members.length === 0 && <p>No members in the community yet.</p>}
          {members.map((member: TSkillTreeMember) => (
            <div
              key={member.user.id}
              className="flex items-center justify-between p-2 border rounded"
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback>{member.user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{member.user.name}</p>
                    <Badge
                      className={cn(
                        "font-bold",
                        member.role === "ADMIN"
                          ? "bg-primary"
                          : member.role === "MEMBER"
                            ? "bg-foreground text-background"
                            : "bg-primary"
                      )}
                    >
                      {member.role.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">{member.user.email}</p>
                </div>
              </div>
              {isAdmin && (
                <div
                  className={cn(
                    "flex items-center space-x-2",
                    member.user.id === user.userId &&
                    "opacity-50 pointer-events-none"
                  )}
                >
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={async () => {
                      const response = await removeUserFromSkillTree(
                        id,
                        member.user.id
                      );
                      const msg =
                        typeof response.message === "string"
                          ? response.message
                          : JSON.stringify(response.message);
                      toast.success(msg);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CommunityMembersClient;
