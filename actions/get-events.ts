"use server";

import { APIResponse, TEvents } from "@/types";

export const getEventsAction = async () => {
  const eventResponse = await fetch(`${process.env.API_URL}/event`, {
    method: "GET",
  });
  const eventJson = await eventResponse.json();
  return eventJson as APIResponse<TEvents[]>;
};
