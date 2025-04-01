"use client";

import { useAppSelector } from "@/app/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function withAuth<P extends object>(
	Component: React.ComponentType<P>
) {
	return function WithAuth(props: P) {
		const { isAuthenticated } = useAppSelector((state) => state.user);
		const router = useRouter();

		useEffect(() => {
			if (!isAuthenticated) {
				router.replace("/");
			}
		}, [isAuthenticated, router]);

		if (!isAuthenticated) {
			return null;
		}

		return <Component {...props} />;
	};
}
