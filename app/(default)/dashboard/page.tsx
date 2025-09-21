import DashboardPageClient from "./page-client";
import { getMySkillTreesAction } from "@/actions/get-my-skilltrees";
import { getEventsAction } from "@/actions/get-events";

export default async function DashboardPage() {
  const [skillTrees, events] = await Promise.all([
    getMySkillTreesAction(),
    getEventsAction(),
  ]);

  return <DashboardPageClient skilltrees={skillTrees} events={events} />;
}
