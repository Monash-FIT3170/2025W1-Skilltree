import { getUserAction } from "@/actions/get-user-action";
import React from "react";
import UserProfileClient from "./page-client";
import { TUser } from "@/types";

const UserSettingsPage = async () => {
  const user = await getUserAction();

  // If you have actions for completed/joined/owned, pass them in here:
  // const { completed, joined, owned } = await getUserCommunitiesAction(userId);

  return (
    <UserProfileClient
      user={user.message as TUser}
      // completedSkilltrees={completed}
      // joinedSkilltrees={joined}
      // ownedSkilltrees={owned}
    />
  );
};

export default UserSettingsPage;
