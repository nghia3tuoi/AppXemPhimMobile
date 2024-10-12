import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

// Kết hợp các reducer
const rootReducer = combineReducers({
  auth: authSlice.reducer, // Reducer cho auth
  // Bạn có thể thêm các reducer khác ở đây
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
