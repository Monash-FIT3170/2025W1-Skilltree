import { getCommunitiesAction } from "@/actions/get-communities-action";
import CommunitiesPageClient from "./page-client";
import { TAuthSkillTree } from "@/types";
import CommonError from "@/components/CommonError";

export default async function CommunitiesPage() {
  try {
    const communities = await getCommunitiesAction();

    if (!communities.ok) {
      return <CommonError errorDescription="Could not load communities" />;
    }

    return (
      <CommunitiesPageClient
        communities={communities.message as TAuthSkillTree[]}
      />
    );
  } catch (error) {
    return <CommonError errorDescription="Could not load communities" />;
  }
}
