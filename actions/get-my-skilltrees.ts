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

  return skilltreeJson as APIResponse<TAuthSkillTrees[]>;
};

import type { TAuthSkillTrees } from "@/types";
