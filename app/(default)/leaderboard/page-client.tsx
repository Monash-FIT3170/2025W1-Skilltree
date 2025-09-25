"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronUp, ChevronDown, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

type Trend = "up" | "down" | "neutral";
type Row = { rank: number; name: string; xp: number; communities: number; trend: Trend; pfp?: string | null };

export default function Leaderboard() {
  const [pageSize, setPageSize] = useState<"10" | "25" | "50">("25");
  const [currentPage, setCurrentPage] = useState(1);

  const all: Row[] = [
    { rank: 1, name: "Han Sama", xp: 788_890, communities: 42, trend: "up" },
    { rank: 2, name: "Samaira Ashi", xp: 718_290, communities: 37, trend: "neutral" },
    { rank: 3, name: "Lilly", xp: 673_888, communities: 28, trend: "up" },
    { rank: 4, name: "Josh", xp: 658_393, communities: 31, trend: "down" },
    { rank: 5, name: "Kai", xp: 640_120, communities: 22, trend: "up" },
    { rank: 6, name: "Rhea", xp: 632_540, communities: 19, trend: "neutral" },
    { rank: 7, name: "Zee", xp: 618_300, communities: 24, trend: "down" },
    { rank: 8, name: "Arman", xp: 607_910, communities: 26, trend: "up" },
    { rank: 9, name: "Mika", xp: 598_450, communities: 21, trend: "neutral" },
    { rank: 10, name: "Jules", xp: 590_020, communities: 16, trend: "down" },
    { rank: 11, name: "Ira", xp: 585_220, communities: 18, trend: "up" },
    { rank: 12, name: "Luca", xp: 576_990, communities: 20, trend: "neutral" },
    { rank: 13, name: "Ravi", xp: 570_410, communities: 14, trend: "up" },
    { rank: 14, name: "Noor", xp: 562_330, communities: 12, trend: "down" },
    { rank: 15, name: "Ari", xp: 559_100, communities: 25, trend: "up" },
    { rank: 16, name: "Dev", xp: 553_700, communities: 23, trend: "neutral" },
    { rank: 17, name: "Sana", xp: 548_520, communities: 19, trend: "up" },
    { rank: 18, name: "Ken", xp: 540_480, communities: 17, trend: "down" },
    { rank: 19, name: "Mo", xp: 532_090, communities: 15, trend: "neutral" },
    { rank: 20, name: "Yas", xp: 528_330, communities: 22, trend: "up" },
    { rank: 21, name: "Rio", xp: 520_010, communities: 18, trend: "down" },
    { rank: 22, name: "Fox", xp: 515_440, communities: 20, trend: "neutral" },
    { rank: 23, name: "Uma", xp: 509_980, communities: 21, trend: "up" },
    { rank: 24, name: "Bea", xp: 503_700, communities: 19, trend: "neutral" },
    { rank: 25, name: "Nash", xp: 498_240, communities: 16, trend: "down" },
    { rank: 26, name: "Zara", xp: 492_110, communities: 18, trend: "up" },
    { rank: 27, name: "Leo", xp: 487_900, communities: 13, trend: "neutral" },
    { rank: 28, name: "Jin", xp: 483_330, communities: 12, trend: "down" },
    { rank: 29, name: "Ana", xp: 480_010, communities: 14, trend: "up" },
    { rank: 30, name: "Vic", xp: 475_770, communities: 15, trend: "neutral" },
    { rank: 31, name: "Ezra", xp: 470_660, communities: 17, trend: "down" },
    { rank: 32, name: "Omar", xp: 468_420, communities: 19, trend: "up" },
    { rank: 33, name: "Ivy", xp: 462_300, communities: 21, trend: "neutral" },
    { rank: 34, name: "Pia", xp: 458_990, communities: 24, trend: "down" },
    { rank: 35, name: "Ren", xp: 455_230, communities: 23, trend: "up" },
    { rank: 36, name: "Sky", xp: 450_010, communities: 22, trend: "neutral" },
    { rank: 37, name: "Jae", xp: 446_900, communities: 20, trend: "down" },
    { rank: 38, name: "Yuri", xp: 443_120, communities: 19, trend: "up" },
    { rank: 39, name: "Sol", xp: 438_650, communities: 17, trend: "neutral" },
    { rank: 40, name: "Moe", xp: 432_000, communities: 16, trend: "down" },
    { rank: 41, name: "Kyo", xp: 429_330, communities: 18, trend: "up" },
    { rank: 42, name: "Tia", xp: 425_210, communities: 21, trend: "neutral" },
    { rank: 43, name: "Ryu", xp: 420_090, communities: 25, trend: "down" },
    { rank: 44, name: "Dax", xp: 418_500, communities: 24, trend: "up" },
    { rank: 45, name: "Elle", xp: 415_380, communities: 22, trend: "neutral" },
    { rank: 46, name: "Noa", xp: 410_260, communities: 20, trend: "down" },
    { rank: 47, name: "Ava", xp: 408_140, communities: 19, trend: "up" },
    { rank: 48, name: "Ian", xp: 404_990, communities: 18, trend: "neutral" },
    { rank: 49, name: "Kim", xp: 401_220, communities: 17, trend: "down" },
    { rank: 50, name: "Neo", xp: 398_000, communities: 16, trend: "neutral" },
  ];
  
  const totalPages = Math.ceil(all.length / Number(pageSize));

  const rows = useMemo(() => {
    const start = (currentPage - 1) * Number(pageSize);
    const end = start + Number(pageSize);
    return all.slice(start, end);
  }, [all, pageSize, currentPage]);
  const isCompact = rows.length <= 10; // when "Show 10"
  
  const handlePageSizeChange = (v: "10" | "25" | "50") => {
  setPageSize(v);
  setCurrentPage(1); 
  };

  return (
    <div className={isCompact ? "flex w-full flex-col" : "flex h-screen w-full flex-col"}>
      {/* Header bar */}
      <div className="border-b bg-background">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Skilltree Logo" className="h-10 w-10" />
            <h1 className="flex items-center gap-2 text-2xl font-bold">
              Leaderboard <Trophy className="h-6 w-6 text-yellow-500" />
            </h1>
          </div>

          <Select
            value={pageSize}
            onValueChange={(v: "10" | "25" | "50") => setPageSize(v)}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Rows per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">Show 10</SelectItem>
              <SelectItem value="25">Show 25</SelectItem>
              <SelectItem value="50">Show 50</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-4">
        <Card className={isCompact ? "border" : "flex min-h-0 flex-1 flex-col border"}>
          {/* Header row — same grid as rows */}
          <div className="sticky top-0 z-10 grid grid-cols-[80px_1fr_180px_220px] items-center gap-2 border-b bg-card px-4 py-3 font-semibold">
            <span>Rank</span>
            <span>Username</span>
            <span className="text-center">Communities</span>
            <span className="grid grid-cols-[1fr_20px] items-center">
              <span className="text-right">Total XP</span>
              <span />
            </span>
          </div>

          {/* Body: only scroll when NOT compact */}
          <div className={isCompact ? "" : "min-h-0 flex-1 overflow-auto"}>
            {rows.map((user) => (
              <div
                key={user.rank}
                className="grid grid-cols-[80px_1fr_180px_220px] items-center gap-2 border-b px-4 py-3 last:border-0"
              >
                <span className="tabular-nums">{user.rank}.</span>

                <div className="flex min-w-0 items-center gap-3">
                  <Avatar className="h-8 w-8 shrink-0">
                    {user.pfp ? (
                      <AvatarImage src={user.pfp} alt={user.name} />
                    ) : (
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <span className="truncate">{user.name}</span>
                </div>

                <span className="text-center tabular-nums">
                  {user.communities.toLocaleString()}
                </span>

                <div className="grid grid-cols-[1fr_20px] items-center justify-end">
                  <span className="inline-block w-full text-right tabular-nums">
                    {user.xp.toLocaleString()}
                  </span>
                  {user.trend === "up" && <ChevronUp className="h-4 w-4 text-green-500" />}
                  {user.trend === "down" && <ChevronDown className="h-4 w-4 text-red-500" />}
                  {user.trend === "neutral" && <span />}
                </div>
              </div>
            ))}
          </div>
        </Card>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
