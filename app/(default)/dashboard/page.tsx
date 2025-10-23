import DashboardPageClient from "./page-client";
import { getMySkillTreesAction } from "@/actions/get-my-skilltrees";
import { getEventsAction } from "@/actions/get-events";
import CommonError from "@/components/CommonError";
import { TEvent, TAuthSkillTrees } from "@/types";

export default async function DashboardPage() {
  try {
    const [skillTrees, events] = await Promise.all([
      getMySkillTreesAction(),
      getEventsAction(),
    ]);

    if (!skillTrees.ok) {
      return <CommonError errorDescription="Could not load skill trees" />;
    }
    if (!events.ok) {
      return <CommonError errorDescription="Could not load events" />;
    }

    return (
      <DashboardPageClient
        skilltrees={skillTrees.message as TAuthSkillTrees[]}
        events={events.message as TEvent[]}
      />
    );
  } catch {
    return (
      <CommonError errorDescription="Could not load skill trees or events" />
    );
  }
}
