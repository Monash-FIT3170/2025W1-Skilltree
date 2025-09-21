"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function joinSkillTreeAction(id: string) {
  const cookieStore = await cookies();

  const response = await fetch(`${process.env.API_URL}/skilltree/${id}/join`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
    },
  });
  const data = await response.json();

  revalidatePath(`/community/${id}`);
  revalidatePath("/dashboard");
  revalidatePath(`/community/${id}/members`);

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }
  return { ok: true, message: data.message, status: response.status };
}
