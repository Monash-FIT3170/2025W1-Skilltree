import {
  getCommunityMembersAction,
  TAuthSkillTreeMember,
} from "@/actions/get-community-members";
import CommunityMembersClient from "./page-client";
import {
  getCommunityAction,
  TAuthSkillTree,
} from "@/actions/get-community-action";
import CommonError from "@/components/CommonError";

export default async function ViewMembers({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const [members, community] = await Promise.all([
      getCommunityMembersAction(id),
      getCommunityAction(id),
    ]);

    if (!community.ok) {
      return <CommonError errorDescription="Community not found" />;
    }
    if (!members.ok) {
      return <CommonError errorDescription="Members not found" />;
    }

    return (
      <CommunityMembersClient
        id={id}
        community={community.message as TAuthSkillTree}
        members={members.message as TAuthSkillTreeMember[]}
      />
    );
  } catch (error) {
    return (
      <CommonError errorDescription="Could not load community or members" />
    );
  }
}
