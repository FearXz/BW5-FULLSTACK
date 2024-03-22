import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import stateReducer from "../reducers/stateReducer";
import profileReducer from "../reducers/profileReducer";
import proprietarioReducer from "../reducers/proprietarioReducer";
import expireReducer from "redux-persist-expire";
import animaleReducer from "../reducers/animaleReducer";
import visiteReducer from "../reducers/visiteReducer";
import ricoveroReducer from "../reducers/ricoveroReducer";
import prodottoReducer from "../reducers/prodottoReducer";
import cartReducer from "../reducers/cartReducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["profile"],
	transforms: [
		expireReducer("profile", {
			expireSeconds: 7 * 24 * 60 * 60, // 7 days
			expiredState: { loggedProfile: null },
			autoExpire: true,
		}),
	],
};

const rootReducer = combineReducers({
	global: stateReducer,
	profile: profileReducer,
	proprietario: proprietarioReducer,
	animale: animaleReducer,
	visita: visiteReducer,
	ricovero: ricoveroReducer,
	prodotto: prodottoReducer,
	cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
