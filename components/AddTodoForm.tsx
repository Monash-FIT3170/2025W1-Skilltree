"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useAddTodo } from "@/api/mutations";
import { useAppSelector } from "@/app/store/hooks";

interface AddTodoFormProps {
	onTodoAdded?: () => Promise<void>;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onTodoAdded }) => {
	const [formData, setFormData] = useState({
		todo: "",
		description: "",
	});

	const addTodoMutation = useAddTodo();
	const user = useAppSelector((state) => state.user.user);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleAddTodo = async () => {
		if (!formData.todo.trim()) {
			toast.error("Todo title cannot be empty");
			return;
		}

		try {
			await addTodoMutation.mutateAsync({
				user: user!._id,
				title: formData.todo,
				description: formData.description,
			});

			toast.success("Todo added successfully");
			setFormData({ todo: "", description: "" });

			// Call the callback if provided
			if (onTodoAdded) {
				await onTodoAdded();
			}
		} catch (error) {
			toast.error((error as Error).message);
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col gap-5 fixed p-5 pr-0 bottom-0 top-20 left-0 w-1/3">
			<Input
				name="todo"
				value={formData.todo}
				onChange={handleChange}
				placeholder="Enter your todo..."
			/>
			<Textarea
				name="description"
				value={formData.description}
				onChange={handleChange}
				placeholder="Enter your todo description..."
				className="h-24"
			/>
			<Button onClick={handleAddTodo}>Add todo</Button>
		</div>
	);
};

export default AddTodoForm;
