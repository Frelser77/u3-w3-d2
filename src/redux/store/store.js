import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import mainReducer from "../reducers/mainReducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["favourite"],
};

const rootReducer = combineReducers({
	favourite: mainReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
