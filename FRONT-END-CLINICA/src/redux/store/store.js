import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import stateReducer from "../reducers/stateReducer";
import profileReducer from "../reducers/profileReducer";
import proprietarioReducer from "../reducers/proprietarioReducer";
import expireReducer from "redux-persist-expire";

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
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
