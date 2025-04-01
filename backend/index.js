import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import logger from "./lib/logger.js";
import { connectToDb } from "./lib/connectToDb.js";

import userRoutes from "./modules/user/routes.js";
import todoRoutes from "./modules/todo/routes.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", userRoutes);
app.use("/todo", todoRoutes);

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
	connectToDb();
	logger.success(`Server is running on port ${PORT}`);
});
