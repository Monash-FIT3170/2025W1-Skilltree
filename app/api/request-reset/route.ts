import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/connectToDb";
import { User } from "@/models/User";
import jwt from "jsonwebtoken";
import { sendEmail } from "@/lib/sendEmail"; // adjust path if needed
//make sure .env file is under 2025W1-Skilltree
// need to npm install nodemailer
//or if that doesn't work then npm install --save-dev @types/nodemailer
// then need to have a JWT_RESET_SECRET = some random sctring in .env file
//then need to have EMAIL_HOST=smtp.mailtrap.io .env file
//EMAIL_PORT=2525 in .env file
//EMAIL_USER=e47b38006c1edd in .env file
//EMAIL_PASS=d956040b560236 in .env file
//NEXT_PUBLIC_BASE_URL=http://localhost:3000 .env file
//It is connected to my personal account shiddesh1910@gmail.com inbox right now so only I can see the reset email but can also sign up for nodemailer with your personal account to test this just chnage it to your own generated username and password

const JWT_RESET_SECRET = process.env.JWT_RESET_SECRET!;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export async function POST(req: Request) {
  console.log("EMAIL_HOST is", process.env.EMAIL_HOST);
  try {
    await connectToDb();
    const { email } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      // Always return same response for security
      return NextResponse.json({ message: "If that email is registered, a reset link has been sent." }, { status: 200 });
    }

    const token = jwt.sign({ email: user.email }, JWT_RESET_SECRET, { expiresIn: "15m" });
    const resetLink = `${BASE_URL}/resetPassword?token=${token}`;

    const html = `
      <p>You requested a password reset.</p>
      <p><a href="${resetLink}">Click here</a> to reset your password. This link is valid for 15 minutes.</p>
      <p>If you didn't request this, just ignore this message.</p>
    `;

    await sendEmail({
      to: email,
      subject: "Skilltree: Reset Your Password",
      html,
    });

    return NextResponse.json({ message: "Reset link sent if the email is valid." }, { status: 200 });
  } catch (error) {
    console.error("Send email error:", error);
    return NextResponse.json({ message: "Failed to send reset email." }, { status: 500 });
  }
}
