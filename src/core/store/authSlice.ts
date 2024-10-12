import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: any;
  error: any;
  isLoading: any;
}

const initialState: UserState = {
  user: null,
  error: null,
  isLoading: false,
};

const authSlice:any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LoginStart: (state) => {
      state.isLoading = true;
      state.user = null;
      state.error = null;
    },
    LoginSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    LoginError: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.user = null;
      state.error = action.payload;
    },
    LogoutStart: (state) => {
      state.isLoading = true;
      state.user = null;
      state.error = null;
    },
    LogoutSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
    },
    LogoutError: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});
export default authSlice;
export const {
  LoginStart,
  LoginSuccess,
  LoginError,
  LogoutStart,
  LogoutSuccess,
  LogoutError,
} = authSlice.actions;
