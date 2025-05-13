import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/connectToDb";
import { Community } from "@/models/Community";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
  try {
    await connectToDb();

    // Get the token from cookies
    const token = req.headers.get("cookie")?.split(";").find(c => c.trim().startsWith("token="))?.split("=")[1];

    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized (not logged in)" }, { status: 401 });
    }

    // Verify the token
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return NextResponse.json({ success: false, message: "Invalid token" }, { status: 403 });
    }

    const { communityName, communityDesc } = await req.json();

    const existingCommunity = await Community.findOne({ name: communityName });
    if (existingCommunity) {
      return NextResponse.json({ success: false, message: "Community already exists" }, { status: 400 });
    }

    // Create community with logged-in user as moderator
    const newCommunity = new Community({
      name: communityName,
      description: communityDesc,
      moderator: (decoded as any).email,
    });

    await newCommunity.save();

    return NextResponse.json({ success: true, message: "Community created successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
