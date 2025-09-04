import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@xyflow/react/dist/style.css";
import "@/app/globals.css";
import { Providers } from "@/components/shared/providers";
import { Suspense } from "react";
import Loading from "@/components/shared/loading";
import TanStackProvider from "@/components/shared/tan-stack-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

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
    <html suppressContentEditableWarning suppressHydrationWarning lang="en">
      <body className={`${spaceGrotesk.variable} dark antialiased`}>
        <Suspense fallback={<Loading />}>
          <TanStackProvider>
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
          </TanStackProvider>
        </Suspense>
      </body>
    </html>
  );
}
