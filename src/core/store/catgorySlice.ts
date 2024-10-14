import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface categoryState {
  categories: any;
  error: any;
  isLoading: any;
}

const initialState: categoryState = {
  categories: null,
  error: null,
  isLoading: false,
};

const categorySlice: any = createSlice({
  name: "category",
  initialState,
  reducers: {
    GetCategoriesStart: (state) => {
      state.isLoading = true;
      state.categories = null;
      state.error = null;
    },
    GetCategoriesSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.categories = action.payload;
      state.error = null;
    },
    GetCategoriesError: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.categories = null;
      state.error = action.payload;
    },
  },
});
export default categorySlice;
export const { GetCategoriesStart, GetCategoriesSuccess, GetCategoriesError } =
categorySlice.actions;
