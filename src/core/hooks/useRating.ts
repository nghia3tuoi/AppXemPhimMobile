import { db } from "@/src/config/firebaseConfig";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import useToast from "./useToast";

const useRating = () => {
  const { toastSuccess, toastError } = useToast();
  const getRatingsByMovieId = async (movieId: string, userId:any) => {
    try {
      if (!movieId) return null;

      // Truy vấn để lấy tất cả các đánh giá của movieId
      const ratingsRef = collection(db, "ratings");
      const q = query(ratingsRef, where("movieId", "==", movieId));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        return { ratings: [], averageRating: 0, totalRatings: 0 };
      }

      const ratings: any[] = [];
      let userRating = null;

      // Duyệt qua từng tài liệu và thêm vào mảng ratings
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        ratings.push(data.point); // Giả sử bạn có thuộc tính "point" trong từng đánh giá

        // Kiểm tra xem đánh giá có thuộc về userId không
        if (data.userId === userId) {
          userRating = data.point; // Lưu lại rating của userId
        }
      });

      // Tính tổng và trung bình
      const totalRatings = ratings.length;
      const averageRating =
        totalRatings > 0
          ? ratings.reduce((sum, rating) => sum + rating, 0) / totalRatings
          : 0;
      return { averageRating, totalRatings, userRating }; // Trả về kết quả
    } catch (error) {
      return null;
    }
  };

  const addRating = async (userId: string, movieId: string, point: number) => {
    try {
      if (!userId || !movieId || point === undefined) return;

      // Tạo ratingId từ sự kết hợp của userId và movieId
      const ratingId = `${userId}_${movieId}`;

      const ratingData = {
        ratingId,
        userId,
        movieId,
        point,
      };

      // Thêm dữ liệu vào Firestore với ratingId là ID của tài liệu
      await setDoc(doc(db, "ratings", ratingId), ratingData);
      toastSuccess("Đánh Giá", "Đánh giá thành công.");
    } catch (error) {
      toastError("Đánh Giá", "Đánh giá thất bại.");
    }
  };
  const checkUserHasRated = async (userId: string, movieId: string) => {
    try {
      if (!userId || !movieId) return false;

      // Truy vấn để kiểm tra xem có đánh giá nào của userId cho movieId không
      const ratingsRef = collection(db, "ratings");
      const q = query(
        ratingsRef,
        where("userId", "==", userId),
        where("movieId", "==", movieId)
      );
      const querySnapshot = await getDocs(q);

      // Nếu có ít nhất một tài liệu trả về, nghĩa là người dùng đã đánh giá
      if (!querySnapshot.empty) {
        toastError("Đánh Giá", "Bạn đã đánh giá movie này rồi.");
        return true;
      } else {
      
        return false;
      }
    } catch (error) {
   
      return false;
    }
  };
  return { addRating, getRatingsByMovieId, checkUserHasRated };
};
export default useRating;
