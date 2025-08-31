import { getCommunitiesAction } from "@/actions/get-communities-action";
import CommunitiesPageClient from "./page-client";
import { TSkillTree } from "@/types";

export default async function CommunitiesPage() {
  const communities = await getCommunitiesAction();

  return (
    <CommunitiesPageClient communities={communities.message as TSkillTree[]} />
  );
}
