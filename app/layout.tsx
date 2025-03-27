import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | TodoApp Spike",
		default: "TodoApp Spike",
	},
	description: "A simple todo app spike made with Next and TypeScript",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} min-h-screen w-full antialiased`}>
				{children}
			</body>
		</html>
	);
}
