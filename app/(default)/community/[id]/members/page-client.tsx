"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// dropdown and ArrowLeft imports removed — not used in this file
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TAuthSkillTreeMember } from "@/types";
import { toast } from "sonner";
import { userStore } from "@/stores";
import { removeUserFromSkillTree } from "@/actions/remove-user-from-skilltree";
import { getMembership } from "@/actions/get-membership";

// roles constant removed (unused)
const CommunityMembersClient = ({
  id,
  members,
}: {
  id: string;
  members: TAuthSkillTreeMember[];
}) => {
  const user = userStore.getState();
  const [membership, setMembership] = useState({
    admin: false,
    member: false,
  });

  useEffect(() => {
    const fetchMembership = async () => {
      const response = await getMembership(id);
      if (response.ok) {
        setMembership(response.message);
      } else {
        toast.error("Failed to fetch membership details");
      }
    };

    fetchMembership();
  }, [id]);

  return (
    <div className="flex flex-col min-w-full min-h-screen">
      <h2 className="mb-5 text-2xl font-semibold">View All Members</h2>

      <main className="flex-1">
        <div className="space-y-4">
          {members.length === 0 && <p>No members in the community yet.</p>}
          {members.map((member: TAuthSkillTreeMember) => (
            <div
              key={member.user.id}
              className="flex flex-col md:flex-row md:items-center md:justify-between p-2 border rounded"
            >
              <div className="flex items-center space-x-3 mb-2 md:mb-0">
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
              {membership.admin && (
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
                      toast.success(response.message);
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
