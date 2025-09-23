"use server";

import { cookies } from "next/headers";
import { APIResponse } from "@/types";
import { TSignInResponse } from "./types";

export async function signInAction(form: { email: string; password: string }) {
  const response = await fetch(`${process.env.API_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  const data = (await response.json()) as APIResponse<TSignInResponse>;

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  const message = data.message as TSignInResponse;
  const cookieStore = await cookies();
  cookieStore.set("access_token", message.access_token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  return { ok: true, message: data.message };
}
