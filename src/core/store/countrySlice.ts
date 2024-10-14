import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountryState {
  countries: any;
  error: any;
  isLoading: any;
}

const initialState: CountryState = {
  countries: null,
  error: null,
  isLoading: false,
};

const countrySlice: any = createSlice({
  name: "country",
  initialState,
  reducers: {
    GetCountriesStart: (state) => {
      state.isLoading = true;
      state.countries = null;
      state.error = null;
    },
    GetCountriesSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.countries = action.payload;
      state.error = null;
    },
    GetCountriesError: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.countries = null;
      state.error = action.payload;
    },
  },
});
export default countrySlice;
export const { GetCountriesStart, GetCountriesSuccess, GetCountriesError } =
  countrySlice.actions;
