import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [{ hostname: "picsum.photos" }],
	},
	env: {
		NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
		NEXT_PUBLIC_APPWRITE_PROJECT_ID:
			process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
		NEXT_PUBLIC_APPWRITE_DATABASE_ID:
			process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
		NEXT_PUBLIC_APPWRITE_TODOS_COLLECTION_ID:
			process.env.NEXT_PUBLIC_APPWRITE_TODOS_COLLECTION_ID,
		NEXT_PUBLIC_APPWRITE_STORAGE_ID:
			process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID,
	},
};

export default nextConfig;
