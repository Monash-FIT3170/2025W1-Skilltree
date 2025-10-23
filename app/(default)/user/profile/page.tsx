import { getUserAction } from "@/actions/get-user-action";
import React from "react";
import UserProfileClient from "./page-client";
import { TUser } from "@/types";
import CommonError from "@/components/CommonError";

const UserSettingsPage = async () => {
  try {
    const user = await getUserAction();

    if (!user.ok) {
      return <CommonError errorDescription="Could not load user profile" />;
    }

    return <UserProfileClient user={user.message as TUser} />;
  } catch {
    return <CommonError errorDescription="Could not load user profile" />;
  }
};

export default UserSettingsPage;
