"use client";

import React, { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AlertCircle, Check, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDeleteTodo, usePatchTodo } from "@/api/mutations";
import { toast } from "sonner";
import { useAppSelector } from "@/app/store/hooks";
import { Todo } from "@/types";

interface TodoCardsProps {
	todos: Todo[] | null;
	loading: boolean;
	refreshTodos: () => Promise<void>;
}

const TodoCard: React.FC<TodoCardsProps> = ({
	todos,
	loading,
	refreshTodos,
}) => {
	const [loadingStates, setLoadingStates] = useState<
		Record<string, { delete: boolean; complete: boolean }>
	>({});

	const deleteTodoMutation = useDeleteTodo();
	const patchTodoMutation = usePatchTodo();

	const user = useAppSelector((state) => state.user.user);

	const handleDeleteTodo = async (id: string) => {
		setLoadingStates((prev) => ({
			...prev,
			[id]: { ...prev[id], delete: true },
		}));

		try {
			await deleteTodoMutation.mutateAsync({
				userId: user!._id,
				todoId: id,
			});

			toast.success("Todo deleted successfully");
			await refreshTodos();
		} catch (error) {
			console.error(error);
			toast.error("Failed to delete todo");
		} finally {
			setLoadingStates((prev) => ({
				...prev,
				[id]: { ...prev[id], delete: false },
			}));
		}
	};

	const handleCompleteTodo = async (id: string, is_done: boolean) => {
		setLoadingStates((prev) => ({
			...prev,
			[id]: { ...prev[id], complete: true },
		}));

		try {
			await patchTodoMutation.mutateAsync({
				userId: user!._id,
				todoId: id,
			});

			toast.success(`Todo marked as ${!is_done ? "complete" : "incomplete"}`);
			await refreshTodos();
		} catch (error) {
			console.error(error);
			toast.error("Failed to update todo status");
		} finally {
			setLoadingStates((prev) => ({
				...prev,
				[id]: { ...prev[id], complete: false },
			}));
		}
	};

	if ((!todos && !loading) || (todos && todos.length === 0)) {
		return (
			<div className="flex flex-col w-full h-[calc(100vh-120px)] items-center justify-center">
				<AlertCircle />
				<p className="text-2xl font-bold">No todos found</p>
			</div>
		);
	}

	if (!todos) {
		return (
			<div className="flex flex-col w-full h-[calc(100vh-120px)] items-center justify-center">
				<Loader2 height={24} width={24} className="animate-spin" />
			</div>
		);
	}

	return todos.map((todo) => (
		<Card key={todo._id} className="mb-5">
			<CardHeader>
				<CardTitle
					className={cn(
						todo.completed ? "line-through text-gray-500" : "text-black"
					)}
				>
					{todo.title}
				</CardTitle>
				<CardDescription className="text-xs">
					Added by <span className="text-blue-500">{todo.user.name}</span> on{" "}
					<span className="text-blue-500">
						{new Date(todo.createdAt).toLocaleString()}
					</span>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p>{todo.description}</p>
			</CardContent>
			<CardFooter className="flex flex-col sm:flex-row gap-3 sm:gap-5 sm:justify-end">
				<Button
					onClick={() => handleCompleteTodo(todo._id, todo.completed)}
					className="w-full sm:w-auto flex items-center justify-center gap-2"
					disabled={loadingStates[todo._id]?.complete}
				>
					{loadingStates[todo._id]?.complete ? (
						<Loader2 className="h-4 w-4 animate-spin" />
					) : (
						<>
							<span className="hidden sm:inline">
								{todo.completed ? "Mark as not done" : "Mark as done"}
							</span>
							<span className="inline sm:hidden">
								{todo.completed ? "Undo" : "Complete"}
							</span>
							<Check className="h-4 w-4" />
						</>
					)}
				</Button>
				<Button
					onClick={() => handleDeleteTodo(todo._id)}
					className="w-full sm:w-auto flex items-center justify-center gap-2"
					variant="destructive"
					disabled={loadingStates[todo._id]?.delete}
				>
					{loadingStates[todo._id]?.delete ? (
						<Loader2 className="h-4 w-4 animate-spin" />
					) : (
						<>
							<span className="hidden sm:inline">Delete the todo</span>
							<span className="inline sm:hidden">Delete</span>
							<Trash2 className="h-4 w-4" />
						</>
					)}
				</Button>
			</CardFooter>
		</Card>
	));
};

export default TodoCard;
