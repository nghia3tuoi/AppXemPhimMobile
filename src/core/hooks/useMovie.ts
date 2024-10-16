import { db } from "@/src/config/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import useToast from "./useToast";
import { useDispatch, useSelector } from "react-redux";
import {
  GetMoviesFavoriteError,
  GetMoviesFavoriteStart,
  GetMoviesFavoriteSuccess,
} from "../store/movieSlice";

const useMovie = () => {
  const { toastSuccess, toastError } = useToast();
  const dispatch = useDispatch();
  const addFavoriteMovie = async (userId: any, movie: any) => {
    try {
      if (!movie || !userId) return;
      const {
        _id,
        slug,
        name,
        origin_name,
        episode_current,
        lang,
        quality,
        episode_total,
      } = movie;
      const thumb_url = movie?.thumb_url.split("/").pop(); // Tách URL bằng dấu '/' và lấy phần tử cuối cùng
      const movieCustom = {
        _id,
        slug,
        name,
        origin_name,
        episode_current,
        lang,
        quality,
        thumb_url,
        episode_total,
      };
      // Kiểm tra xem movie đã tồn tại chưa
      const querySnapshot: any = await checkMovieExist(userId, _id);

      if (!querySnapshot.empty) {
        toastError("Tủ Phim", "Phim này đã có trong tủ phim!");
        return;
      }
      //
      // Tạo ID duy nhất cho tài liệu
      const uniqueId = `${userId}_${_id}`; // Kết hợp userId và movieId
      const docRef = doc(db, "favorites", uniqueId);
      await setDoc(docRef, {
        userId: userId,
        movie: movieCustom,
      });

      toastSuccess("Tủ Phim", "Thêm vào tủ phim thành công!");
    } catch (error: any) {

      toastError("Tủ Phim", "Thêm vào tủ phim thất bại!");
    }
  };
  // Hàm xóa movieFavorite
  const removeFavoriteMovieById = async (userId:any, movieId :any) => {
    // Tạo ID duy nhất cho tài liệu
    const uniqueId = `${userId}_${movieId}`; // Kết hợp userId và movieId
    const docRef = doc(db, "favorites", uniqueId); // Tham chiếu đến document cần xóa

    try {
      await deleteDoc(docRef); // Xóa tài liệu
      toastSuccess('Tủ Phim', "Bỏ yêu thích phim thành công.")
    } catch (error) {
      toastError('Tủ Phim', "Bỏ yêu thích phim thất bại.")
    }
  };
  const getFavoriteMoviesByUserId = async (userId: any) => {
    if (!userId) return;
    const favoriteMovies: any = [];
    const q = query(collection(db, "favorites"), where("userId", "==", userId));
    dispatch(GetMoviesFavoriteStart());
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        favoriteMovies.push(doc.data().movie);
      });
      if (!favoriteMovies) return [];
      dispatch(GetMoviesFavoriteSuccess(favoriteMovies));
      return favoriteMovies;
    } catch (error) {
      dispatch(GetMoviesFavoriteError(error));
      return [];
    }
  };
  const checkMovieExist = async (userId: any, _id: any) => {
    if (!userId || !_id) {
      return;
    }
    const querySnapshot = await getDocs(
      query(
        collection(db, "favorites"),
        where("userId", "==", userId),
        where("movie._id", "==", _id)
      )
    );
    return querySnapshot;
  };
  const getFavoriteMovie = async (userId: any, movieId: any) => {
    const docRef = doc(db, "favorites", `${userId}_${movieId}`); // Giả sử bạn đã tạo ID duy nhất cho tài liệu theo định dạng userId_movieId
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }; // Trả về dữ liệu của item
    } else {
      return null; // Không có item yêu thích
    }
  };
  return {
    addFavoriteMovie,
    removeFavoriteMovieById,
    getFavoriteMoviesByUserId,
    checkMovieExist,
    getFavoriteMovie,
  };
};
export default useMovie;
