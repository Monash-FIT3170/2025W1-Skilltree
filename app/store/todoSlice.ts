import { Todo } from "@/types";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface TodoState {
	todos: Todo[];
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: string | null;
}

const initialState: TodoState = {
	todos: [],
	loading: "idle",
	error: null,
};

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
		},
		removeTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((todo) => todo._id !== action.payload);
		},
		updateTodo: (state, action: PayloadAction<Todo>) => {
			const index = state.todos.findIndex(
				(todo) => todo._id === action.payload._id
			);
			if (index !== -1) {
				state.todos[index] = action.payload;
			}
		},
		setTodos: (state, action: PayloadAction<Todo[]>) => {
			state.todos = action.payload;
		},
		clearTodos: (state) => {
			state.todos = [];
		},
	},
});

export const { addTodo, removeTodo, updateTodo, setTodos, clearTodos } =
	todoSlice.actions;
export default todoSlice.reducer;
