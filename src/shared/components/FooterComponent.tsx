import Colors from "@/src/utils/Colors";
import { View, Text } from "react-native";

export default function FooterComponent() {
  return (
    <View
      style={{
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        borderColor: '#202022',
        borderWidth:1,
        marginTop: 12,
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
        <Text style={{ fontWeight: "bold", color: Colors.primary }}>JOYX</Text>-
        Trang web xem phim trực tuyến miễn phí chất lượng cao với giao diện trực
        quan, tốc độ tải trang nhanh, cùng kho phim với hơn 10.000+ phim mới,
        phim hay, luôn cập nhật phim nhanh, hứa hẹn sẽ đem lại phút giây thư
        giãn cho bạn.
      </Text>
      <Text style={{ color: Colors.textGrey, padding: 10 }}>
        Contact: nghiabatuoidev@gmail.com
      </Text>
      <View
        style={{
          borderTopColor: Colors.textGrey,
          borderTopWidth: 0.5,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          padding: 5,
        }}
      >
        <Text style={{ color: "white" }}>
          @ 2024 JoyX. All rights reserved.
        </Text>
      </View>
    </View>
  );
}
