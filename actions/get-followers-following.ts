"use server";

import { cookies } from "next/headers";
import {
  APIResponse,
  TAuthSkillTree,
  TFollowerFollowingResponse,
} from "@/types";

export async function getFollowerFollowing(userId: string) {
  const cookieStore = await cookies();

  const followingUrl = new URL(
    `${process.env.API_URL}/user/${userId}/following`
  );
  const followersUrl = new URL(
    `${process.env.API_URL}/user/${userId}/followers`
  );

  const followingResponse = await fetch(followingUrl.toString(), {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
    },
  });
  const followingData = (await followingResponse.json()) as APIResponse<
    {
      id: string;
      name: string;
      dateOfBirth: Date;
      pfp: string;
      xpPoint: number;
      createdAt: Date;
      updatedAt: Date;
    }[]
  >;

  const followersResponse = await fetch(followersUrl.toString(), {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
    },
  });
  const followersData = (await followersResponse.json()) as APIResponse<
    {
      id: string;
      name: string;
      dateOfBirth: Date;
      pfp: string;
      xpPoint: number;
      createdAt: Date;
      updatedAt: Date;
    }[]
  >;

  if (!followingResponse.ok) {
    return {
      ok: false,
      message: `Error fetching following: ${followingData.message}`,
    };
  }

  if (!followersResponse.ok) {
    return {
      ok: false,
      message: `Error fetching followers: ${followersData.message}`,
    };
  }

  const data = {
    followers: followersData.message,
    following: followingData.message,
  };

  return {
    ok: true,
    message: data,
  };
}
