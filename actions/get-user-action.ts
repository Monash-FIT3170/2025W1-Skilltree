"use server";

import { cookies } from "next/headers";
import { APIResponse, TPublicUser } from "@/types";
import { TGetUserProfileResponse } from "./types";

export async function getUserAction() {
  const cookieStore = await cookies();

  const response = await fetch(`${process.env.API_URL}/auth/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
    },
  });
  const data = (await response.json()) as APIResponse<TGetUserProfileResponse>;

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  const message = data.message as TGetUserProfileResponse;

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

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  const message = data.message as TPublicUser;

  return { ok: true, message };
};
