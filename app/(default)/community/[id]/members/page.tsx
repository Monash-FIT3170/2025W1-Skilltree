import {
  getCommunityMembersAction,
  TSkillTreeMember,
} from "@/actions/get-community-members";
import CommunityMembersClient from "./page-client";
import { getCommunityAction, TSkillTree } from "@/actions/get-community-action";

export default async function ViewMembers({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const members = await getCommunityMembersAction(id);
  const community = await getCommunityAction(id);

  return (
    <CommunityMembersClient
      id={id}
      community={community.message as TSkillTree}
      members={members.message as TSkillTreeMember[]}
    />
  );
}
