import type { Metadata } from "next";
import "@xyflow/react/dist/style.css";
import "@/app/globals.css";

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
  return <>{children}</>;
}
