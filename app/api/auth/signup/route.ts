// /app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/connectToDb";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectToDb();

    const { username, password } = await req.json();

    // check if the user already exists
    const existingUser = await User.findOne({ email: username });
    if (existingUser) {
      return NextResponse.json({ success: false, message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //if the user doesn't already exist, create one
    const newUser = new User({
      email: username,
      password: hashedPassword,
    });

    await newUser.save();

    //display confirmation/error message
    return NextResponse.json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
