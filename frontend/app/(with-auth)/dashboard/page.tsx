"use client";

import TodoCards from "@/components/TodoCards";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import React, { useEffect, useState } from "react";
import withAuth from "@/components/withAuth";
import { useGetTodo } from "@/api/queries";
import { useAddTodo } from "@/api/mutations";
import { useAppSelector } from "@/app/store/hooks";

const DashboardPage = () => {
	const [todo, setTodo] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [todos, setTodos] = useState<any[] | null>(null);
	const [loading, setLoading] = useState(true);

	const user = useAppSelector((state) => state.user.user);

	const { data: todoData, refetch } = useGetTodo({ userId: user!._id || "" });
	const addTodoMutation = useAddTodo();

	useEffect(() => {
		console.log(todoData?.data.message, "todoData");
	}, [todoData]);

	const fetchTodos = async () => {
		try {
			await refetch();
			if (todoData?.data) {
				setTodos(todoData.data.message);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (user) {
			fetchTodos();
		}
	}, [user]);

	// Update todos when query data changes
	useEffect(() => {
		if (todoData?.data) {
			setTodos(todoData.data.message);
			setLoading(false);
		}
	}, [todoData]);

	const handleAddTodo = async () => {
		if (!todo.trim()) {
			toast.error("Todo title cannot be empty");
			return;
		}

		console.log(user);

		try {
			await addTodoMutation.mutateAsync({
				user: user!._id,
				title: todo,
				description,
			});

			toast.success("Todo added successfully");
			setTodo("");
			setDescription("");
			// Refresh todos after adding a new one
			fetchTodos();
		} catch (error) {
			// @ts-expect-error message is defined
			toast.error(error.message);
			console.error(error);
		}
	};

	return (
		<div className="w-full h-full flex flex-col md:flex-row">
			<div className="top-20 w-full md:w-1/3 p-4 md:p-5 md:pr-0 md:fixed md:bottom-0 md:left-0">
				<div className="flex flex-col gap-4">
					<Input
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
						placeholder="Enter your todo..."
					/>
					<Textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder="Enter your todo description..."
						className="h-24"
					/>
					<Button onClick={handleAddTodo} className="w-full md:w-auto">
						Add todo
					</Button>
				</div>
			</div>

			{/* Todo cards section - below input on mobile, right side on larger screens */}
			<ScrollArea className="top-0 w-full md:w-2/3 md:ml-auto mt-4 md:mt-0 p-4 md:p-5 md:fixed md:right-0 md:bottom-0">
				<TodoCards todos={todos} loading={loading} refreshTodos={fetchTodos} />
			</ScrollArea>
		</div>
	);
};

export default withAuth(DashboardPage);
