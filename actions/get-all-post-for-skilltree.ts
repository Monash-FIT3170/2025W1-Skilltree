"use server";

import { cookies } from "next/headers";
import { APIResponse } from "@/types";

export async function getAllPostsForSkillTree(id: string) {
  const cookieStore = await cookies();

  const response = await fetch(`${process.env.API_URL}/post/skilltree/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
    },
  });
  const data = (await response.json()) as APIResponse<TPost[]>;

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  const message = data.message as TPost[];

  return { ok: true, message };
}

import type { TPost } from "@/types";
