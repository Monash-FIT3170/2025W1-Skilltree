import Todo from "./model.js";
import User from "../user/model.js";
import logger from "../../lib/logger.js";

export const getTodos = async (req, res) => {
	const { user } = req.params;

	try {
		const userExists = await User.findById(user);
		if (!userExists) {
			throw new Error("User not found");
		}

		const todos = await Todo.find({ user }).populate("user");
		res.status(200).json({
			message: todos,
			error: null,
		});
	} catch (error) {
		logger.error(error);
		res.status(500).json({ message: "Error fetching todos" });
	}
};

export const createTodo = async (req, res) => {
	const { user } = req.params;
	const { title, description } = req.body;

	try {
		const userExists = await User.findById(user);
		if (!userExists) {
			throw new Error("User not found");
		}

		const todo = new Todo({
			title,
			description,
			user,
		});

		await todo.save();
		res.status(201).json({
			message: "Todo created successfully",
			error: null,
		});
	} catch (error) {
		logger.error(error);
		res.status(500).json({ message: "Error creating todo" });
	}
};

export const markTodoAsDone = async (req, res) => {
	const { user, todoId } = req.params;

	try {
		const userExists = await User.findById(user);
		if (!userExists) {
			throw new Error("User not found");
		}

		const todo = await Todo.findById(todoId);
		if (!todo) {
			throw new Error("Todo not found");
		}

		todo.completed = !todo.completed;
		await todo.save();

		res.status(200).json({
			message: "Todo marked as done",
			error: null,
		});
	} catch (error) {
		logger.error(error);
		res.status(500).json({ message: "Error marking todo as done" });
	}
};

export const deleteTodo = async (req, res) => {
	const { user, todoId } = req.params;

	try {
		const userExists = await User.findById(user);
		if (!userExists) {
			throw new Error("User not found");
		}

		const todo = await Todo.findById(todoId);
		if (!todo) {
			throw new Error("Todo not found");
		}

		await Todo.deleteOne({ _id: todoId });

		res.status(200).json({
			message: "Todo deleted successfully",
			error: null,
		});
	} catch (error) {
		logger.error(error);
		res.status(500).json({ message: "Error deleting todo" });
	}
};
