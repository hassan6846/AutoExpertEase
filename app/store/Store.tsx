import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
// slices (reducers actions)
import AuthSlice from "../slices/AuthSlice"; // Authentication Status
import locationSlice from "../slices/LocationSlice";
import ChatBotSlice from "../slices/ChatBotSlice";
import TaskSlice from "../slices/TaskSlice";
import UserSlice from "../slices/UserSlice";

// Combine reducers
const rootReducer = combineReducers({
  auth: AuthSlice,
  location: locationSlice,
  chatbot:ChatBotSlice,
  task:TaskSlice,
  user:UserSlice
});

// Persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Use AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
