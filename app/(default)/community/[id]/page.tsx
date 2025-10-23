import { getCommunityAction } from "@/actions/get-community-action";
import ViewCommunityClient from "./page-client";
import { getAllPostsForSkillTree } from "@/actions/get-all-post-for-skilltree";
import CommonError from "@/components/CommonError";
import { TAuthSkillTree, TPost } from "@/types";

export default async function ViewCommunity({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const [community, posts] = await Promise.all([
      getCommunityAction(id),
      getAllPostsForSkillTree(id),
    ]);

    if (!community.ok) {
      return <CommonError errorDescription="Community not found" />;
    }
    if (!posts.ok) {
      return <CommonError errorDescription="Posts not found" />;
    }

    return (
      <ViewCommunityClient
        community={community.message as TAuthSkillTree}
        posts={posts.message as TPost[]}
      />
    );
  } catch (error) {
    return <CommonError errorDescription="Could not load community or posts" />;
  }
}
