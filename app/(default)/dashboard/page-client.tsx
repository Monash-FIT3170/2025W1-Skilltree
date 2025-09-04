"use client";

import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  MessageSquare,
  GitGraphIcon,
  UserIcon,
  Clock1,
  Clock12,
  Clock6,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import { TSkillTree } from "@/types";
import { TSkillTrees } from "@/actions/get-my-skilltrees";

const DashboardPageClient = ({
  skilltrees,
  events,
}: {
  skilltrees: TSkillTrees[];
  events: TEvents[];
}) => {
  const columnHeight = "calc(100vh-6.5rem)";
  const router = useRouter();

  return (
    <div
      className={`w-full h-full mt-0 grid gap-6 p lg:grid-cols-[minmax(0,1fr)_1px_360px]`}
    >
      <ScrollArea
        className={`!w-full flex-1 h-full max-h-[${columnHeight}] flex flex-col pr-5`}
      >
        <header className="flex flex-col items-baseline justify-between pb-5">
          <h2 className="text-2xl font-bold tracking-tight">
            Subscribed Communities
          </h2>
          <span className="text-sm text-muted-foreground">
            {skilltrees.length} total
          </span>
        </header>
        <div className="flex-1 w-full pr-2 overflow-y-auto ">
          {skilltrees.length === 0 ? (
            <div>Woah. Such empty.</div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {skilltrees.map((tree: TSkillTrees) => {
                return (
                  <Card
                    className="transition-colors cursor-pointer hover:bg-primary/10"
                    onClick={() =>
                      router.push(`/community/${tree.skillTree.id}`)
                    }
                    key={tree.skillTree.id}
                  >
                    <CardHeader className="!flex items-center gap-2">
                      <CardTitle>{tree.skillTree.name}</CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="w-full text-sm whitespace-pre-wrap text-muted-foreground line-clamp-3">
                        {tree.skillTree.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center justify-between w-full gap-4 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <GitGraphIcon className="w-4 h-4" />
                          {tree.skillTree._count.skillNodes}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <UserIcon className="w-4 h-4" />
                          {tree.skillTree._count.skillTreeUser}
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
          {skilltrees.length === 0 ? (
            <div>Woah. Such empty.</div>
          ) : (
            events.map((ev) => {
              return (
                <Card
                  key={ev.id}
                  className="w-full transition border rounded-lg hover:bg-accent/40"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {ev.title}
                      <Badge variant={ev.isRanked ? "default" : "destructive"}>
                        {ev.isRanked ? "Ranked" : "Unranked"}
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      {ev.xpPayout ? ev.xpPayout : 0} XP
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mt-1 text-sm w-fit text-muted-foreground line-clamp-2">
                      {ev.title}
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between w-full text-xs text-muted-foreground">
                    <div className="inline-flex items-center gap-2">
                      <Clock12 />
                      {new Date(ev.startDate).toLocaleDateString("en-AU")}
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Clock6 />
                      {new Date(ev.endDate).toLocaleDateString("en-AU")}
                    </div>
                  </CardFooter>
                </Card>
              );
            })
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default DashboardPageClient;
