import RegisterForm from "@/components/RegisterForm";
import React from "react";

const RegisterPage = () => {
	return (
		<div className="p-10 h-full flex flex-col justify-center items-stretch">
			<h1 className="text-3xl text-center font-bold">
				Read to start? Let&apos;s go 🚀
			</h1>

			<RegisterForm />
		</div>
	);
};

export default RegisterPage;
