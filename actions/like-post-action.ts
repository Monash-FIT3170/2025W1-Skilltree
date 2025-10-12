"use server";
import { cookies } from "next/headers";

export async function likePostAction(postId: string) {
  const cookieStore = await cookies();
  const response = await fetch(`${process.env.API_URL}/post/${postId}/like`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
    },
  });
  const data = await response.json();
  return { ok: response.ok, ...data };
}