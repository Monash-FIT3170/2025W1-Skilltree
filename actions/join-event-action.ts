"use server";

import { cookies } from "next/headers";

export async function joinEventAction(eventId: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  const API_URL = process.env.API_URL;

  try {
    const res = await fetch(`${API_URL}/event/${eventId}/join`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const msg = await res.text();
      return { ok: false, message: msg || "Failed to join event" };
    }

    return { ok: true };
  } catch (err) {
    console.error("Error joining event:", err);
    return { ok: false, message: "Network error" };
  }
}
