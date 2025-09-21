"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function leaveSkillTreeAction(id: string) {
  const cookieStore = await cookies();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/skilltree/${id}/leave`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
      },
    }
  );
  const data = await response.json();

  revalidatePath(`/community/${id}`);
  revalidatePath("/dashboard");
  revalidatePath(`/community/${id}/members`);

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  return { ok: true, message: data.message, status: response.status };
}
