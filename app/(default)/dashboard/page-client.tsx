"use client";
import React from "react";
import { joinEventAction } from "@/actions/join-event-action";
import { leaveEventAction } from "@/actions/leave-event-action";
import { toast } from "sonner";
import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  MessageSquare,
  GitGraphIcon,
  UserIcon,
  Clock1,
  Clock12,
  Clock6,
  Plus,
  Timer,
  AlertCircle,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import { TSkillTrees } from "@/actions/get-my-skilltrees";
import { TEvents } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardPageClient = ({
  skilltrees,
  events,
}: {
  skilltrees: TSkillTrees[];
  events: TEvents[];
}) => {
  const columnHeight = "calc(100vh-6.5rem)";
  const router = useRouter();
  const [joinedEvents, setJoinedEvents] = React.useState<string[]>([]);

  const handleJoinEvent = async (eventId: string) => {
    const alreadyJoined = joinedEvents.includes(eventId);

    const result = alreadyJoined
      ? await leaveEventAction(eventId)
      : await joinEventAction(eventId);

    if (result.ok) {
      setJoinedEvents((prev) =>
        alreadyJoined ? prev.filter((id) => id !== eventId) : [...prev, eventId]
      );
      toast.success(alreadyJoined ? "Left event" : "Joined event!");
    } else {
      toast.error(result.message || "Something went wrong");
    }
  };

  const handleAddEvent = () => {
    console.log("Adding new event");
  };

  const getTimeRemaining = (endDate: string) => {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end.getTime() - now.getTime();

    if (diff <= 0) return "Ended";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (days > 0) return `${days}d left`;
    if (hours > 0) return `${hours}h left`;
    return "< 1h left";
  };

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
        className={`h-full max-h-[${columnHeight}] w-full flex flex-col`}
      >
        <h2 className="mb-4 w-full flex items-center justify-center relative text-lg font-semibold">
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
            events.map((ev) => {
              return (
                <Card key={ev.id} className="rounded-xl">
                  <CardContent className="flex flex-col gap-2 p-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-semibold">{ev.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {ev.xpPayout ? ev.xpPayout : 0} XP
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <Timer className="w-3 h-3" />
                        <span>{getTimeRemaining(ev.endDate)}</span>
                      </div>
                    </div>
                    <div className="shrink-0 self-start sm:self-center">
                      {(ev as any).userRank ? (
                        <Badge className="bg-blue-100 text-blue-700">
                          Rank #{(ev as any).userRank}
                        </Badge>
                      ) : (
                        <Button
                          size="sm"
                          variant={joinedEvents.includes(ev.id) ? "destructive" : "default"}
                          onClick={() => handleJoinEvent(ev.id)}
                          className="h-7 px-3 text-xs"
                        >
                          {joinedEvents.includes(ev.id) ? "Leave" : "Join"}
                        </Button>
                      )}
                    </div>
                  </CardContent>
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
