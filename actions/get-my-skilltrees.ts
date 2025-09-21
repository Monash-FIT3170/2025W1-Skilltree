"use server";

import { APIResponse } from "@/types";
import { cookies } from "next/headers";

export const getMySkillTreesAction = async () => {
  const cookieStore = await cookies();

  const skilltreeResponse = await fetch(
    `${process.env.API_URL}/skilltree/user/my-skilltrees`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
      },
    }
  );
  const skilltreeJson = await skilltreeResponse.json();

  return skilltreeJson as APIResponse<TSkillTrees[]>;
};

export type TSkillTrees = {
  skillTreeId: string;
  userId: string;
  role: string;
  verificationStatus: string;
  skillTree: TSkillTree;
};

type TSkillTree = {
  id: string;
  name: string;
  description: string;
  creatorId: string;
  createdAt: string;
  updatedAt: string;
  creator: TCreator;
  tags: TTag[];
  skillNodes: TSkillNode[];
  _count: {
    skillNodes: number;
    skillTreeUser: number;
  };
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
};
