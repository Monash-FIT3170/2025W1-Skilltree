import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/connectToDb";
import { User } from "@/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function PATCH(req: Request) {
  try {
    await connectToDb();

    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json({ message: "Missing token or password" }, { status: 400 });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_RESET_SECRET!);
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 });
    }

    user.password = await bcrypt.hash(password, 10);
    await user.save();

    return NextResponse.json({ message: "Password reset successful" }, { status: 200 });
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 });
  }
}
