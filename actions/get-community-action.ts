"use server";

import { cookies } from "next/headers";
import { APIResponse } from "@/actions/types";

export async function getCommunityAction(id: string) {
  const cookieStore = await cookies();

  const response = await fetch(`${process.env.API_URL}/skilltree/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
    },
  });
  const data = (await response.json()) as APIResponse<TAuthSkillTree>;

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }
  return data as APIResponse<TAuthSkillTree>;
}

import type { TAuthSkillTree } from "@/actions/types";
