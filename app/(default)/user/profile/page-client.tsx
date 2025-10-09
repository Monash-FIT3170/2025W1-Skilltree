"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
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
  Mail,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { TUser } from "@/types";
import { TSkillTrees } from "@/actions/get-my-skilltrees";
import { format } from "date-fns";
import { initials } from "@/lib/utils";

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
  // If you only have one list now, pass it as `skilltrees` and it will appear under "Joined"
  skilltrees = [],
  completedSkilltrees = [],
  joinedSkilltrees = undefined, // if undefined, we’ll fall back to `skilltrees`
  ownedSkilltrees = [],
  followers = [],
  following = [],
  profileStats,
  isOwnProfile = true,
  isFollowing = false,
}: {
  user: TUser;
  /** Backward-compat: treated as "Joined" if joinedSkilltrees is not provided */
  skilltrees?: TSkillTrees[];
  completedSkilltrees?: TSkillTrees[];
  joinedSkilltrees?: TSkillTrees[];
  ownedSkilltrees?: TSkillTrees[];
  followers?: TFollower[];
  following?: TFollower[];
  profileStats?: TProfileStats;
  isOwnProfile?: boolean;
  isFollowing?: boolean;
}) {
  const router = useRouter();
  const [currentlyFollowing, setCurrentlyFollowing] = useState(isFollowing);

  // Dialog state for followers/following popups
  const [followersOpen, setFollowersOpen] = useState(false);
  const [followingOpen, setFollowingOpen] = useState(false);
  const [followersQuery, setFollowersQuery] = useState("");
  const [followingQuery, setFollowingQuery] = useState("");

  // Default profile stats if not provided
  const stats = profileStats || {
    followersCount: followers.length,
    followingCount: following.length,
    communitiesJoined:
      (joinedSkilltrees ?? skilltrees).length +
      completedSkilltrees.length +
      ownedSkilltrees.length,
    totalXP: user.xpPoint,
  };

  const actualJoined = (joinedSkilltrees ?? skilltrees) as TSkillTrees[];

  const handleFollowToggle = () => {
    setCurrentlyFollowing(!currentlyFollowing);
    // TODO: call API here
  };

  const handleEditProfile = () => {
    router.push("/user/settings");
  };

  // Filtered lists for dialogs
  const filteredFollowers = useMemo(() => {
    const q = followersQuery.trim().toLowerCase();
    if (!q) return followers;
    return followers.filter((f) => f.name.toLowerCase().includes(q));
  }, [followers, followersQuery]);

  const filteredFollowing = useMemo(() => {
    const q = followingQuery.trim().toLowerCase();
    if (!q) return following;
    return following.filter((f) => f.name.toLowerCase().includes(q));
  }, [following, followingQuery]);

  return (
    <div className="container mx-auto flex h-full w-full flex-col">
      <header className="mb-8 flex flex-col gap-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <Avatar className="h-32 w-32 md:h-40 md:w-40">
            <AvatarImage src={user.pfp ?? ""} alt={user.name || "User"} />
            <AvatarFallback className="text-2xl">
              {initials(user.name)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-1 flex-col items-center gap-4 md:items-start">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tight">{user.name}</h1>
              <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{user.email}</span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">
                  Joined {format(user.dateOfBirth, "MMMM yyyy")}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              {isOwnProfile ? (
                <Button onClick={handleEditProfile} variant="outline">
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
                      <UserMinus className="h-4 w-4" />
                      Unfollow
                    </>
                  ) : (
                    <>
                      <UserPlus className="h-4 w-4" />
                      Follow
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Stats Cards (Followers & Following cards are clickable -> open Dialog) */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Trophy className="mb-2 h-8 w-8 text-yellow-500" />
              <div className="text-2xl font-bold">
                {stats.totalXP.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">Total XP</p>
            </CardContent>
          </Card>

          <Card
            role="button"
            onClick={() => setFollowersOpen(true)}
            className="transition hover:bg-accent/40"
            title="View Followers"
          >
            <CardContent className="flex flex-col items-center p-6">
              <Users className="mb-2 h-8 w-8 text-blue-500" />
              <div className="text-2xl font-bold">{stats.followersCount}</div>
              <p className="text-sm text-muted-foreground">Followers</p>
            </CardContent>
          </Card>

          <Card
            role="button"
            onClick={() => setFollowingOpen(true)}
            className="transition hover:bg-accent/40"
            title="View Following"
          >
            <CardContent className="flex flex-col items-center p-6">
              <UserIcon className="mb-2 h-8 w-8 text-green-500" />
              <div className="text-2xl font-bold">{stats.followingCount}</div>
              <p className="text-sm text-muted-foreground">Following</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <GitGraphIcon className="mb-2 h-8 w-8 text-purple-500" />
              <div className="text-2xl font-bold">{actualJoined.length}</div>
              <p className="text-sm text-muted-foreground">Communities</p>
            </CardContent>
          </Card>
        </div>
      </header>

      {/* Tabs: Communities Completed / Joined / Owned */}
      <Tabs defaultValue="completed" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="owned">Communities Owned</TabsTrigger>
          <TabsTrigger value="joined">Communities Joined</TabsTrigger>
          <TabsTrigger value="completed">Communities Completed</TabsTrigger>
        </TabsList>
        {/* Owned */}
        <TabsContent value="owned" className="mt-6">
          <CommunityGrid trees={ownedSkilltrees} />
        </TabsContent>

        {/* Joined */}
        <TabsContent value="joined" className="mt-6">
          <CommunityGrid trees={actualJoined} />
        </TabsContent>

        {/* Completed */}
        <TabsContent value="completed" className="mt-6">
          <CommunityGrid trees={completedSkilltrees} />
        </TabsContent>
      </Tabs>

      {/* Followers Dialog */}
      <Dialog open={followersOpen} onOpenChange={setFollowersOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Followers</DialogTitle>
            <DialogDescription>
              Search and browse your followers.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <Input
              placeholder="Search ..."
              value={followersQuery}
              onChange={(e) => setFollowersQuery(e.target.value)}
            />

            <div className="grid gap-3">
              {filteredFollowers.length === 0 ? (
                <Card>
                  <CardContent className="flex items-center justify-center p-8">
                    <p className="text-sm text-muted-foreground">
                      No followers found.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                filteredFollowers.map((f) => (
                  <Card key={f.id} className="transition hover:bg-accent/40">
                    <CardContent className="flex items-center gap-4 p-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={f.pfp ?? ""} alt={f.name} />
                        <AvatarFallback>{initials(f.name)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium leading-tight">{f.name}</p>
                        <div className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Trophy className="h-3 w-3" />
                          {f.xpPoint.toLocaleString()} XP
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Following Dialog */}
      <Dialog open={followingOpen} onOpenChange={setFollowingOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Following</DialogTitle>
            <DialogDescription>
              Search and browse people you follow.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <Input
              placeholder="Search ..."
              value={followingQuery}
              onChange={(e) => setFollowingQuery(e.target.value)}
            />

            <div className="grid gap-3">
              {filteredFollowing.length === 0 ? (
                <Card>
                  <CardContent className="flex items-center justify-center p-8">
                    <p className="text-sm text-muted-foreground">
                      No users found.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                filteredFollowing.map((u) => (
                  <Card key={u.id} className="transition hover:bg-accent/40">
                    <CardContent className="flex items-center gap-4 p-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={u.pfp ?? ""} alt={u.name} />
                        <AvatarFallback>{initials(u.name)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium leading-tight">{u.name}</p>
                        <div className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Trophy className="h-3 w-3" />
                          {u.xpPoint.toLocaleString()} XP
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

/** Grid section reused for the three community tabs */
function CommunityGrid({ trees }: { trees: TSkillTrees[] }) {
  const router = useRouter();

  if (!trees || trees.length === 0) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-8">
          <p className="text-muted-foreground">No communities to show.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {trees.map((tree) => (
        <Card
          key={tree.skillTree.id}
          className="cursor-pointer transition-colors hover:bg-primary/10"
          onClick={() => router.push(`/community/${tree.skillTree.id}`)}
        >
          <CardHeader>
            <CardTitle className="text-lg">{tree.skillTree.name}</CardTitle>
            <CardDescription className="line-clamp-2">
              {tree.skillTree.description}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <GitGraphIcon className="h-4 w-4" />
                {tree.skillTree._count.skillNodes} nodes
              </span>
              <span className="inline-flex items-center gap-1">
                <UserIcon className="h-4 w-4" />
                {tree.skillTree._count.skillTreeUser} members
              </span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
