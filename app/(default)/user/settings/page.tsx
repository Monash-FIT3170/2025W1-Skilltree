import { getUserAction } from "@/actions/get-user-action";
import React from "react";
import UserSettingsClient from "./page-client";
import { TUser } from "@/types";

const UserSettingsPage = async () => {
  const user = await getUserAction();

  return <UserSettingsClient user={user.message as TUser} />;
};

export default UserSettingsPage;
