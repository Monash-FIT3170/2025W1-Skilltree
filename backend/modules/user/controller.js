import User from "./model.js";
import logger from "../../lib/logger.js";

export const getUser = async (req, res) => {
	const { id } = req.params;

	if (!id) {
		throw new Error("Please provide an id");
	}

	try {
		const user = await User.findById(id);
		if (!user) {
			return res.status(404).json({ message: null, error: "User not found" });
		}
		return res.status(200).json({ message: user, error: null });
	} catch (error) {
		logger.error(error.message);
		return res.status(500).json({ message: null, error: error.message });
	}
};

export const registerUser = async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		throw new Error("Please provide all required fields");
	}

	try {
		const user = await User.create({ name, email, password });
		return res.status(201).json({ message: user, error: null });
	} catch (error) {
		logger.error(error.message);
		return res.status(500).json({ message: null, error: error.message });
	}
};

export const loginUser = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		throw new Error("Please provide all required fields");
	}

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res
				.status(401)
				.json({ message: null, error: "Invalid credentials" });
		}

		const isMatch = await user.comparePassword(password);
		if (!isMatch) {
			return res
				.status(401)
				.json({ message: null, error: "Invalid credentials" });
		}

		return res.status(200).json({ message: user, error: null });
	} catch (error) {
		logger.error(error.message);
		return res.status(500).json({ message: null, error: error.message });
	}
};
