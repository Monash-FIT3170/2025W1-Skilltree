"use server";

import { cookies } from "next/headers";
import { APIResponse } from "@/types";

export async function getCommunityMembersAction(id: string) {
  const cookieStore = await cookies();

  const response = await fetch(
    `${process.env.API_URL}/skilltree/${id}/members`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
      },
    }
  );

  const data = (await response.json()) as APIResponse<TAuthSkillTreeMember[]>;

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }
  return data as APIResponse<TAuthSkillTreeMember[]>;
}

export type TAuthSkillTreeMember = {
  skillTreeId: string;
  role: "ADMIN" | "MEMBER";
  verificationStatus: "PENDING" | "VERIFIED";
  user: {
    id: string;
    name: string;
    email: string;
    xpPoint: number;
  };
};
