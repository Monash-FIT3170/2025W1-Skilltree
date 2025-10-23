"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function followUser(id: string) {
  const cookieStore = await cookies();

  const response = await fetch(`${process.env.API_URL}/user/${id}/follow`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
    },
  });
  const data = await response.json();

  revalidatePath(`/profile/${cookieStore.get("user_id")}`, "page");
  revalidatePath(`/profile/${id}`, "page");

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  return { ok: true, message: data.message, status: response.status };
}

export async function unfollowUser(id: string) {
  const cookieStore = await cookies();

  const response = await fetch(`${process.env.API_URL}/user/${id}/unfollow`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
    },
  });
  const data = await response.json();

  revalidatePath(`/profile/${cookieStore.get("user_id")}`, "page");
  revalidatePath(`/profile/${id}`, "page");

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  return { ok: true, message: data.message, status: response.status };
}
