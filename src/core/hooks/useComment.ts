import { db } from "@/src/config/firebaseConfig";
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import useToast from "./useToast";

const useComment = () => {
  const { toastSuccess, toastError } = useToast();
  const addComment = async (movieId: any, user: any, commentText: any) => {
    if (commentText.trim()) {
      try {
        await addDoc(collection(db, "comments"), {
          movieId,
          user,
          commentText,
          timestamp: serverTimestamp(),
        });
        toastSuccess("Bình Luận", "Bình luận thành công.");
      } catch (error) {

        toastError("Bình Luận", "Có lỗi khi bình luận.");
      }
    }
  };
  const getAllComments = async (movieId:any) => {
    try {
        if(!movieId) return;
      // Tạo truy vấn để lấy tất cả các bình luận của movieId, sắp xếp theo timestamp
      const q = query(
        collection(db, "comments"),
        where("movieId", "==", movieId),
        orderBy("timestamp", "asc")
      );
  
      // Lấy dữ liệu từ Firestore
      const querySnapshot = await getDocs(q);
  
      // Chuyển dữ liệu thành mảng các bình luận
      const comments = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      return comments;
    } catch (error) {
      return [];
    }
  };
  return {addComment, getAllComments}
};
export default useComment;
