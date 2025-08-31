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
import { Users, MessageSquare } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TEventResponse, TSkillTreeResponse } from "./types";
import { useRouter } from "next/navigation";

const DashboardPageClient = ({
  response,
  events,
}: {
  response: TSkillTreeResponse;
  events: TEventResponse;
}) => {
  const columnHeight = "calc(100vh-6.5rem)";
  const router = useRouter();

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
            {response.message.length} total
          </span>
        </header>
        <div className="flex-1 pr-2 overflow-y-auto">
          {response.message.length === 0 ? (
            <div>Woah. Such empty.</div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {response.message.map((skillTree: TSkillTrees) => {
                const tree: TSkillTree = skillTree.skillTree;

                return (
                  <Card
                    onClick={() => router.push(`/community/${tree.id}`)}
                    key={tree.id}
                  >
                    <CardHeader className="!flex items-center gap-2">
                      <CardTitle>{tree.name}</CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="w-full text-sm whitespace-pre-wrap text-muted-foreground line-clamp-3">
                        {tree.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center justify-between w-full gap-4 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {Math.round(
                            Math.random() * 900 + 1000
                          ).toLocaleString()}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
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
            {events.message.length} total
          </span>
        </header>
        <div className="flex flex-col gap-5">
          {" "}
          {events.message.map((ev) => {
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
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
    // <pre>{JSON.stringify(response, null, 4)}</pre>
  );
};

export default DashboardPageClient;
