import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
	id: string;
	name: string;
	email: string;
	isAuthenticated: boolean;
}

const initialState: UserState = {
	id: "",
	name: "",
	email: "",
	isAuthenticated: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (
			state,
			action: PayloadAction<{ id: string; name: string; email: string }>
		) => {
			state.id = action.payload.id;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.isAuthenticated = true;
		},
		clearUser: (state) => {
			state.id = "";
			state.name = "";
			state.email = "";
			state.isAuthenticated = false;
		},
	},
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
