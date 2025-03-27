"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const [form, setForm] = React.useState({
		name: "",
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

	return (
		<>
			<div className="my-10 flex flex-col gap-2.5">
				<Input
					value={form.name}
					onChange={handleChange}
					name="name"
					placeholder="Enter your name"
				/>
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
				<Button>Register</Button>
				<Button
					className="cursor-pointer"
					onClick={() => router.push("/")}
					variant="link"
				>
					Have an account? Login.
				</Button>
			</div>
		</>
	);
};

export default LoginForm;
