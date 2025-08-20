"use client";

import Link from "next/link";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users, MessageSquare } from "lucide-react";
import { communities as allCommunities } from "@/lib/mocks";

// -------- Types & sample data --------
type EventItem = {
  id: string;
  title: string;
  community: string;
  skill: string;
  ranked: boolean;
  xp?: number;
};

const events: EventItem[] = [
  { id: "e1", title: "Race Day Bingo", community: "Fan Garage", skill: "Community Engagement", ranked: false },
  { id: "e2", title: "Livery Jam", community: "Fan Garage", skill: "Race Strategy", ranked: true, xp: 800 },
  { id: "e3", title: "100m Sprint Ladder", community: "Swim Circle", skill: "Freestyle Sprint", ranked: true, xp: 1000 },
  { id: "e4", title: "Backyard Six Fest", community: "Cricket Corner", skill: "Hits Showcase", ranked: false },
];

// Pretend these are the user's subs:
const subscribed = allCommunities.slice(0, 8);

// build a per-community posts href; fall back to a slug from name if no _id
const getCommunityPostsHref = (c: any) =>
  `/communities/${c._id ?? encodeURIComponent((c.community || "posts").toLowerCase())}/posts`;

export default function DashboardPage() {
  const columnHeight = "h-[85vh]"; // both columns scroll independently

  return (
    <div className="mt-0 grid gap-6 p lg:grid-cols-[minmax(0,1fr)_1px_360px]">
      {/* ---------- LEFT: Subscribed Communities (bigger) ---------- */}
      <section className={`${columnHeight} flex flex-col`}>
        <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="px-0 py-3 flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Subscribed Communities</h2>
            <span className="text-sm text-muted-foreground">{subscribed.length} total</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto pr-2">
            {subscribed.length === 0 ? (
                <EmptyState />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subscribed.map((c: any) => {
                    const href = getCommunityPostsHref(c);
                    const initial = (c.community?.[0] ?? "C").toUpperCase();
                    return (
                    <Card key={c._id ?? c.community} className="hover:bg-accent/40 transition">
                        <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                            {/* Clickable Avatar */}
                            <Link href={href} className="shrink-0">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={c.image ?? ""} alt={c.community ?? "Community"} />
                                <AvatarFallback>{initial}</AvatarFallback>
                            </Avatar>
                            </Link>

                            <div className="min-w-0 flex-1">
                            {/* Clickable Name */}
                            <Link href={href}>
                                <p className="font-medium truncate hover:underline">
                                {c.community}
                                </p>
                            </Link>

                            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                {c.text}
                            </p>

                            <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="inline-flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {Math.round(Math.random() * 900 + 1000).toLocaleString()}
                                </span>
                                <span className="inline-flex items-center gap-1">
                                <MessageSquare className="h-4 w-4" />
                                {Math.round(Math.random() * 900 + 1000).toLocaleString()}
                                </span>
                            </div>
                            </div>
                        </div>
                        </CardContent>
                    </Card>
                    );
                })}
                </div>
            )}
            </div>

      </section>

      {/* Vertical divider */}
     <div className="hidden lg:block bg-border h-[85vh]" />


      {/* ---------- RIGHT: Events (smaller) ---------- */}
      <section className={`${columnHeight} flex flex-col `}>
        <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="px-0 py-3 flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Upcoming Events</h2>
            <span className="text-sm text-muted-foreground">{events.length} total</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto pr-2">
          <ul className="space-y-3">
            {events.map((ev) => (
              <li key={ev.id} className="rounded-lg border p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-medium truncate">
                      {ev.title}
                      {typeof ev.xp === "number" ? ` · ${ev.xp} XP` : ""}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 truncate">
                      {ev.community} — {ev.skill}
                    </p>
                  </div>
                  <Badge
                    variant={ev.ranked ? "destructive" : "secondary"}
                    className={ev.ranked ? "" : "text-emerald-700 bg-emerald-100"}
                  >
                    {ev.ranked ? "Ranked" : "UN-Ranked"}
                  </Badge>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
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
