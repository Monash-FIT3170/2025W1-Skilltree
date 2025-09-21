"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export interface CreateCommunityData {
  name: string;
  description: string;
  tags: string[];
  pfp: File;
}

export async function createCommunityAction(data: CreateCommunityData) {
  const cookieStore = await cookies();
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("tags", JSON.stringify(data.tags));
  formData.append("pfp", data.pfp);

  try {
    const response = await fetch(`${process.env.API_URL}/skilltree`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookieStore.get("access_token")?.value}`,
        // Remove Content-Type header - let browser set it for FormData
      },
      body: formData,
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

    const responseData = await response.json();
    console.log(responseData);

    revalidatePath("/dashboard");
    revalidatePath("/discover");
    revalidatePath("/community/add");

    return responseData;
  } catch (error) {
    console.error("Error creating community:", error);
    return {
      ok: false,
      message: "Failed to create community. Please try again.",
    };
  }
}
