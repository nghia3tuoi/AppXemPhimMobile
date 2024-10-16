import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  movies: any;
  moviesNewUpdate: any;
  moviesFavorite:any;
  movie: any;
  error: any;
  isLoading: any;
}

const initialState: MovieState = {
  movies: null,
  movie: null,
  moviesNewUpdate: null,
  moviesFavorite:null,
  error: null,
  isLoading: false,
};
const movieSlice: any = createSlice({
  name: "movie",
  initialState,
  reducers: {
    GetMovieStart: (state) => {
      state.isLoading = true;
      state.movie = null;
      state.error = null;
    },
    GetMovieSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.movie = action.payload;
      state.error = null;
    },
    GetMovieError: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.movie = null;
      state.error = action.payload;
    },
    GetMoviesStart: (state) => {
      state.isLoading = true;
      state.movies = null;
      state.error = null;
    },
    GetMoviesSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.movies = action.payload;
      state.error = null;
    },
    GetMoviesError: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.movies = null;
      state.error = action.payload;
    },
    GetMoviesNewUpdateStart: (state) => {
      state.isLoading = true;
      state.moviesNewUpdate = null;
      state.error = null;
    },
    GetMoviesNewUpdateSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.moviesNewUpdate = action.payload;
      state.error = null;
    },
    GetMoviesNewUpdateError: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.moviesNewUpdate = null;
      state.error = action.payload;
    },
    //movie favoarites
    GetMoviesFavoriteStart: (state) => {
      state.isLoading = true;
      state.moviesFavorite = null;
      state.error = null;
    },
    GetMoviesFavoriteSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.moviesFavorite = action.payload;
      state.error = null;
    },
    GetMoviesFavoriteError: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.moviesFavorite = null;
      state.error = action.payload;
    },
  },
});

export default movieSlice;
export const {
  GetMovieStart,
  GetMovieSuccess,
  GetMovieError,
  GetMoviesStart,
  GetMoviesSuccess,
  GetMoviesError,
  GetMoviesNewUpdateStart,
  GetMoviesNewUpdateSuccess,
  GetMoviesNewUpdateError,
  GetMoviesFavoriteStart,
  GetMoviesFavoriteSuccess,
  GetMoviesFavoriteError,
} = movieSlice.actions;
