import Colors from "@/src/utils/Colors";
import { TextInput, View, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCallback, useState } from "react";
import { debounce } from "lodash";
export default function InputSearchComponent() {
  const [keyword, setKeyword] = useState("");
  const handleSearchInput = useCallback(
    debounce((value: any) => {
      if (value.trim() === "") {
        return;
      }
      setKeyword(value);
      console.log("Tìm kiếm với:", value);
      // Thực hiện logic tìm kiếm ở đây
    }, 500), // Thời gian debounce (500ms)
    []
  );
  return (
    <View
      style={{
        position: "absolute",
        top: "100%",
        width: "100%",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          borderColor: Colors.textGrey,
          borderWidth: 0.5,
        }}
      >
        <TextInput
          style={{
            backgroundColor: Colors.bgPrimary,
            padding: 12,
            position: "relative",
            color: Colors.textWhite,
            fontSize: 16,
          }}
          placeholder="Tìm kiếm ..."
          placeholderTextColor={Colors.textGrey}
          onChangeText={(value) => handleSearchInput(value)}
      
        />
        <TouchableOpacity
          onPress={() => console.log(123)}
          style={{ position: "absolute", right: 0, padding: 5 }}
        >
          <Ionicons name="search" size={26} color={"white"} />
        </TouchableOpacity>
      </View>
      {keyword && (
        <View style={{ backgroundColor: "#0A0706", opacity: 0.9 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              borderBottomColor: Colors.textGrey,
              borderWidth: 0.5,
              padding: 12,
            }}
          >
            <View>
              <Image
                source={{
                  uri: "https://image.motchilltv.my/motchill/khanh-du-nien-phan-2-x500.webp",
                }}
                style={{ width: 40, height: 70, resizeMode: "contain" }}
              />
            </View>
            <View style={{ alignItems: "center", flex: 1 }}>
              <Text
                style={{
                  color: Colors.textWhite,
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Khánh Dư Niên
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              borderBottomColor: Colors.textGrey,
              borderWidth: 0.5,
              padding: 12,
            }}
          >
            <View>
              <Image
                source={{
                  uri: "https://image.motchilltv.my/motchill/khanh-du-nien-phan-2-x500.webp",
                }}
                style={{ width: 40, height: 70, resizeMode: "contain" }}
              />
            </View>
            <View style={{ alignItems: "center", flex: 1 }}>
              <Text
                style={{
                  color: Colors.textWhite,
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Khánh Dư Niên
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              borderBottomColor: Colors.textGrey,
              borderWidth: 0.5,
              padding: 12,
            }}
          >
            <View>
              <Image
                source={{
                  uri: "https://image.motchilltv.my/motchill/khanh-du-nien-phan-2-x500.webp",
                }}
                style={{ width: 40, height: 70, resizeMode: "contain" }}
              />
            </View>
            <View style={{ alignItems: "center", flex: 1 }}>
              <Text
                style={{
                  color: Colors.textWhite,
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Khánh Dư Niên
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              borderBottomColor: Colors.textGrey,
              borderWidth: 0.5,
              padding: 12,
            }}
          >
            <View>
              <Image
                source={{
                  uri: "https://image.motchilltv.my/motchill/khanh-du-nien-phan-2-x500.webp",
                }}
                style={{ width: 40, height: 70, resizeMode: "contain" }}
              />
            </View>
            <View style={{ alignItems: "center", flex: 1 }}>
              <Text
                style={{
                  color: Colors.textWhite,
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Khánh Dư Niên
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
