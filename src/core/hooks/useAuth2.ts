import { Platform } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { auth } from "@/src/config/firebaseConfig";
import { useDispatch } from "react-redux";
import { LoginError, LoginSuccess } from "../store/authSlice";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { useEffect } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/App";
import useToast from "./useToast";

const useAuth2 = () => {
  const { toastSuccess, toastError } = useToast();
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: Platform.select({
      ios: "233511515756-4dauq9qkcbfius75kfhi6ffmaot3gtvn.apps.googleusercontent.com",
    }),
    redirectUri:
      "com.googleusercontent.apps.233511515756-4dauq9qkcbfius75kfhi6ffmaot3gtvn:/oauth2redirect", // Đường dẫn chuyển hướng
  });
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  useEffect(() => {
    loginGoogle();
  }, [response]);
  const loginGoogle = async () => {   
    if (auth.currentUser) {
      const user = auth.currentUser;
      const { email, emailVerified, uid, displayName, photoURL } = user;
      const responsex = { email, emailVerified, uid, displayName, photoURL };
      dispatch(LoginSuccess(responsex));
      toastSuccess("Login Goole", "Đăng nhập thành công.");
      return navigation.navigate("HomeScreen");
      // Nếu đã đăng nhập, không cần thực hiện lại
    }
    if (response?.type === "success") {
      const { authentication } = response;
      const { idToken }: any = authentication;
      // Tạo credential từ idToken
      const credential = GoogleAuthProvider.credential(idToken);
      try {
        // Đăng nhập với credential
        const userCredential = await signInWithCredential(auth, credential);
        const user = userCredential?.user;
        const { email, emailVerified, uid, displayName, photoURL } = user;
        const response = { email, emailVerified, uid, displayName, photoURL };
        dispatch(LoginSuccess(response));
        toastSuccess("Login Goole", "Đăng nhập thành công.");
        return navigation.navigate("HomeScreen");
      } catch (error: any) {
        return dispatch(LoginError(error?.message));
      }
    }
    if(response?.type === "cancel") {
      dispatch(LoginError("Login failed"));
      toastError("Login google", 'Đăng nhập thất bại.')
      return navigation.navigate("LoginScreen");
    }
  };
  return { promptAsync };
};
export default useAuth2;
