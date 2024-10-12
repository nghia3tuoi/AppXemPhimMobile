import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStoreRage = () => {
  const getLogin = async () => {
    try {
      const login = await AsyncStorage.getItem("login");
      if (login !== null) {
        return JSON.parse(login); // Phân tích cú pháp chuỗi JSON thành đối tượng
      }
      return null; // Trả về null nếu không có thông tin đăng nhập
    } catch (error) {
      console.error("Lỗi lấy thông tin:", error);
      return null; // Trả về null hoặc xử lý lỗi khác
    }
  };
  const saveLogin = async (email: string, password: string) => {
    const login = { email, password }; // Đối tượng chứa thông tin đăng nhập
    const jsonValue = JSON.stringify(login); // Chuyển đổi đối tượng thành chuỗi JSON
    await AsyncStorage.setItem("login", jsonValue); // Lưu chuỗi JSON vào AsyncStorage
  };
  return { getLogin, saveLogin };
};
export default useAsyncStoreRage;
