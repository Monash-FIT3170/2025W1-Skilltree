"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function deleteCommunityAction(communityId: string) {
  const cookieStore = await cookies();

  const response = await fetch(
    `${process.env.API_URL}/skilltree/${communityId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return { ok: false, message: data.message || "Failed to delete community" };
  }

  // Invalidate related pages
  revalidatePath(`/community/${communityId}`);
  revalidatePath("/dashboard");
  revalidatePath("/community");

  return {
    ok: true,
    message: data.message || "Community deleted successfully",
  };
}
