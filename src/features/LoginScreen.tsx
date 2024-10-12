import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../utils/Colors";
import React, { useEffect, useState } from "react";
import CheckBox from "expo-checkbox";
import { Formik } from "formik";
import useAuth from "../core/hooks/useAuth";
import useAsyncStoreRage from "../core/hooks/useAsyncStoreRage";
import { useSelector } from "react-redux";
import useAuth2 from "../core/hooks/useAuth2";

export default function LoginScreen({ navigation }: any) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [isRemember, setIsRemember] = useState(false);
  const [loginAsyncStoreRage, setLoginAsyncStoreRage] = useState<any>();
  const { login } = useAuth();
  const { getLogin } = useAsyncStoreRage();
  const { promptAsync } = useAuth2();
  const selectUser = useSelector((state: any) => state?.auth?.user);
  //
  useEffect(() => {
    handleGetLoginStoreRage();
  }, []);
  //
  const handleLogin = async (values: any) => {
    const { email, password } = values;
    const response = await login(email, password, isRemember);
    console.log(selectUser);
    if (response !== null) {
      return navigation.navigate("HomeScreen");
    }
  };
  const handleToggleVisiblePassword = (): void => {
    setPasswordVisible(!passwordVisible);
  };
  const handleGetLoginStoreRage = async () => {
    const login = await getLogin();
    setLoginAsyncStoreRage(login);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.bgMain,
      }}
    >
      <View style={{ marginBottom: 16, marginTop: 20 }}>
        <Text
          style={{
            color: Colors.textWhite,
            fontSize: 30,
            textAlign: "center",
            paddingTop: 30,
            fontWeight: "bold",
          }}
        >
          JOYX
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              marginBottom: 16,
            }}
          >
            <Formik
              initialValues={{
                email: loginAsyncStoreRage?.email.toString(),
                password: loginAsyncStoreRage?.password.toString(),
              }} // Giá trị ban đầu cho form
              enableReinitialize
              validate={(values: any) => {
                const errors: any = {};
                if (!values.email) {
                  errors.email = "Required Email";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                // Kiểm tra mật khẩu
                if (!values.password) {
                  errors.password = "Required Password";
                } else if (
                  !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(
                    values.password
                  )
                ) {
                  errors.password =
                    "Password must least 6 character contain is [A-Z]-[a-z]-[0-9]";
                }
                return errors;
              }}
              onSubmit={async (values: any) => {
                await handleLogin(values);
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                setFieldValue,
              }) => (
                <View
                  style={{
                    backgroundColor: Colors.bgPrimary,
                    padding: 20,
                    borderRadius: 5,
                    width: "80%",
                  }}
                >
                  <Text
                    style={{
                      color: Colors.textWhite,
                      fontSize: 18,
                      fontWeight: "bold",
                      textAlign: "center",
                      marginBottom: 14,
                    }}
                  >
                    Đăng nhập
                  </Text>
                  <View style={{ marginBottom: 16 }}>
                    <Text
                      style={{
                        color: Colors.textWhite,
                        fontSize: 16,
                        marginBottom: 5,
                      }}
                    >
                      Email
                    </Text>
                    <TextInput
                      onChangeText={handleChange("email")} // Cập nhật giá trị email trong Formik
                      onBlur={handleBlur("email")}
                      value={values.email} // Giá trị hiện tại từ Formik
                      keyboardType="email-address" // Chọn bàn phím phù hợp
                      style={{
                        padding: 10,
                        fontSize: 16,
                        backgroundColor: "white",
                        borderRadius: 5,
                      }}
                    />
                    {errors.email && touched.email && (
                      <Text
                        style={{
                          color: "red",
                          flexShrink: 1,
                          marginBottom: 6,
                          fontSize: 12,
                        }}
                      >
                        {errors.email.toString()}
                      </Text>
                    )}
                  </View>
                  <View style={{ marginBottom: 16 }}>
                    <Text
                      style={{
                        color: Colors.textWhite,
                        fontSize: 16,
                        marginBottom: 5,
                      }}
                    >
                      Password
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <TextInput
                        onChangeText={handleChange("password")} // Cập nhật giá trị password trong Formik
                        onBlur={handleBlur("password")}
                        value={values.password} // Giá trị hiện tại từ Formik
                        secureTextEntry={passwordVisible} // Đặt input ở dạng password
                        style={{
                          flex: 1,
                          padding: 10,
                          paddingRight: 35,
                          fontSize: 16,
                          backgroundColor: "white",
                          borderRadius: 5,
                          position: "relative",
                        }}
                      />
                      <TouchableOpacity
                        onPress={handleToggleVisiblePassword}
                        style={{ position: "absolute", right: 0, padding: 5 }}
                      >
                        <Ionicons
                          name={
                            !passwordVisible ? "eye-off-sharp" : "eye-sharp"
                          }
                          size={24}
                          color={"black"}
                        />
                      </TouchableOpacity>
                    </View>
                    {errors.password && touched.password && (
                      <Text
                        style={{
                          color: "red",
                          flexShrink: 1,
                          marginBottom: 6,
                          fontSize: 12,
                        }}
                      >
                        {errors.password.toString()}
                      </Text>
                    )}
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 16,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <CheckBox
                        value={isRemember}
                        onValueChange={() => setIsRemember(!isRemember)}
                      />
                      <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                        Ghi nhớ
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("ForgetPasswordScreen")
                      }
                    >
                      <Text style={{ color: Colors.primary, fontSize: 16 }}>
                        Quên mật khẩu
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={{
                      backgroundColor: Colors.primary,
                      alignItems: "center",
                      padding: 10,
                      borderRadius: 5,
                      marginBottom: 16,
                    }}
                  >
                    <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                      Đăng Nhập
                    </Text>
                  </TouchableOpacity>

                  <Text
                    style={{
                      color: Colors.textWhite,
                      fontSize: 14,
                      textAlign: "center",
                      marginBottom: 10,
                    }}
                  >
                    Or Login Method Other:
                  </Text>
                  <TouchableOpacity
                    style={{ marginBottom: 16 }}
                    onPress={async () => {
                      await promptAsync();
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        backgroundColor: "white",
                        padding: 5,
                        borderRadius: 5,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons8-google-48.png")}
                        style={{ width: 30, height: 30 }}
                      />
                      <Text style={{ color: "black", fontSize: 16 }}>
                        Đăng nhập bằng Google
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("RegisterScreen")}
                  >
                    <Text
                      style={{
                        color: Colors.primary,
                        fontSize: 16,
                        textAlign: "center",
                      }}
                    >
                      Bạn chưa có tài khoản?
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      <View
        style={{
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Text
          style={{
            color: Colors.textWhite,
            fontSize: 26,
            fontWeight: "bold",
          }}
        >
          JOYX
        </Text>
        <Text style={{ color: Colors.textWhite }}>
          <Text style={{ fontWeight: "bold", color: Colors.primary }}>
            JOYX
          </Text>
          - Trang web xem phim trực tuyến miễn phí chất lượng cao với giao diện
          trực quan, tốc độ tải trang nhanh, cùng kho phim với hơn 10.000+ phim
          mới, phim hay, luôn cập nhật phim nhanh, hứa hẹn sẽ đem lại phút giây
          thư giãn cho bạn.
        </Text>
      </View>
    </View>
  );
}
