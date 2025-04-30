import mongoose from "mongoose";

export const connectToDb = async () => {
	try {
		await mongoose.connect(
			process.env.MONGODB_URI
		);
		console.log("Connected to DB")
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
	}
};