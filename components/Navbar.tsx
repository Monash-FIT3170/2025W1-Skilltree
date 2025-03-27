import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
	return (
		<nav className="z-10 bg-background fixed top-0 right-0 left-0 flex items-center justify-between px-5 h-20 border-b">
			<h1 className="text-3xl font-bold">TodoApp Spike</h1>

			<Button variant={"destructive"}>
				Sign out as <span className="font-bold underline">Aditya Tripathi</span>
			</Button>
		</nav>
	);
};

export default Navbar;
