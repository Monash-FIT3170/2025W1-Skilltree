import { cookies } from "next/headers";
import DashboardPageClient from "./page-client";
import { TEventResponse, TSkillTreeResponse } from "./types";

export default async function DashboardPage() {
  const cookieStore = await cookies();

  console.log(cookieStore.get("access_token")?.value);

  const skilltreeResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/skilltree/user/my-skilltrees`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
      },
    }
  );
  const skilltreeJson = (await skilltreeResponse.json()) as TSkillTreeResponse;

  const eventResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/event`,
    {
      method: "GET",
    }
  );
  const eventJson = (await eventResponse.json()) as TEventResponse;

  console.log(eventJson);

  return <DashboardPageClient response={skilltreeJson} events={eventJson} />;
}

// function EmptyState() {
//   return (
//     <div className="py-10 text-center">
//       <p className="mb-3 text-sm text-muted-foreground">
//         You haven’t joined any communities yet.
//       </p>
//       <Button asChild>
//         <Link href="/communities">Discover communities</Link>
//       </Button>
//     </div>
//   );
// }
