export type ApiResponse<T> = {
	message: T;
	error: string | null;
};

export type User = {
	_id: string;
	name: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
};

export type LoginUserRequest = {
	email: string;
	password: string;
};
export type LoginUserResponse = ApiResponse<User>;

export type RegisterUserRequest = {
	name: string;
	email: string;
	password: string;
};
export type RegisterUserResponse = ApiResponse<User>;

export type Todo = {
	_id: string;
	title: string;
	description: string;
	completed: boolean;
	user: User;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
};

export type GetTodoRequest = {
	userId: string;
};
export type GetTodoResponse = ApiResponse<Todo[]>;

export type PostTodoRequest = {
	user: string;
	title: string;
	description: string;
};
export type PostTodoResponse = ApiResponse<String>;

export type DeleteTodoRequest = {
	userId: string;
	todoId: string;
};
export type DeleteTodoResponse = ApiResponse<String>;

export type PatchTodoRequest = {
	userId: string;
	todoId: string;
};
export type PatchTodoResponse = ApiResponse<String>;
