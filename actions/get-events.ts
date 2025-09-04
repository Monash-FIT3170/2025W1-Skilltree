"use server";

import { TEvents } from "@/types";

export const getEventsAction = async () => {
  const eventResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/event`,
    {
      method: "GET",
    }
  );
  const eventJson = await eventResponse.json();
  return eventJson.message as TEvents[];
};
