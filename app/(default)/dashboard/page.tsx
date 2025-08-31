"use client";

import Link from "next/link";
import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users, MessageSquare } from "lucide-react";
import { communities as allCommunities } from "@/lib/mocks";
import { ScrollArea } from "@/components/ui/scroll-area";

type EventItem = {
  id: string;
  title: string;
  community: string;
  skill: string;
  ranked: boolean;
  xp?: number;
};

const events: EventItem[] = [
  {
    id: "e1",
    title: "Race Day Bingo",
    community: "Fan Garage",
    skill: "Community Engagement",
    ranked: false,
  },
  {
    id: "e2",
    title: "Livery Jam",
    community: "Fan Garage",
    skill: "Race Strategy",
    ranked: true,
    xp: 800,
  },
  {
    id: "e3",
    title: "100m Sprint Ladder",
    community: "Swim Circle",
    skill: "Freestyle Sprint",
    ranked: true,
    xp: 1000,
  },
  {
    id: "e4",
    title: "Backyard Six Fest",
    community: "Cricket Corner",
    skill: "Hits Showcase",
    ranked: false,
  },
  {
    id: "e5",
    title: "Technique Showdown",
    community: "Swim Circle",
    skill: "Flip Turns",
    ranked: false,
  },
  {
    id: "e6",
    title: "Skill Forest Relay",
    community: "Fan Garage",
    skill: "Strategy Draft",
    ranked: true,
    xp: 600,
  },
  {
    id: "e7",
    title: "Weekly Ladder",
    community: "Cricket Corner",
    skill: "Batting Practice",
    ranked: true,
    xp: 700,
  },
  {
    id: "e8",
    title: "Open Mic Coaching",
    community: "Fan Garage",
    skill: "AMA",
    ranked: false,
  },
  {
    id: "e9",
    title: "100m Sprint Ladder",
    community: "Swim Circle",
    skill: "Freestyle Sprint",
    ranked: true,
    xp: 1000,
  },
  {
    id: "e10",
    title: "Livery Jam",
    community: "Fan Garage",
    skill: "Race Strategy",
    ranked: true,
    xp: 800,
  },
  {
    id: "e11",
    title: "Race Day Bingo",
    community: "Fan Garage",
    skill: "Community Engagement",
    ranked: false,
  },
  {
    id: "e12",
    title: "Community Showcase",
    community: "Cricket Corner",
    skill: "Highlights",
    ranked: false,
  },
];

const adminBaseIdx = new Set([0, 2, 5]); // 3 admins in the base 8
const baseSubs = allCommunities.slice(0, 8).map((c: any, i: number) => ({
  ...c,
  role: adminBaseIdx.has(i) ? "admin" : "member",
}));

// Create extra items (6 more) and mark a couple as admin too
const extraSubs = Array.from({ length: 6 }, (_, i) => {
  const c = baseSubs[i % baseSubs.length];
  const isAdminExtra = i === 1 || i === 4; // 2 admins in the extras
  return {
    ...c,
    _id: `${c._id ?? c.community}-dup${i + 1}`,
    role: isAdminExtra ? "admin" : "member",
  };
});

const subscribed = [...baseSubs, ...extraSubs];

const getCommunityPostsHref = (_c: any) => `/communities/posts`;
const getEventHref = (_ev: EventItem) => `/communities/events`;

export default function DashboardPage() {
  const columnHeight = "calc(100vh-6.5rem)";

  return (
    <div
      className={`h-full mt-0 grid gap-6 p lg:grid-cols-[minmax(0,1fr)_1px_360px]`}
    >
      <ScrollArea
        className={`h-full max-h-[${columnHeight}] flex flex-col pr-5`}
      >
        <header className="flex flex-col items-baseline justify-between pb-5">
          <h2 className="text-2xl font-bold tracking-tight">
            Subscribed Communities
          </h2>
          <span className="text-sm text-muted-foreground">
            {subscribed.length} total
          </span>
        </header>
        <div className="flex-1 overflow-y-auto pr-2">
          {subscribed.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subscribed.map((c: any) => {
                const href = getCommunityPostsHref(c);
                const initial = (c.community?.[0] ?? "C").toUpperCase();
                const isAdmin = c.role === "admin";

                return (
                  <Card key={c._id ?? c.community}>
                    <CardHeader className="!flex items-center gap-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={c.image ?? ""}
                          alt={c.community ?? "Community"}
                        />
                        <AvatarFallback>{initial}</AvatarFallback>
                      </Avatar>
                      <CardTitle>
                        <Link href={href} className="min-w-0">
                          {c.community}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-wrap text-sm text-muted-foreground line-clamp-3 w-full">
                        {c.text}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full flex items-center justify-between gap-4 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {Math.round(
                            Math.random() * 900 + 1000
                          ).toLocaleString()}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {Math.round(
                            Math.random() * 900 + 1000
                          ).toLocaleString()}
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="hidden lg:block bg-border h-[${calc(100vh-6.5rem)}]" />

      <ScrollArea
        className={`h-full max-h-[${columnHeight}] flex flex-col pr-5`}
      >
        <header className="flex flex-col items-baseline justify-between pb-5">
          <h2 className="text-2xl font-bold tracking-tight">Upcoming Events</h2>
          <span className="text-sm text-muted-foreground">
            {events.length} total
          </span>
        </header>
        <div className="flex flex-col gap-5">
          {" "}
          {events.map((ev) => {
            return (
              <Card
                key={ev.id}
                className="w-full rounded-lg border hover:bg-accent/40 transition"
                title={`Open ${ev.community} events`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {ev.title}
                    <Badge variant={ev.ranked ? "default" : "destructive"}>
                      {ev.ranked ? "Ranked" : "Unranked"}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{ev.xp ? ev.xp : 0} XP</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="w-fit text-sm text-muted-foreground mt-1 line-clamp-2">
                    {ev.community} - {ev.skill}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-10">
      <p className="text-sm text-muted-foreground mb-3">
        You haven’t joined any communities yet.
      </p>
      <Button asChild>
        <Link href="/communities">Discover communities</Link>
      </Button>
    </div>
  );
}
