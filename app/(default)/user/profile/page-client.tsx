"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  UserPlus, 
  UserMinus,
  GitGraphIcon, 
  UserIcon, 
  Trophy,
  Calendar,
  MapPin,
  Mail
} from "lucide-react";
import { TUser } from "@/types";
import { TSkillTrees } from "@/actions/get-my-skilltrees";
import { format } from "date-fns";
import { initials } from "@/lib/utils";
import { useRouter } from "next/navigation";

// Mock types for profile data
type TFollower = {
  id: string;
  name: string;
  pfp?: string;
  xpPoint: number;
};

type TProfileStats = {
  followersCount: number;
  followingCount: number;
  communitiesJoined: number;
  totalXP: number;
};

export default function UserProfileClient({
  user,
  skilltrees = [],
  followers = [],
  following = [],
  profileStats,
  isOwnProfile = true,
  isFollowing = false
}: {
  user: TUser;
  skilltrees?: TSkillTrees[];
  followers?: TFollower[];
  following?: TFollower[];
  profileStats?: TProfileStats;
  isOwnProfile?: boolean;
  isFollowing?: boolean;
}) {
  const router = useRouter();
  const [currentlyFollowing, setCurrentlyFollowing] = useState(isFollowing);

  // Default profile stats if not provided
  const stats = profileStats || {
    followersCount: followers.length,
    followingCount: following.length,
    communitiesJoined: skilltrees.length,
    totalXP: user.xpPoint
  };

  const handleFollowToggle = () => {
    // Handle follow/unfollow logic here
    setCurrentlyFollowing(!currentlyFollowing);
    console.log(currentlyFollowing ? "Unfollowing user" : "Following user");
  };

  const handleEditProfile = () => {
    router.push("/user/settings");
  };

  return (
    <div className="container flex flex-col w-full h-full mx-auto">
      <header className="flex flex-col gap-6 mb-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <Avatar className="h-32 w-32 md:h-40 md:w-40">
            <AvatarImage src={user.pfp ?? ""} alt={user.name || "User"} />
            <AvatarFallback className="text-2xl">{initials(user.name)}</AvatarFallback>
          </Avatar>
          
          <div className="flex flex-col items-center gap-4 md:items-start md:flex-1">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tight">{user.name}</h1>
              <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{user.email}</span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Joined {format(user.dateOfBirth, "MMMM yyyy")}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {isOwnProfile ? (
                <Button onClick={handleEditProfile} variant ="outline">
                  Edit Profile
                </Button>
              ) : (
                <Button 
                  onClick={handleFollowToggle}
                  variant={currentlyFollowing ? "outline" : "default"}
                  className="flex items-center gap-2"
                >
                  {currentlyFollowing ? (
                    <>
                      <UserMinus className="w-4 h-4" />
                      Unfollow
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-4 h-4" />
                      Follow
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Trophy className="w-8 h-8 mb-2 text-yellow-500" />
              <div className="text-2xl font-bold">{stats.totalXP.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground">Total XP</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Users className="w-8 h-8 mb-2 text-blue-500" />
              <div className="text-2xl font-bold">{stats.followersCount}</div>
              <p className="text-sm text-muted-foreground">Followers</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <UserIcon className="w-8 h-8 mb-2 text-green-500" />
              <div className="text-2xl font-bold">{stats.followingCount}</div>
              <p className="text-sm text-muted-foreground">Following</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <GitGraphIcon className="w-8 h-8 mb-2 text-purple-500" />
              <div className="text-2xl font-bold">{stats.communitiesJoined}</div>
              <p className="text-sm text-muted-foreground">Communities</p>
            </CardContent>
          </Card>
        </div>
      </header>

      {/* Tabs Section */}
      <Tabs defaultValue="communities" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="communities">Communities</TabsTrigger>
          <TabsTrigger value="followers">Followers</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>
        
        <TabsContent value="communities" className="mt-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Joined Communities</h2>
            {skilltrees.length === 0 ? (
              <Card>
                <CardContent className="flex items-center justify-center p-8">
                  <p className="text-muted-foreground">No communities joined yet.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {skilltrees.map((tree: TSkillTrees) => (
                  <Card
                    key={tree.skillTree.id}
                    className="transition-colors cursor-pointer hover:bg-primary/10"
                    onClick={() => router.push(`/community/${tree.skillTree.id}`)}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{tree.skillTree.name}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {tree.skillTree.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <GitGraphIcon className="w-4 h-4" />
                          {tree.skillTree._count.skillNodes} nodes
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <UserIcon className="w-4 h-4" />
                          {tree.skillTree._count.skillTreeUser} members
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="followers" className="mt-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Followers ({stats.followersCount})</h2>
            {followers.length === 0 ? (
              <Card>
                <CardContent className="flex items-center justify-center p-8">
                  <p className="text-muted-foreground">No followers yet.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {followers.map((follower) => (
                  <Card key={follower.id} className="transition-colors cursor-pointer hover:bg-primary/10">
                    <CardContent className="flex items-center gap-4 p-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={follower.pfp ?? ""} alt={follower.name} />
                        <AvatarFallback>{initials(follower.name)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{follower.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Trophy className="w-3 h-3" />
                          {follower.xpPoint.toLocaleString()} XP
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="following" className="mt-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Following ({stats.followingCount})</h2>
            {following.length === 0 ? (
              <Card>
                <CardContent className="flex items-center justify-center p-8">
                  <p className="text-muted-foreground">Not following anyone yet.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {following.map((user) => (
                  <Card key={user.id} className="transition-colors cursor-pointer hover:bg-primary/10">
                    <CardContent className="flex items-center gap-4 p-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.pfp ?? ""} alt={user.name} />
                        <AvatarFallback>{initials(user.name)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{user.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Trophy className="w-3 h-3" />
                          {user.xpPoint.toLocaleString()} XP
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}