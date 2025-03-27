"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
}
