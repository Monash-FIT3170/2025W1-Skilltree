import Image from "next/image";
import React from "react";

const AuthLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="min-h-screen w-full flex items-center justify-center">
			<div className="border h-[85vh] w-[85vw] flex mx-auto rounded overflow-hidden shadow-lg">
				<Image
					src="https://picsum.photos/1000"
					alt="Auth Screen Image"
					width={1000}
					height={1000}
					className="object-cover w-full h-auto"
				/>

				<div className="w-full">{children}</div>
			</div>
		</div>
	);
};

export default AuthLayout;
