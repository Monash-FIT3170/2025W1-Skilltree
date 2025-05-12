import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/connectToDb";
import User from "@/server/models/user";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
      await connectToDb();
      
      // 1) parse & validate
      const { user, oldPass, newPass } = await req.json();
      if (!user || !oldPass || !newPass) {
        return NextResponse.json(
          { error: "Email, oldPassword and newPassword are required" },
          { status: 400 }
        );
      }
      // check if the user already exists and if old password matches
      const existingUser = await User.findOne({ email: user });

      if (!existingUser) {
        // no such user
        return NextResponse.json(
          { error: "No account found for that email" },
          { status: 404 }
        );
      }
    
      // 3) check old password
      const isValid = await bcrypt.compare(oldPass, existingUser.password);
      if (!isValid) {
        return NextResponse.json(
          { error: "Old password is incorrect" },
          { status: 401 }
        );
      }

      
      //change the password
      if (isValid) {
        existingUser.password = await bcrypt.hash(newPass,10);
        await existingUser.save();
        const msg = encodeURIComponent("Password updated successfully");
        return NextResponse.json({ success: true, message: "Done" },{status : 200})
      }
    
    }

    catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
