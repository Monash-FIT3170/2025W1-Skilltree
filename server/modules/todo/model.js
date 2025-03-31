import { Schema, model } from "mongoose";

const todoSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			default: "",
		},
		completed: {
			type: Boolean,
			default: false,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Todo = model("Todo", todoSchema);
export default Todo;
