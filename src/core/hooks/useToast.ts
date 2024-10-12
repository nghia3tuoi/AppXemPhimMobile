import Toast from "react-native-toast-message";

const useToast = () => {
  const toastSuccess = (title:string, content:string) => {
    Toast.show({
      text1: title,
      text2: content,
      position: "top",
      type: "success",
      visibilityTime: 3000,
      autoHide: true,
      
    });
  };
  const toastError = (title:string, content:string) => {
    Toast.show({
        text1: title,
        text2: content,
        position: "top",
        type: "error",
        visibilityTime: 3000,
        autoHide: true,
      });
  };
  return {toastSuccess, toastError};
};
export default useToast;
