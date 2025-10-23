import CommunitiesPageClient from "./page-client";
import type { TAuthSkillTree } from "@/types";
import CommonError from "@/components/CommonError";
import { getCommunityByMembershipAction } from "@/actions/get-community-by-membership";

export default async function CommunitiesPage() {
  try {
    const communities = await getCommunityByMembershipAction();

    if (!communities.ok) {
      return <CommonError errorDescription="Could not load communities" />;
    }

    return (
      <CommunitiesPageClient
        communities={communities.message as TAuthSkillTree[]}
      />
    );
  } catch {
    return <CommonError errorDescription="Could not load communities" />;
  }
}
