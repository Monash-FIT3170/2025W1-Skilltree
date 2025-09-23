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
  const data = (await response.json()) as APIResponse<TSkillNode[]>;

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  const message = data.message as TSkillNode[];

  return { ok: true, message };
}

export type TSkillNode = {
  id: string;
  content: string;
  proofMedia: string | null;
  createdAt: string;
  updatedAt: string;
  creator: {
    id: string;
    name: string;
    email: string;
  };
  tags: Array<{
    id: string;
    name: string;
    isRestricted: boolean;
    restrictionDescription: string | null;
  }>;
  skillNode: {
    id: string;
    name: string;
    skillTree: {
      id: string;
      name: string;
    };
  };
  likes: Array<{
    id: string;
    name: string;
  }>;
  feedback: Array<{
    verifierId: string;
    postId: string;
    feedbackText: string;
    multiplier: number;
    verifier: {
      id: string;
      name: string;
    };
  }>;
  _count: {
    likes: number;
    feedback: number;
  };
};
