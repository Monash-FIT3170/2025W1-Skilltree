import Image from "next/image";
import React from "react";

const AuthLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="min-h-screen w-full flex items-center justify-center p-4">
			<div className="border h-auto md:h-[85vh] w-full md:w-[85vw] flex flex-col md:flex-row mx-auto rounded overflow-hidden shadow-lg">
				{/* Image hidden on small screens, visible as 40% width on medium screens and larger */}
				<div className="hidden md:block md:w-2/5 lg:w-1/2 relative">
					<Image
						src="https://picsum.photos/1000"
						alt="Auth Screen Image"
						fill
						className="object-cover"
						priority
					/>
				</div>

				{/* Content takes full width on small screens, 60% on medium, 50% on large */}
				<div className="w-full md:w-3/5 lg:w-1/2 p-4 md:p-6">{children}</div>
			</div>
		</div>
	);
};

export default AuthLayout;
