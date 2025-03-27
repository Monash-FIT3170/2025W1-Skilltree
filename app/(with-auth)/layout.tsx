import Navbar from "@/components/Navbar";
import React from "react";

const WithAuthLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="max-w-screen">
			<Navbar />

			{children}
		</div>
	);
};

export default WithAuthLayout;
