import { GetTodoRequest, GetTodoResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const baseAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const useGetTodo = (data: GetTodoRequest) => {
	return useQuery({
		queryKey: ["todos"],
		queryFn: async () => {
			return await baseAxios.get<GetTodoResponse>(`/todo/${data.userId}`);
		},
		refetchOnMount: false,
		refetchOnWindowFocus: true,
	});
};
