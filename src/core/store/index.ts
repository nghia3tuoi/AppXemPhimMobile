import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import movieSlice from "./movieSlice";
import categorySlice from "./catgorySlice";
import countrySlice from "./countrySlice";

// Kết hợp các reducer
const rootReducer = combineReducers({
  auth: authSlice.reducer, // Reducer cho auth
  movie: movieSlice.reducer, // Reducer cho auth
  category: categorySlice.reducer,
  country: countrySlice.reducer,
  // Bạn có thể thêm các reducer khác ở đây
});

const store = configureStore({
  reducer: rootReducer,

  devTools: process.env.NODE_ENV !== "production",
});

export default store;
