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
import React, { useState } from "react";
import CheckBox from "expo-checkbox";
import { Formik } from "formik";
import useAuth from "../core/hooks/useAuth";
export default function RegisterScreen({navigation}:any) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const {register} = useAuth();
  const handleToggleVisiblePassword = (): void => {
    setPasswordVisible(!passwordVisible);
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
                email: "",
                password: "",
                passwordConfirm: "",
              
              }}
              validate={(values:any) => {
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

                if (!values.passwordConfirm) {
                  errors.passwordConfirm = "Required Password"; // Kiểm tra nếu không có giá trị mật khẩu xác nhận
                } else if (
                  !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(
                    values.passwordConfirm
                  )
                ) {
                  errors.passwordConfirm =
                    "Password must be at least 6 characters long and contain [A-Z], [a-z], and [0-9]"; // Kiểm tra định dạng mật khẩu
                } else if (values.password !== values.passwordConfirm) {
                  errors.passwordConfirm = "Passwords do not match"; // Kiểm tra nếu hai mật khẩu không khớp
                }

                return errors;
              }} // Giá trị ban đầu cho form
              onSubmit={(values: any) => {
                const {email, password, passwordConfirm} = values;
                register(email, password, passwordConfirm);
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
                    Đăng kí
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
                      Mật khẩu
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <TextInput
                        textContentType="newPassword"
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
                  <View style={{ marginBottom: 16 }}>
                    <Text
                      style={{
                        color: Colors.textWhite,
                        fontSize: 16,
                        marginBottom: 5,
                      }}
                    >
                      Xác nhận mật khẩu
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <TextInput
                        textContentType="newPassword"
                        onChangeText={handleChange("passwordConfirm")} // Cập nhật giá trị password trong Formik
                        onBlur={handleBlur("passwordConfirm")}
                        value={values.passwordConfirm} // Giá trị hiện tại từ Formik
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
                    {errors.passwordConfirm && touched.passwordConfirm && (
                      <Text
                        style={{
                          color: "red",
                          flexShrink: 1,
                          marginBottom: 6,
                          fontSize: 12,
                        }}
                      >
                        {errors.passwordConfirm.toString()}
                      </Text>
                    )}
                  </View>
                  <View
                    style={{
                      alignSelf: "flex-end",
                      marginBottom: 14,
                    }}
                  >
                    <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
                      <Text style={{ color: Colors.primary, fontSize: 16 }}>
                        Đăng nhập 
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
                      Đăng Ký
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
                  <TouchableOpacity style={{ marginBottom: 16 }}>
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
