"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export interface CreateCommunityData {
  feedbackText: string;
  multiplier: number;
  postId: string;
}

type CreateVerification = {
  ok: boolean;
  message?: {
    verifierId: string;
    postId: string;
    feedbackText: string;
    multiplier: number;
  };
  status?: number;
};

export async function createVerificationAction({
  feedbackText,
  multiplier,
  postId,
}: CreateCommunityData) {
  const cookieStore = await cookies();

  const response = await fetch(
    `${process.env.API_URL}/verification/${postId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
      },
      body: JSON.stringify({ feedbackText, multiplier }),
    }
  );

  const json = await response.json();
  if (!json.ok) {
    throw new Error(json.message || "Something went wrong");
  }

  const responseData = json as CreateVerification;

  revalidatePath("/community/[id]");
  return responseData;
}
