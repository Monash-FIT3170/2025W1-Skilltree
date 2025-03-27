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
import { appwriteConfig, database } from "@/config/appwrite";
import { cn } from "@/lib/utils";

interface TodoCardsProps {
	todos: any[] | null;
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

	const handleDeleteTodo = async (id: string) => {
		setLoadingStates((prev) => ({
			...prev,
			[id]: { ...prev[id], delete: true },
		}));

		try {
			await database.deleteDocument(
				appwriteConfig.databaseId,
				appwriteConfig.todosCollId,
				id
			);
			await refreshTodos();
		} catch (error) {
			console.error(error);
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
			await database.updateDocument(
				appwriteConfig.databaseId,
				appwriteConfig.todosCollId,
				id,
				{ is_done: !is_done }
			);
			await refreshTodos();
		} catch (error) {
			console.error(error);
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
		<Card key={todo.$id} className="mb-5">
			<CardHeader>
				<CardTitle
					className={cn(
						todo.is_done ? "line-through text-gray-500" : "text-black"
					)}
				>
					{todo.todo}
				</CardTitle>
				<CardDescription className="text-xs">
					Added by <span className="text-blue-500">{todo.author_name}</span> on{" "}
					<span className="text-blue-500">
						{new Date(todo.added_on).toLocaleString()}
					</span>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p>{todo.description}</p>
			</CardContent>
			<CardFooter className="flex flex-col sm:flex-row gap-3 sm:gap-5 sm:justify-end">
				<Button
					onClick={() => handleCompleteTodo(todo.$id, todo.is_done)}
					className="w-full sm:w-auto flex items-center justify-center gap-2"
					disabled={loadingStates[todo.$id]?.complete}
				>
					{loadingStates[todo.$id]?.complete ? (
						<Loader2 className="h-4 w-4 animate-spin" />
					) : (
						<>
							<span className="hidden sm:inline">
								{todo.is_done ? "Mark as not done" : "Mark as done"}
							</span>
							<span className="inline sm:hidden">
								{todo.is_done ? "Undo" : "Complete"}
							</span>
							<Check className="h-4 w-4" />
						</>
					)}
				</Button>
				<Button
					onClick={() => handleDeleteTodo(todo.$id)}
					className="w-full sm:w-auto flex items-center justify-center gap-2"
					variant="destructive"
					disabled={loadingStates[todo.$id]?.delete}
				>
					{loadingStates[todo.$id]?.delete ? (
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
