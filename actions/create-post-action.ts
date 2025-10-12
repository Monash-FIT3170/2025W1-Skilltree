"use server";

import { cookies } from "next/headers";

export type CreatePostPayload = {
  skillNodeId: string;
  title: string;
  content: string;
  proofMedia?: string | null; // base64 data URL string
  tags?: string[]; // optional tags by name
};

export async function createPostAction(payload: CreatePostPayload) {
  const cookieStore = await cookies();

  try {
    const response = await fetch(`${process.env.API_URL}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    if (!response.ok) {
      return {
        ok: false as const,
        status: response.status,
        message: data?.message || "Failed to create post",
      };
    }

    return {
      ok: true as const,
      status: response.status,
      message: data?.message ?? "Post created",
      data,
    };
  } catch (error) {
    console.error("createPostAction error", error);
    return {
      ok: false as const,
      status: 500,
      message: "Unexpected error while creating post",
    };
  }
}
