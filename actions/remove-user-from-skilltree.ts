"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function removeUserFromSkillTree(
  skillTreeId: string,
  userId: string
) {
  const cookieStore = await cookies();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/skilltree/${skillTreeId}/members/${userId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  const message = data.message as string;
  revalidatePath(`/community/[id]`);

  return { ok: true, message };
}
