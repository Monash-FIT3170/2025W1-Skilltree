import {
	DeleteTodoRequest,
	DeleteTodoResponse,
	LoginUserRequest,
	LoginUserResponse,
	PatchTodoRequest,
	PatchTodoResponse,
	PostTodoRequest,
	PostTodoResponse,
	RegisterUserRequest,
	RegisterUserResponse,
} from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const baseAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const useRegister = () => {
	return useMutation({
		mutationKey: ["register"],
		mutationFn: async (data: RegisterUserRequest) => {
			return await baseAxios.post<RegisterUserResponse>("/auth/register", data);
		},
	});
};

export const useLogin = () => {
	return useMutation({
		mutationKey: ["login"],
		mutationFn: async (data: LoginUserRequest) => {
			return await baseAxios.post<LoginUserResponse>("/auth/login", data);
		},
	});
};

export const useAddTodo = () => {
	return useMutation({
		mutationKey: ["addTodo"],
		mutationFn: async (data: PostTodoRequest) => {
			return await baseAxios.post<PostTodoResponse>(`/todo/${data.user}`, data);
		},
	});
};

export const useDeleteTodo = () => {
	return useMutation({
		mutationKey: ["deleteTodo"],
		mutationFn: async (data: DeleteTodoRequest) => {
			return await baseAxios.delete<DeleteTodoResponse>(
				`/todo/${data.userId}/${data.todoId}`
			);
		},
	});
};

export const usePatchTodo = () => {
	return useMutation({
		mutationKey: ["patchTodo"],
		mutationFn: async (data: PatchTodoRequest) => {
			return await baseAxios.patch<PatchTodoResponse>(
				`/todo/${data.userId}/${data.todoId}`
			);
		},
	});
};
