import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/connectToDb";
import { User } from "@/models/User";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!; // Add to .env

export async function POST(req: Request) {
  try {
    await connectToDb();
    const { email, password } = await req.json();

    const user = await User.findOne({ email: email }).select("+password");
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 401 });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return NextResponse.json({ success: false, message: "Incorrect password" }, { status: 401 });
    }

    // generate a token for user session 
    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: "1d" });

    const response = NextResponse.json({ success: true, message: "Login successful" });

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
