"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronUp, ChevronDown, Trophy } from "lucide-react";

export default function Leaderboard() {
  const data = [
    { rank: 1, name: "Han Sama", xp: 788890, trend: "up" },
    { rank: 2, name: "Samaira Ashi", xp: 718290, trend: "neutral" },
    { rank: 3, name: "Nilly", xp: 673888, trend: "up" },
    { rank: 4, name: "Josh", xp: 658393, trend: "down" },
  ];

  return (
    <div className="p-6 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <img src="/images/logo.png" alt="Skilltree Logo" className="h-12 w-12" />

        <h1 className="text-2xl font-bold flex items-center gap-2">
          Leaderboard <Trophy className="text-yellow-500 w-6 h-6" />
        </h1>
      </div>

      {/* Filter */}
      <div className="self-end mb-4">
        <Select defaultValue="weekly">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Weekly" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Leaderboard Card */}
      <Card className="w-full max-w-2xl">
        <CardContent>
          <div className="grid grid-cols-[50px_1fr_120px] font-semibold py-2 border-b">
            <span>Rank</span>
            <span>Username</span>
            <span className="text-right">XP gained</span>
          </div>
          {data.map((user) => (
            <div className="grid grid-cols-[50px_1fr_120px] items-center py-3 border-b last:border-0">
              {/* Column 1: Rank (fixed 50px) */}
              <span>{user.rank}.</span>

              {/* Column 2: Username (flexible) */}
              <div className="flex items-center gap-2 min-w-0">
                <span className="truncate">{user.name}</span>
                <Avatar className="shrink-0">
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>


              {/* Column 3: XP (fixed 120px) */}
              <div className="grid grid-cols-[1fr_20px] items-center justify-end">
                <span className="tabular-nums text-right inline-block w-full">
                  {user.xp.toLocaleString()}
                </span>
                {user.trend === "up" && <ChevronUp className="text-green-500 w-4 h-4" />}
                {user.trend === "down" && <ChevronDown className="text-red-500 w-4 h-4" />}
              </div>
            </div>


          ))}
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="mt-4">
        <Select defaultValue="10">
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Show 10" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">Show 10</SelectItem>
            <SelectItem value="25">Show 25</SelectItem>
            <SelectItem value="50">Show 50</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div >
  );
}
