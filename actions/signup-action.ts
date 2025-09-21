"use server";

import { cookies } from "next/headers";
import { TSignUpResponse } from "./types";
import { APIResponse } from "@/types";
import { revalidatePath } from "next/cache";

export async function signUpAction(form: {
  name: string;
  dateOfBirth: Date;
  email: string;
  password: string;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }
  );
  const data = (await response.json()) as APIResponse<TSignUpResponse>;

  if (!response.ok) {
    return { ok: false, message: data.message || "Something went wrong" };
  }

  const signUpData = data.message as TSignUpResponse;

  const cookieStore = await cookies();
  cookieStore.set("access_token", signUpData.access_token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  revalidatePath("/(default)", "layout");

  return { ok: true, message: signUpData };
}
