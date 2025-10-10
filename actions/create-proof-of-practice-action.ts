"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export interface CreateCommunityData {
  content: string;
  proofMedia: string;
  skillNodeId: string;
}

type CreateProofOfPracticeResponse = {
  ok: boolean;
  message?: {
    id: string;
    content: string;
    proofMedia: string;
    skillNodeId: string;
    createdAt: string;
    updatedAt: string;
    skillNode: {
      id: string;
      name: string;
      skillTree: {
        id: string;
        name: string;
      };
    };
    _count: {
      likes: number;
      feedback: number;
    };
  };
  status?: number;
};

export async function createProofOfPracticeAction({
  content,
  proofMedia,
  skillNodeId,
}: {
  content: string;
  proofMedia: string;
  skillNodeId: string;
}) {
  const cookieStore = await cookies();

  try {
    const response = await fetch(`${process.env.API_URL}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
      },
      body: JSON.stringify({ content, proofMedia, skillNodeId }),
    });

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

    const responseData =
      (await response.json()) as CreateProofOfPracticeResponse;
    console.log(responseData);

    revalidatePath(
      `/community/${responseData.message?.skillNode.skillTree.id}`,
      "page"
    );
    revalidatePath("/community/[id]", "page");

    return responseData;
  } catch (error) {
    console.error("Error creating proof of practice:", error);
    return {
      ok: false,
      message: "Failed to create proof of practice. Please try again.",
    };
  }
}
