import { getCommunitiesAction } from "@/actions/get-communities-action";
import CommunitiesPageClient from "../discover/page-client";
import { TAuthSkillTree } from "@/types";
import CommonError from "@/components/CommonError";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  try {
    const q = typeof searchParams?.q === "string" ? searchParams.q : undefined;
    const communities = await getCommunitiesAction(q);

    if (!communities.ok) {
      return <CommonError errorDescription="Could not load communities" />;
    }

    let results = communities.message as TAuthSkillTree[];
    if (q) {
      const lowerQ = q.toLowerCase();
      results = results.filter((c) => c.name.toLowerCase().includes(lowerQ));
      // dedupe by name
      const seen = new Set<string>();
      results = results.filter((c) => {
        if (seen.has(c.name)) return false;
        seen.add(c.name);
        return true;
      });
    }

    return (
      <CommunitiesPageClient
        communities={results}
        title={`Search results for "${q || ""}"`}
      />
    );
  } catch (error) {
    return <CommonError errorDescription="Could not load communities" />;
  }
}
