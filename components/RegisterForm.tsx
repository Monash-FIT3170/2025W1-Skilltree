"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRegister } from "@/api/mutations";

const RegisterForm = () => {
	const [form, setForm] = React.useState({
		name: "",
		email: "",
		password: "",
	});
	const [loading, setLoading] = React.useState(false);
	const router = useRouter();
	const registerMutation = useRegister();

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
			setLoading(false);
			return;
		}

		try {
			const result = await registerMutation.mutateAsync({
				name: form.name,
				email: form.email,
				password: form.password,
			});

			if (result.data.error) {
				throw new Error(result.data.error);
			}

			toast.success("Account created successfully");
			router.push("/");
		} catch (error) {
			console.error(error);
			toast.error(
				error instanceof Error ? error.message : "Registration failed"
			);
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

export default RegisterForm;
