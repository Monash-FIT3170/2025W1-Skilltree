import { getUserByIdAction } from "@/actions/get-user-action";
import UserProfileClient from "./page-client";
import { TPublicUser } from "@/types";
import CommonError from "@/components/CommonError";
import { getFollowerFollowing } from "@/actions/get-followers-following";

const UserSettingsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  try {
    const user = await getUserByIdAction(id);

    if (!user.ok) {
      return <CommonError errorDescription="Could not load user profile" />;
    }

    return <UserProfileClient user={user.message as TPublicUser} />;
  } catch {
    return <CommonError errorDescription="Could not load user profile" />;
  }
};

export default UserSettingsPage;
