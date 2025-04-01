import { GetTodoRequest, GetTodoResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import baseAxios from "./axiosConfig";

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
