"use client";

import { useMemo, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronUp, ChevronDown, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Trend = "up" | "down" | "neutral";
type Row = {
  rank: number;
  name: string;
  xp: number;
  communities: number;
  trend: Trend;
  pfp?: string | null;
};

export default function Leaderboard() {
  const [pageSize, setPageSize] = useState<"10" | "25" | "50">("25");
  const [currentPage, setCurrentPage] = useState(1);

  const all: Row[] = [
    { rank: 1, name: "Han Sama", xp: 788_890, communities: 42, trend: "up" },
    {
      rank: 2,
      name: "Samaira Ashi",
      xp: 718_290,
      communities: 37,
      trend: "neutral",
    },
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

  const handlePageSizeChange = (v: "10" | "25" | "50") => {
    setPageSize(v);
    setCurrentPage(1);
  };

  return (
    <div className={"flex w-full flex-col min-h-screen"}>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold tracking-tight">Leaderboard</h1>
          <p className="mb-5 text-muted-foreground">
            The top users with the most XP across all communities.
          </p>
        </div>

        <Select value={pageSize} onValueChange={handlePageSizeChange}>
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

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold w-[80px]">Rank</TableHead>
            <TableHead className="font-bold">User</TableHead>
            <TableHead className="font-bold text-center w-[180px]">
              Communities
            </TableHead>
            <TableHead className="font-bold text-right">Total XP</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((user) => (
            <TableRow key={user.rank}>
              <TableCell className="tabular-nums">{user.rank}.</TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell className="text-center tabular-nums">
                {user.communities.toLocaleString()}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <span className="tabular-nums">
                    {user.xp.toLocaleString()}
                  </span>
                  {user.trend === "up" && (
                    <ChevronUp className="h-4 w-4 text-green-500" />
                  )}
                  {user.trend === "down" && (
                    <ChevronDown className="h-4 w-4 text-red-500" />
                  )}
                  {user.trend === "neutral" && (
                    <Minus className="text-yellow-500 h-4 w-4" />
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>
              <div className="flex items-center justify-between text-sm">
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
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                  >
                    Next
                  </Button>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
