"use client";

import React from "react";
import useSWR from "swr";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Types
export type RecentEvent = {
  id: string;
  title: string; // e.g., "Livery Jam - 800 XP"
  club: string; // e.g., "Fan Garage"
  category: string; // e.g., "Race Strategy"
  userRank?: number; // User's rank position if joined
  isJoined: boolean; // Whether the user has joined this event
};

export type RecentEventsPayload = {
  events: RecentEvent[];
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function RecentEvents({ limit = 4 }: { limit?: number }) {
  const { data } = useSWR<RecentEventsPayload>(
    `/api/events/recent?limit=${limit}`,
    fetcher
  );

  const payload: RecentEventsPayload = data ?? {
    events: [
      {
        id: "1",
        title: "Race Day Bingo",
        club: "Fan Garage",
        category: "Community Engagement",
        isJoined: false,
      },
      {
        id: "2",
        title: "Livery Jam - 800 XP",
        club: "Fan Garage",
        category: "Race Strategy",
        isJoined: true,
        userRank: 7,
      },
      {
        id: "3",
        title: "100m Sprint Ladder - 1000 XP",
        club: "Swim Circle",
        category: "Freestyle Sprint",
        isJoined: true,
        userRank: 23,
      },
      {
        id: "4",
        title: "Backyard Six Fest",
        club: "Cricket Corner",
        category: "Hits Showcase",
        isJoined: false,
      },
    ],
  };

  const handleJoinEvent = (eventId: string) => {
    // Handle join event logic here
    console.log(`Joining event: ${eventId}`);
  };

  return (
    <section className="container mx-auto">
      <div className="mb-4 text-center">
        <h2 className="text-lg font-semibold">Recent Events</h2>
      </div>

      <div className="p-4 rounded-2xl md:p-6">
        <div className="space-y-3">
          {payload.events.map((ev) => (
            <Card key={ev.id} className="rounded-xl">
              <CardContent className="flex flex-col gap-2 p-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold">{ev.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {ev.club} · {ev.category}
                  </p>
                </div>
                <div className="shrink-0 self-start sm:self-center">
                  {ev.isJoined ? (
                    <Badge className="bg-blue-100 text-blue-700">
                      Rank #{ev.userRank}
                    </Badge>
                  ) : (
                    <Button 
                      size="sm" 
                      onClick={() => handleJoinEvent(ev.id)}
                      className="h-7 px-3 text-xs"
                    >
                      Join
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// PAGE: /app/events/page.tsx
// Simple page that displays the RecentEvents list. Place this in app/events/page.tsx
export function RecentEventsPageWrapper() {
  return (
    <main className="container px-6 py-8 mx-auto">
      <RecentEvents limit={8} />
    </main>
  );
}