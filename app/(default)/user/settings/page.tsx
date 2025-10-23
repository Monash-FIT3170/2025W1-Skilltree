import { getUserAction } from "@/actions/get-user-action";
import React from "react";
import UserSettingsClient from "./page-client";
import { TUser } from "@/types";
import CommonError from "@/components/CommonError";

const UserSettingsPage = async () => {
  try {
    const user = await getUserAction();
    if (!user.ok) {
      return <CommonError errorDescription="Could not load user profile" />;
    }

    return <UserSettingsClient user={user.message as TUser} />;
  } catch {
    return <CommonError errorDescription="Could not load user profile" />;
  }
};

export default UserSettingsPage;
