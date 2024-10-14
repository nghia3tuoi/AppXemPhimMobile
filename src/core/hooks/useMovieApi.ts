import axios from "axios";
import { useDispatch } from "react-redux";
import {
  GetMoviesError,
  GetMoviesStart,
  GetMoviesSuccess,
  GetMovieStart,
  GetMovieSuccess,
  GetMovieError,
  GetMoviesNewUpdateStart,
  GetMoviesNewUpdateSuccess,
  GetMoviesNewUpdateError,
} from "../store/movieSlice";
import {
  GetCategoriesError,
  GetCategoriesStart,
  GetCategoriesSuccess,
} from "../store/catgorySlice";
import {
  GetCountriesError,
  GetCountriesStart,
  GetCountriesSuccess,
} from "../store/countrySlice";

const useMovieApi = () => {
  const dispatch = useDispatch();
  //
  const getCategories = async () => {
    dispatch(GetCategoriesStart());
    try {
      const response: any = await axios.get(`https://ophim1.com/the-loai`);

      dispatch(GetCategoriesSuccess(response.data));
      return response.data; // Dữ liệu trả về
    } catch (error: any) {
      dispatch(GetCategoriesError(error.message));
      return null;
    }
  };
  //
  const getCountries = async () => {
    dispatch(GetCountriesStart());
    try {
      const response: any = await axios.get(`https://ophim1.com/quoc-gia`);
      dispatch(GetCountriesSuccess(response.data));
      return response.data; // Dữ liệu trả về
    } catch (error: any) {
      dispatch(GetCountriesError(error.message));
      return null;
    }
  };
  //
  const getMovieBySlug = async (slug: string) => {
    dispatch(GetMovieStart());
    try {
      const response: any = await axios.get(`https://ophim1.com/phim/${slug}`);
      dispatch(GetMovieSuccess(response.data));
      return response.data; // Dữ liệu trả về
    } catch (error: any) {
      dispatch(GetMovieError(error.message));
      return null;
    }
  };
  const getMovieNewUpdate = async (page: number = 1) => {
    dispatch(GetMoviesNewUpdateStart());
    try {
      const response: any = await axios.get(
        `https://ophim17.cc/_next/data/j4bBHnWv9JD18kNQ3njRH/danh-sach/phim-bo-dang-chieu.json?slug=phim-bo-dang-chieu&sort_field=modified.time&category=&country=trung-quoc&year=&page=${page}`
      );
      dispatch(GetMoviesNewUpdateSuccess(response.data.pageProps?.data?.items));
      return response.data.pageProps?.data?.items; // Dữ liệu trả về
    } catch (error: any) {
      dispatch(GetMoviesNewUpdateError(error.message));
      return null;
    }
  };
  const getMoviesByTypeSlug = async (page: number = 1, typeSlug: string,country:string) => {
    dispatch(GetMoviesStart());
    try {
      const response: any = await axios.get(
        `https://ophim17.cc/_next/data/j4bBHnWv9JD18kNQ3njRH/danh-sach/${typeSlug}.json?slug=${typeSlug}&country=${country}&page=1`
      );
      dispatch(GetMoviesSuccess(response.data.pageProps?.data?.items));
      return response.data.pageProps?.data?.items; // Dữ liệu trả về
    } catch (error: any) {
      dispatch(GetMoviesError(error.message));
      return null;
    }
  };
  const getAllMovies = async (
    typeSlug: string = "phim-moi",
    sortField: string = "modified.time",
    categorySlug: string = "",
    countrySlug: string = "",
    year: string = ""
  ) => {
    console.log(typeSlug, sortField, categorySlug, countrySlug, year);
    dispatch(GetMoviesStart());
    try {
      const response: any = await axios.get(
        `https://ophim17.cc/_next/data/j4bBHnWv9JD18kNQ3njRH/danh-sach/${typeSlug}.json?slug=${typeSlug}&sort_field=${sortField}&category=${categorySlug}&country=${countrySlug}&year=${year}`
      );
      dispatch(GetMoviesSuccess(response.data.pageProps?.data?.items));

      return response.data.pageProps?.data?.items; // Dữ liệu trả về
    } catch (error: any) {
      dispatch(GetMoviesError(error.message));
      return null;
    }
  };
  const getMoviesByKeyword = async (keyword: string) => {
    dispatch(GetMoviesStart());
    try {
      const response: any = await axios.get(
        `https://ophim17.cc/_next/data/j4bBHnWv9JD18kNQ3njRH/tim-kiem.json?keyword=${keyword}`
      );
      dispatch(GetMoviesSuccess(response.data.pageProps?.data?.items));
      return response.data.pageProps?.data?.items; // Dữ liệu trả về
    } catch (error: any) {
      dispatch(GetMoviesError(error.message));
      return null;
    }
  };
  return {
    getMovieNewUpdate,
    getMoviesByTypeSlug,
    getMovieBySlug,
    getCategories,
    getCountries,
    getAllMovies,
    getMoviesByKeyword,
  };
};

export default useMovieApi;
