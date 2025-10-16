"use server";

import { cookies } from "next/headers";
import { APIResponse, TAuthSkillTree } from "@/types";

export async function getCommunitiesAction(query?: string) {
  const cookieStore = await cookies();

  const url = new URL(`${process.env.API_URL}/skilltree/auth/all`);
  if (query) url.searchParams.set("q", query);

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
    },
  });
  const data = (await response.json()) as APIResponse<TAuthSkillTree[]>;

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  const message = data.message as TAuthSkillTree[];

  return { ok: true, message };
}
