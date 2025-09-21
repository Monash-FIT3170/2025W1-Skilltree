"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronUp, ChevronDown, Trophy } from "lucide-react";

export default function Leaderboard() {
  const data = [
    { rank: 1, name: "Han", xp: 788890, image: "/avatars/han.png", trend: "up" },
    { rank: 2, name: "Samaira", xp: 718290, image: "/avatars/samaira.png", trend: "neutral" },
    { rank: 3, name: "Nilly", xp: 673888, image: "/avatars/nilly.png", trend: "up" },
    { rank: 4, name: "Josh", xp: 658393, image: "/avatars/josh.png", trend: "down" },
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
          <div className="grid grid-cols-3 font-semibold py-2 border-b">
            <span>Rank</span>
            <span>User Name</span>
            <span>XP gained</span>
          </div>

          {data.map((user) => (
            <div key={user.rank} className="grid grid-cols-3 items-center py-3 border-b last:border-0">
              <span>{user.rank}.</span>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{user.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>{user.xp.toLocaleString()}</span>
                {user.trend === "up" && <ChevronUp className="text-green-500 w-4 h-4" />}
                {user.trend === "down" && <ChevronDown className="text-red-500 w-4 h-4" />}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="mt-4">
        <Select defaultValue="25">
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Show 25" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="25">Show 25</SelectItem>
            <SelectItem value="50">Show 50</SelectItem>
            <SelectItem value="100">Show 100</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
