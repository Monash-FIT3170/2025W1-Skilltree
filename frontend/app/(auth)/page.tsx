import LoginForm from "@/components/LoginForm";
import React from "react";

const LoginPage = () => {
	return (
		<div className="p-10 h-full flex flex-col justify-center items-stretch">
			<h1 className="text-3xl text-center font-bold">Welcome back 👋🏻</h1>

			<LoginForm />
		</div>
	);
};

export default LoginPage;
