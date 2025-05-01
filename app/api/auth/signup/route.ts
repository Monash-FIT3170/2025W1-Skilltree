// /app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/connectToDb";
import User from "@/server/models/user";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {

}
