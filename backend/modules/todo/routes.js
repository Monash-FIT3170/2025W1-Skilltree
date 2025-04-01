import { Router } from "express";
import {
	getTodos,
	createTodo,
	markTodoAsDone,
	deleteTodo,
} from "./controller.js";
const router = Router();

router.get("/:user", getTodos);
router.post("/:user", createTodo);
router.patch("/:user/:todoId", markTodoAsDone);
router.delete("/:user/:todoId", deleteTodo);

export default router;
