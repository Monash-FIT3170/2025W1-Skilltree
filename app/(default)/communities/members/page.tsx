"use client";

import { CommunityType } from "@/models/Community";
import { UserType } from "@/models/User";
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

// Predefined roles
const roles = ["admin", "verified user", "member"];

export default function ViewMembers() {
  const params = useParams();
  const router = useRouter();
  const communityId = params.id;

  // === States ===
  const [community, setCommunity] = useState<CommunityType | null>(null); // Store community details
  const [members, setMembers] = useState<UserType[]>([]); // Store members list
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch community details
  useEffect(() => {
    if (communityId) {
      const fetchCommunity = async () => {
        setLoading(true);
        const response = await fetch(`/api/communities/${communityId}`);
        const data = await response.json();
        setCommunity(data); // Set community data
        setLoading(false);
      };

      fetchCommunity();
    }
  }, [communityId]);

  // Fetch members for the specific community
  useEffect(() => {
    if (!communityId) return;

    const fetchMembers = async () => {
      setLoading(true);
      const response = await fetch(`/api/communities/${communityId}/members`);
      const data = await response.json();
      setMembers(data); // Set members list
      setLoading(false);
    };

    fetchMembers();
  }, [communityId]);

  // === Handlers ===
  const updateMemberRole = (id: string, newRole: string) => {
    setMembers((prev) =>
      prev.map((m) => {
        if (m._id !== id) return m;
        return { ...m, role: newRole };
      })
    );
  };

  const removeMember = (id: string) => {
    setMembers((prev) => prev.filter((m) => m._id !== id));
  };

  // === Rendering ===
  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  if (!community) {
    return <div>No community found.</div>; // Handle case if no community data
  }

  return (
    <div className="min-h-screen min-w-full flex flex-col">
      {/* Community Details Section */}
      <header className="w-full px-8 py-4 border-b flex justify-between items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="mb-4 flex items-center space-x-1"
        >
          <span>Back to Communities</span>
        </Button>
        <h2 className="text-2xl font-semibold">Community Details</h2>
      </header>

      <main className="flex-1 p-8">
        <div className="mb-8">
          <h3 className="text-xl font-medium">{community.name}</h3>
          <p><strong>ID:</strong> {community._id}</p>
          <p><strong>Creator:</strong> {community.creator}</p>
          <p><strong>Admins:</strong> {community.admins.join(", ")}</p>
          <p><strong>Verified Users:</strong> {community.verifiedUsers.join(", ")}</p>
        </div>

        {/* Members List Section */}
        <h3 className="text-xl font-medium mb-4">Manage Members</h3>
        <div className="space-y-4">
          {members.length === 0 && !loading && (
            <p>No members in the community yet.</p>
          )}
          {members.map((member) => (
            <div
              key={member._id}
              className="flex items-center justify-between border p-2 rounded"
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-gray-500">
                    {member.name.toLowerCase().replace(/\s/g, "")}@example.com
                  </p>
                </div>
              </div>
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
                        onSelect={() => updateMemberRole(member._id, role)}
                        className="w-full"
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
                  onClick={() => removeMember(member._id)}
                >
                  Remove
                </Button>
              </div>)
          )}
        </div>
      </main>
    </div>
    )
  };
