import { getCommunityAction, TSkillTree } from "@/actions/get-community-action";
import ViewCommunityClient from "./page-client";
import {
  getAllPostsForSkillTree,
  TSkillNode,
} from "@/actions/get-all-post-for-skilltree";

export default async function ViewCommunity({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [community, posts] = await Promise.all([
    getCommunityAction(id),
    getAllPostsForSkillTree(id),
  ]);

  return (
    <ViewCommunityClient
      community={community.message as TSkillTree}
      posts={posts.message as TSkillNode[]}
    />
  );
}
