"use server";

import { cookies } from "next/headers";
import { APIResponse, TSkillTree } from "@/types";

export async function getCommunitiesAction() {
  const cookieStore = await cookies();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/skilltree/auth/all`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
      },
    }
  );
  const data = (await response.json()) as APIResponse<TSkillTree[]>;

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  const message = data.message as TSkillTree[];

  return { ok: true, message };
}
