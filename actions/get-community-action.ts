"use server";

import { cookies } from "next/headers";
import { APIResponse } from "@/types";

export async function getCommunityAction(id: string) {
  const cookieStore = await cookies();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/skilltree/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
      },
    }
  );
  const data = (await response.json()) as APIResponse<TSkillTree>;

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }
  return data as APIResponse<TSkillTree>;
}

export type TSkillTree = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  creator: TCreator;
  tags: TTag[];
  skillNodes: TSkillNode[];
  skillTreeUser: TSkillTreeUser[];
};

type TSkillTreeUser = {
  role: "ADMIN" | "MEMBER";
  verificationStatus: "VERIFIED" | "PENDING";
  user: TUser;
};

type TUser = {
  id: string;
  name: string;
};

type TCreator = {
  id: string;
  name: string;
  email: string;
};

type TTag = {
  id: string;
  name: string;
  isRestricted: boolean;
  restrictionDescription: string;
  createdAt: string;
  updatedAt: string;
};

type TSkillNode = {
  id: string;
  name: string;
  description: string;
  xpPoint: number;
  skillTreeId: string;
  parentNode: TNestedNode | null;
  childNode: TNestedNode[];
};

type TNestedNode = {
  id: string;
  name: string;
};
