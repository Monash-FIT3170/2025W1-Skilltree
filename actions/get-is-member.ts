"use server";

import { cookies } from "next/headers";
import { APIResponse } from "@/types";
import { revalidatePath } from "next/cache";

export async function getIsMember(skillTreeId: string) {
  const cookieStore = await cookies();

  const response = await fetch(
    `${process.env.API_URL}/skilltree/is-member/${skillTreeId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
      },
    }
  );

  const data = (await response.json()) as APIResponse<boolean>;

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  revalidatePath(`/community/${skillTreeId}`, "page");
  return data as APIResponse<boolean>;
}

export type TSkillTreeMember = {
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
