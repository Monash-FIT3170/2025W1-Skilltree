"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const [form, setForm] = React.useState({
		email: "",
		password: "",
	});
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		router.push("/dashboard");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="my-10 flex flex-col gap-2.5">
				<Input
					value={form.email}
					onChange={handleChange}
					name="email"
					placeholder="Enter your email"
				/>
				<Input
					value={form.password}
					onChange={handleChange}
					name="password"
					placeholder="Enter your password"
				/>
			</div>

			<div className="flex flex-col">
				<Button type="submit">Login</Button>
				<Button
					className="cursor-pointer"
					onClick={() => router.push("/register")}
					variant="link"
				>
					No account? Register.
				</Button>
			</div>
		</form>
	);
};

export default LoginForm;
