// lib/api/event.ts

import { EventPayload } from "@/types/event";

const API_BASE = "/api/event"; // adjust if needed

// GET all events
export const fetchEvents = async () => {
  const res = await fetch(API_BASE, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  const data = await res.json();
  return data.message;
};

// GET event by ID
export const fetchEventById = async (id: string) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch event with ID ${id}`);
  }

  const data = await res.json();
  return data.message;
};

// POST create new event
export const createEvent = async (payload: EventPayload) => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to create event: ${error}`);
  }

  const data = await res.json();
  return data.message;
};

// PUT update existing event
export const updateEvent = async (id: string, payload: EventPayload) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to update event: ${error}`);
  }

  const data = await res.json();
  return data.message;
};

// DELETE event
export const deleteEvent = async (id: string) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to delete event: ${error}`);
  }

  const data = await res.json();
  return data.message;
};
