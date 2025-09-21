import { getUserAction } from "@/actions/get-user-action";
import React from "react";
import UserProfileClient from "./page-client";
import { TUser } from "@/types";

const UserSettingsPage = async () => {
  const user = await getUserAction();

  console.log(user.message);

  return <UserProfileClient user={user.message as TUser} />;
};

export default UserSettingsPage;
