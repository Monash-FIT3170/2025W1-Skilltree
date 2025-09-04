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
  mode: "ranked" | "unranked";
  club: string; // e.g., "Fan Garage"
  category: string; // e.g., "Race Strategy"
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
        mode: "unranked",
        club: "Fan Garage",
        category: "Community Engagement",
      },
      {
        id: "2",
        title: "Livery Jam - 800 XP",
        mode: "ranked",
        club: "Fan Garage",
        category: "Race Strategy",
      },
      {
        id: "3",
        title: "100m Sprint Ladder - 1000 XP",
        mode: "ranked",
        club: "Swim Circle",
        category: "Freestyle Sprint",
      },
      {
        id: "4",
        title: "Backyard Six Fest",
        mode: "unranked",
        club: "Cricket Corner",
        category: "Hits Showcase",
      },
    ],
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
                <Badge
                  className={`shrink-0 self-start sm:self-center ${
                    ev.mode === "ranked"
                      ? "bg-red-100 text-red-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {ev.mode === "ranked" ? "Ranked" : "UN-Ranked"}
                </Badge>
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
