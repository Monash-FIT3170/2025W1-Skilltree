"use client";

import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { GitGraphIcon, UserIcon, Timer, AlertCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import { TEvent, TAuthSkillTrees } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import EventCard from "@/components/shared/EventCard";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const DashboardPageClient = ({
  skilltrees,
  events,
}: {
  skilltrees: TAuthSkillTrees[];
  events: TEvent[];
}) => {
  const columnHeight = "calc(100vh-6.5rem)";
  const router = useRouter();
  const isMobile = useIsMobile();

  return (
    <div
      className={`w-full h-full mt-0 grid gap-6 p md:grid-cols-[minmax(0,1fr)_1px_360px]`}
    >
      <ScrollArea
        className={cn(`!w-full flex-1 h-full flex flex-col`, isMobile ? "max-h-full" : `max-h-[${columnHeight}]`)}
      >
        <header className="flex flex-col items-baseline justify-between pb-5">
          <h2 className="font-bold tracking-tight">
            Subscribed Communities
          </h2>
        </header>
        <div className="flex-1 w-full overflow-y-auto ">
          {skilltrees.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full flex flex-col items-center justify-center">
                <Card className="flex flex-col gap-2 items-center justify-center w-full h-80">
                  <AlertCircle className="w-12 h-12 mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    You are not subscribed to any communities yet. Explore and
                    join some!
                  </p>
                </Card>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {skilltrees.map((tree: TAuthSkillTrees) => {
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
                          {tree.skillTree._count!.skillNodes}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <UserIcon className="w-4 h-4" />
                          {tree.skillTree._count!.skillTreeUser}
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

      <div className="hidden md:block bg-border h-[${calc(100vh-6.5rem)}]" />

      <ScrollArea
        className={cn(`h-full w-full flex flex-col`, isMobile ? "max-h-full" : `max-h-[${columnHeight}]`)}
      >
        <h2 className="mb-4 w-full flex items-center justify-center relative font-semibold">
          <span>Upcoming Events</span>
        </h2>

        <div className="flex flex-col gap-3">
          {events.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center">
              <Skeleton className="flex flex-col gap-2 items-center justify-center w-full h-80">
                <AlertCircle className="w-12 h-12 mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">
                  No upcoming events. Check back later!
                </p>
              </Skeleton>
            </div>
          ) : (
            events.map((ev: TEvent) => {
              return (
                <EventCard key={ev.id} ev={ev} />
              );
            })
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default DashboardPageClient;
