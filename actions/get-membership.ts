"use server";

import { cookies } from "next/headers";
import { APIResponse } from "@/types";
import { revalidatePath } from "next/cache";

export async function getMembership(skillTreeId: string) {
  const cookieStore = await cookies();

  const response = await fetch(
    `${process.env.API_URL}/skilltree/membership/${skillTreeId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
      },
    }
  );

  const data = (await response.json()) as APIResponse<{
    member: boolean;
    admin: boolean;
  }>;

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  revalidatePath(`/community/${skillTreeId}`, "page");
  return data as APIResponse<{
    member: boolean;
    admin: boolean;
  }>;
}

import type { TAuthSkillTreeMember } from "@/types";
