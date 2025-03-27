"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { account } from "@/config/appwrite";
import { ID } from "appwrite";
import { Loader2 } from "lucide-react";

const LoginForm = () => {
	const [form, setForm] = React.useState({
		name: "",
		email: "",
		password: "",
	});
	const [loading, setLoading] = React.useState(false);
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		if (!form.name || !form.email || !form.password) {
			toast.error("Please fill all fields");
			return;
		}

		try {
			const user = await account.create(
				ID.unique(),
				form.email,
				form.password,
				form.name
			);
			console.log(user);
			toast.success("Account created successfully");

			router.push("/");
		} catch (error) {
			console.error(error);
			// @ts-expect-error message is defined
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
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
				<Button type="submit">
					{loading ? (
						<div className="animate-spin">
							<Loader2 />
						</div>
					) : (
						"Register"
					)}
				</Button>
				<Button
					type="button"
					className="cursor-pointer"
					onClick={() => router.push("/")}
					variant="link"
				>
					Have an account? Login.
				</Button>
			</div>
		</form>
	);
};

export default LoginForm;
