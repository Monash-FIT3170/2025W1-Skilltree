import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@xyflow/react/dist/style.css";
import "@/app/globals.css";
import { Providers } from "@/components/shared/providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skill Tree",
  description:
    "Skill Tree is a website that allows you to build your skills, and excel in your career.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
