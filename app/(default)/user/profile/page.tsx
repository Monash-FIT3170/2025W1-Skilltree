import { getUserAction } from "@/actions/get-user-action";
import React from "react";
import UserProfileClient from "./page-client";
import { TFollowerFollowingResponse, TUser } from "@/types";
import CommonError from "@/components/CommonError";
import { getFollowerFollowing } from "@/actions/get-followers-following";
import { getUserStatsAction } from "@/actions/get-user-communities";

const UserSettingsPage = async () => {
  try {
    const user = await getUserAction();
    const followerFollowing = await getFollowerFollowing(user.message.id);
    const userStats = await getUserStatsAction();

    if (!user.ok) {
      return <CommonError errorDescription="Could not load user profile" />;
    }

    return (
      <UserProfileClient
        followers={
          (followerFollowing.message as TFollowerFollowingResponse).followers
        }
        ownedSkilltrees={userStats.message.skillTreesCreated}
        joinedSkilltrees={userStats.message.skillTreesJoined}
        user={user.message as TUser}
      />
    );
  } catch {
    return <CommonError errorDescription="Could not load user profile" />;
  }
};

export default UserSettingsPage;
