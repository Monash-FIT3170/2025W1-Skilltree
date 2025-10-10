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

  try {
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

    if (!response.ok) {
      let errorMessage = "Something went wrong";
      try {
        const text = await response.text();
        if (text) {
          const errorData = JSON.parse(text);
          errorMessage = errorData.message || errorMessage;
        }
      } catch {
        throw new Error(errorMessage);
      }
      return { ok: false, message: errorMessage };
    }

    const responseData = (await response.json()) as CreateVerification;
    console.log(responseData);

    revalidatePath("/community/[id]", "page");

    return responseData;
  } catch (error) {
    console.error("Error creating community:", error);
    return {
      ok: false,
      message: "Failed to create community. Please try again.",
    };
  }
}
