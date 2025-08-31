import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import mongoose from "mongoose";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/skill_tree";

// @ts-expect-error global.mongoose is a mongoose instance
if (!global.mongoose) {
  // @ts-expect-error global.mongoose is a mongoose instance
  global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
  // @ts-expect-error global.mongoose is a mongoose instance
  if (global.mongoose.conn) {
    // @ts-expect-error global.mongoose is a mongoose instance
    return global.mongoose.conn;
  }
  // @ts-expect-error global.mongoose is a mongoose instance
  if (!global.mongoose.promise) {
    // @ts-expect-error global.mongoose is a mongoose instance
    global.mongoose.promise = mongoose.connect(MONGODB_URI);
  }

  try {
    // @ts-expect-error global.mongoose is a mongoose instance
    global.mongoose.conn = await global.mongoose.promise;
    // @ts-expect-error global.mongoose is a mongoose instance
    return global.mongoose.conn;
  } catch (error) {
    throw error;
  }
};

export function initials(name: string) {
  if (!name) return "U";
  const parts = name.trim().split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0] + parts[parts.length - 1]![0]).toUpperCase();
}
