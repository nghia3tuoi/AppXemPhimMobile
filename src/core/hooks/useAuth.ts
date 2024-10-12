import { auth } from "@/src/config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginError, LoginStart, LoginSuccess } from "../store/authSlice";
import useToast from "./useToast";
import useAsyncStoreRage from "./useAsyncStoreRage";

const useAuth = () => {
  const dispatch = useDispatch(); // Gọi hàm dispatch từ Redux
  const { toastSuccess, toastError } = useToast();
  const { saveLogin } = useAsyncStoreRage();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user) {
      } else {
      }
    });
    return () => unsubscribe();
  });

  const register = async (
    email: string,
    password: string,
    passwordConfirm: string
  ) => {
    try {
      if (password !== passwordConfirm) {
        return toastError("Đăng ký", "Mật khẩu xác nhận không khớp.");
      }
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user != null) {
        return toastSuccess("Đăng ký", "Đăng ký thành công!");
      }
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        return toastError("Đăng ký", "Email đã có người sử dụng.");
      } else {
        return toastError("Đăng ký", err.message); // Xử lý các lỗi khác
      }
    }
  };
  const login = async (
    emailUser: any,
    passwordUser: any,
    remember: boolean
  ) => {
    dispatch(LoginStart());
    try {
      // Gọi hàm đăng nhập
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailUser,
        passwordUser
      );
      // Nếu đăng nhập thành công, bạn có thể truy cập thông tin người dùng
      const user = userCredential?.user;
      const { email, emailVerified, uid, displayName, photoURL } = user;
      const response: any = {
        email,
        emailVerified,
        uid,
        displayName,
        photoURL,
      };
      dispatch(LoginSuccess(response));
      //  Save in async storage
      if (remember) {
        await saveLogin(emailUser, passwordUser);
      } else {
        await saveLogin("", "");
      }
      toastSuccess("Đăng nhập", "Đăng nhập thành công.");
      return response;
    } catch (err: any) {
    
      // Xử lý lỗi
      let strError: any = "";
      if (err?.code === "auth/wrong-password") {
        strError = "Mật khẩu không chính xác.";
        toastError("Đăng nhập", "Mật khẩu không chính xác.");
      } else if (err?.code === "auth/user-not-found") {
        strError = "Email không tồn tại.";
        toastError("Đăng nhập", "Email chưa được đăng ký.");
      } else if (err?.code === "auth/invalid-credential") {
        strError = "Thông tin tài khoản không chính xác.";
        toastError("Đăng nhập", "Thông tin tài khoản không chính xác.");
      } else {
        strError = "Đăng nhập không thành công. Vui lòng thử lại.";
        toastError(
          "Đăng nhập",
          "Đăng nhập không thành công. Vui lòng thử lại."
        );
      }
      if (strError != "") {
         dispatch(LoginError(strError));
         return null;
      }
    }
  };
  const forgotPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toastSuccess(
        "Quên mật khẩu",
        "Vui lòng click vào email để lấy lại mật khẩu."
      );
      // Bạn có thể hiển thị thông báo thành công cho người dùng ở đây
    } catch (error) {
      toastError("Quên mật khẩu", "Lấy lại mật khẩu thất bại.");
      // Hiển thị thông báo lỗi cho người dùng nếu cần
    }
  };
  return { register, login, forgotPassword };
};
export default useAuth;
