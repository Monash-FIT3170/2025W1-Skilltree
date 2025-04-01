import mongoose from "mongoose";
import logger from "./logger.js";

export const connectToDb = async () => {
	try {
		await mongoose.connect(
			process.env.MONGODB_URI || "mongodb://localhost:27017/todo_spike"
		);
		logger.success("MongoDB connected");
	} catch (error) {
		logger.error("Error connecting to MongoDB:", error);
	}
};
