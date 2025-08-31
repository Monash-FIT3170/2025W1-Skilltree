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

// Predefined roles
const roles = ["admin", "moderator", "member"];

export default function ViewMembers() {
  const params = useParams();
  const router = useRouter();
  const communityId = params.id;

  const [members, setMembers] = useState<
    { id: number; name: string; role: string }[]
  >([
    { id: 1, name: "John Doe", role: "admin" },
    { id: 2, name: "Jane Smith", role: "moderator" },
    { id: 3, name: "Alex Johnson", role: "member" },
  ]);
  const [loading, setLoading] = useState(false); // Loading state

  const updateMemberRole = (id: number, newRole: string) => {
    setMembers((prev) =>
      prev.map((m) => {
        if (m.id !== id) return m;
        return { ...m, role: newRole };
      })
    );
  };

  const removeMember = (id: number) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  useEffect(() => {
    if (!communityId) return;

    console.log("Fetching members for community:", communityId); // Debugging log
  }, [communityId]);

  return (
    <div className="min-h-screen min-w-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-5">View All Members</h2>

      <main className="flex-1">
        {loading && <p>Loading members...</p>}

        <div className="space-y-4">
          {members.length === 0 && !loading && (
            <p>No members in the community yet.</p>
          )}
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between border p-2 rounded"
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{member.name}</p>
                    <Badge
                      className={cn(
                        "font-bold",
                        member.role === "admin"
                          ? "bg-primary"
                          : member.role === "moderator"
                            ? "bg-yellow-500 text-white"
                            : "bg-green-500 text-white"
                      )}
                    >
                      {member.role.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    {member.name.toLowerCase().replace(/\s/g, "")}@example.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {/* Dropdown Menu for Role Change */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Change Role
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {roles.map((role) => (
                      <DropdownMenuItem
                        key={role}
                        onSelect={() => updateMemberRole(member.id, role)}
                        className="w-full" // Ensures the button inside the dropdown takes full width
                      >
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Remove Member */}
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeMember(member.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
