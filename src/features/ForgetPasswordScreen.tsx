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
export default function ForgetPasswordScreen({ navigation }: any) {
  const { forgotPassword } = useAuth();
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
              initialValues={{ email: "", password: "", remember: false }} // Giá trị ban đầu cho form
              validate={(values: any) => {
                const errors: any = {};
                if (!values.email) {
                  errors.email = "Required Email";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }

                return errors;
              }}
              onSubmit={async (values: any) => {
                if (values === null) return;
                await forgotPassword(values.email); // Xử lý đăng nhập hoặc logic khác khi form submit
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
                    Quên mật khẩu
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
                  <View
                    style={{
                      alignSelf: "flex-end",
                      marginBottom: 16,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("LoginScreen")}
                    >
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
                      Lấy lại mật khẩu
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
