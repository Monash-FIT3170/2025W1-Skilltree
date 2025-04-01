import axios from "axios";

// Set the base URL for API requests
// In Docker: this will use the NEXT_PUBLIC_API_URL environment variable
// In development: this provides a fallback to localhost:6969
const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:6969";

// Create and export a configured axios instance
const baseAxios = axios.create({
	baseURL,
});

export default baseAxios;
