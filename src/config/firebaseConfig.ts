import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth } from "firebase/auth";
import * as firebaseAuth from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9sc3QuskJRvjRjGoWcwURXCWqGfbUiK0",
  authDomain: "appxemphimmobile.firebaseapp.com",
  projectId: "appxemphimmobile",
  storageBucket: "appxemphimmobile.appspot.com",
  messagingSenderId: "166272908484",
  appId: "1:166272908484:web:79c82c394deb77f06e9d91",
  measurementId: "G-HZF79BBJWR"
};

let app;

// Kiểm tra xem Firebase đã được khởi tạo hay chưa
if (!app) {
  app = initializeApp(firebaseConfig);
}

// Khởi tạo Firestore
const db = getFirestore(app);

// Khởi tạo auth với persistence
const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence;
export const auth = initializeAuth(app, {
  persistence: reactNativePersistence(AsyncStorage),
});

// Xuất db
export { db };