"use server";

import { cookies } from "next/headers";
import { APIResponse, TPublicUser } from "@/types";
import { TGetUserStatsResponse } from "./types";

export async function getUserStatsAction() {
  const cookieStore = await cookies();

  const response = await fetch(`${process.env.API_URL}/user/stats/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
    },
  });
  const data = (await response.json()) as APIResponse<TGetUserStatsResponse>;

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  const message = data.message as TGetUserStatsResponse;

  return { ok: true, message };
}

export const getUserByIdAction = async (id: string) => {
  const cookieStore = await cookies();
  const response = await fetch(`${process.env.API_URL}/user/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
    },
  });
  const data = (await response.json()) as APIResponse<TPublicUser>;

  console.log("get-user-action", data.message);

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  const message = data.message as TPublicUser;

  return { ok: true, message };
};
