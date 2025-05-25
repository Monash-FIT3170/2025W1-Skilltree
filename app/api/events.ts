export interface EventPayload {
  name: string;
  communityId: string;
  experienceId: string;
  rankedStatus: boolean;
  experiencePayout: number;
}

// POST /event
export const createEvent = async (payload: EventPayload) => {
  const res = await fetch("/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to create event");
  }

  return res.json();
};

// GET /event
export const fetchEvents = async () => {
  const res = await fetch("/event");
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
};