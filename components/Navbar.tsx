"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { clearUser } from "@/app/store/userSlice";
import { clearTodos } from "@/app/store/todoSlice";

const Navbar = () => {
	const user = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const router = useRouter();

	const handleSignOut = async () => {
		dispatch(clearUser());
		dispatch(clearTodos());

		router.push("/");
	};

	return (
		<nav className="z-10 bg-background fixed top-0 right-0 left-0 flex items-center justify-between px-5 h-20 border-b">
			<h1 className="text-2xl font-bold">TodoApp Spike</h1>

			<Button
				className="cursor-pointer hidden md:block"
				onClick={handleSignOut}
				variant={"destructive"}
			>
				Sign out as <span className="font-bold underline">{user.name}</span>
			</Button>

			<Button
				className="cursor-pointer block md:hidden"
				onClick={handleSignOut}
				variant={"destructive"}
			>
				<LogOut />
			</Button>
		</nav>
	);
};

export default Navbar;
