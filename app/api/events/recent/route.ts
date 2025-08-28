import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const limit = Number(url.searchParams.get("limit") ?? 8);

  // TODO: replace with DB query (order by occurredAt desc)
  const events = [
    { id: "1", title: "Race Day Bingo", mode: "unranked", club: "Fan Garage", category: "Community Engagement" },
    { id: "2", title: "Livery Jam - 800 XP", mode: "ranked",   club: "Fan Garage", category: "Race Strategy" },
    { id: "3", title: "100m Sprint Ladder - 1000 XP", mode: "ranked", club: "Swim Circle", category: "Freestyle Sprint" },
    { id: "4", title: "Backyard Six Fest", mode: "unranked", club: "Cricket Corner", category: "Hits Showcase" },
    // ...pull more from DB
  ].slice(0, limit);

  return NextResponse.json({ events });
}

