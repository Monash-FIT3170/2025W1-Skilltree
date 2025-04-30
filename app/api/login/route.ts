import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/connectToDb";
import User from "@/server/models/user";
// import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {

    await connectToDb();
    
    const body = await req.json();
    const { username, password } = body;

    const user = await User.findOne({ email: username });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 401 });
    }

    const isMatch = password === user.password; // use bcrypt here instead when hashing passwords
    if (!isMatch) {
      return NextResponse.json({ success: false, message: "Incorrect password" }, { status: 401 });
    }

    return NextResponse.json({ success: true, message: "Login successful" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}