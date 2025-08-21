import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import '@xyflow/react/dist/style.css';
import '@/app/globals.css';
import { Providers } from "@/components/shared/providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
      <body className={`${montserrat.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
