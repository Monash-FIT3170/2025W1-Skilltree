"use server";

import { cookies } from "next/headers";
import { APIResponse } from "@/types";
import { TGetUserProfileResponse } from "./types";
import { revalidatePath } from "next/cache";

export async function updateUserAction({
  name,
  pfp,
}: {
  name: string;
  pfp: string;
}) {
  const cookieStore = await cookies();

  const response = await fetch(`${process.env.API_URL}/user/profile`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      pfp,
    }),
  });
  const data = (await response.json()) as APIResponse<TGetUserProfileResponse>;

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  revalidatePath("/user/settings", "page");
  revalidatePath("/(default)", "layout");
  revalidatePath("/auth", "layout");

  const message = data.message as TGetUserProfileResponse;

  return { ok: true, message };
}
