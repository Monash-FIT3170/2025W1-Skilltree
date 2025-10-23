"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export interface CreateEventData {
  skillTreeId: string;
  title: string;
  startDate: string;
  endDate: string;
  xpPayout?: number;
}

export async function createEventAction(data: CreateEventData) {
  const cookieStore = await cookies();

  try {
    const API_URL = process.env.API_URL;
    const token = cookieStore.get("access_token")?.value;
    
    console.log("API_URL:", API_URL);
    console.log("Token exists:", !!token);
    console.log("Original data:", data);
    
    // Convert dates to proper ISO format
    const startDate = new Date(data.startDate).toISOString();
    const endDate = new Date(data.endDate).toISOString();
    
    const formattedData = {
      ...data,
      startDate,
      endDate,
    };
    
    
    const endpoint = `${API_URL}/event`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formattedData),
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      let errorMessage = "Something went wrong";
      try {
        const text = await response.text();
        if (text) {
          const errorData = JSON.parse(text);
          errorMessage = errorData.message || errorMessage;
        }
      } catch {
        return { ok: false, message: errorMessage };
      }
      return { ok: false, message: errorMessage };
    }

    const responseData = await response.json();
    console.log("Event created successfully:", responseData);

    revalidatePath(`/community/${data.skillTreeId}/settings`, "page");
    return { ok: true, message: responseData };
  } catch (error) {
    console.error("Error creating event:", error);
    return {
      ok: false,
      message: "Failed to create event. Please try again.",
    };
  }
}