import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/connectToDb";
import User from "@/server/models/user";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectToDb();

    const body = await req.json();
    const { username, password } = body;

    const user = await User.findOne({ email: username });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, message: "Incorrect password" }, { status: 401 });
    }

    //Create a response and set cookie
    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    });

    //Set cookie (basic example, ideally use JWT later)
    response.cookies.set("token", "sample-auth-token", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
