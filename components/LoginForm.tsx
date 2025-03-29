"use client";

import React, { useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { account } from "@/config/appwrite";
import { Loader2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setUser } from "@/app/store/userSlice";

const LoginForm = () => {
	const [form, setForm] = React.useState({
		email: "",
		password: "",
	});
	const [loading, setLoading] = React.useState(false);
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { isAuthenticated } = useAppSelector((state) => state.user);

	useEffect(() => {
		if (isAuthenticated) {
			router.push("/dashboard");
		}
	}, [isAuthenticated, router]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);
		try {
			await account.createEmailPasswordSession(form.email, form.password);

			const user = await account.get();
			dispatch(
				setUser({
					email: user.email,
					name: user.name,
					id: user.$id,
				})
			);

			toast.success(`Welcome back, ${user.name}`);

			router.push("/dashboard");
		} catch (error) {
			console.error(error);
			// @ts-expect-error message is defined
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-full max-w-md mx-auto my-10">
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="flex flex-col gap-3">
					<Input
						value={form.email}
						onChange={handleChange}
						name="email"
						type="email"
						placeholder="Enter your email"
						className="w-full px-4 py-2"
						required
					/>
					<Input
						value={form.password}
						onChange={handleChange}
						name="password"
						type="password"
						placeholder="Enter your password"
						className="w-full px-4 py-2"
						required
					/>
				</div>

				<div className="flex flex-col">
					<Button type="submit" className="w-full py-2" disabled={loading}>
						{loading ? (
							<Loader2 className="h-5 w-5 animate-spin mr-2" />
						) : (
							"Login"
						)}
					</Button>
					<Button
						type="button"
						className="w-full cursor-pointer text-sm"
						onClick={() => router.push("/register")}
						variant="link"
					>
						No account? Register.
					</Button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
