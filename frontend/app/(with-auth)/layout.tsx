import Navbar from "@/components/Navbar";
import React from "react";

const WithAuthLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="min-h-screen max-w-screen">
			<Navbar />

			<div className="absolute top-20 left-0 right-0 min-h-[calc(100vh-5rem)]">
				{children}
			</div>
		</div>
	);
};

export default WithAuthLayout;
