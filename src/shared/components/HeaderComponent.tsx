import Colors from "@/src/utils/Colors";
import { Box, HamburgerIcon, Menu } from "native-base";
import React, { useState } from "react";
import {
  Pressable,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import InputSearchComponent from "./InputSearchComponent";
export default function HeaderComponent() {
  const [isSearchInput, setIsSearchInput] = useState(false);
  const screenWidth = Dimensions.get("window").width; // Lấy chiều rộng màn hình
  const [isMenuCountry, setIsMenuCountry] = useState(false);
  const [isMenuCategory, setIsMenuCategory] = useState(false);

  const countries: any = [
    { id: 1, countryName: "Trung Quốc", slug: "trung-quoc" },
    { id: 2, countryName: "Thái Lan", slug: "thai-lan" },
    { id: 3, countryName: "Hồng Kong", slug: "hong-kong" },
    { id: 4, countryName: "Hàn Quốc", slug: "han-quoc" },
    { id: 5, countryName: "Anh", slug: "anh" },
    { id: 6, countryName: "Mỹ", slug: "my" },
  ];
  const categories: any = [
    { id: 1, categoryName: "Hành Động", slug: "hanh-dong" },
    { id: 2, categoryName: "Cổ Trang", slug: "co-trang" },
    { id: 3, categoryName: "Chiến Tranh", slug: "chien-tranh" },
    { id: 4, categoryName: "Viễn Tưởng", slug: "vien-tuong" },
    { id: 5, categoryName: "Kinh Dị", slug: "kinh-di" },
    { id: 6, categoryName: "Tình Cảm", slug: "tinh-cam" },
  ];

  const renderItemsCategories = (item: any) => {
    return (
      <TouchableOpacity
        key={item?.id}
        style={{
          flexBasis: "48%",
          backgroundColor: "#3F3F46",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text
          style={{ color: "white", fontSize: 16, textTransform: "capitalize" }}
        >
          {item?.categoryName}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItemsCountries = (item: any) => {
    return (
      <TouchableOpacity
        key={item?.id}
        style={{
          flexBasis: "48%",
          backgroundColor: "#3F3F46",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text
          style={{ color: "white", fontSize: 16, textTransform: "capitalize" }}
        >
          {item?.countryName}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ position: "relative", zIndex: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: Colors.colorBorder,
          padding: 10,
        }}
      >
        <TouchableOpacity>
          <Box w="90%" alignItems="center">
            <Menu
              backgroundColor={Colors.bgPrimary}
              w={screenWidth * 0.9}
              marginTop={4}
              trigger={(triggerProps) => {
                return (
                  <Pressable
                    accessibilityLabel="More options menu"
                    {...triggerProps}
                  >
                    <HamburgerIcon size={8} color={"white"} />
                  </Pressable>
                );
              }}
            >
              <Menu.Item>
                <Text
                  style={{
                    fontSize: 16,
                    color: Colors.textGrey,
                    textTransform: "capitalize",
                  }}
                >
                  Home
                </Text>
              </Menu.Item>
              <TouchableOpacity
                onPress={() => setIsMenuCategory(!isMenuCategory)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 8,
                  marginLeft: 15,
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: Colors.textGrey,
                    textTransform: "capitalize",
                  }}
                >
                  Thể Loại
                </Text>
                <Ionicons
                  name="chevron-down"
                  size={20}
                  color={Colors.textGrey}
                />
              </TouchableOpacity>
              {isMenuCategory && (
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    paddingLeft: 24,
                    gap: 10,
                  }}
                >
                  {categories.map((item: any) => {
                    return renderItemsCategories(item);
                  })}
                </View>
              )}
              <TouchableOpacity
                onPress={() => setIsMenuCountry(!isMenuCountry)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 8,
                  marginLeft: 15,
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: Colors.textGrey,
                    textTransform: "capitalize",
                  }}
                >
                  Quốc Gia
                </Text>
                <Ionicons
                  name="chevron-down"
                  size={20}
                  color={Colors.textGrey}
                />
              </TouchableOpacity>
              {isMenuCountry && (
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    paddingLeft: 24,
                    gap: 10,
                  }}
                >
                  {countries.map((item: any) => {
                    return renderItemsCountries(item);
                  })}
                </View>
              )}
              <Menu.Item>
                <Text
                  style={{
                    fontSize: 16,
                    color: Colors.textGrey,
                    textTransform: "capitalize",
                  }}
                >
                  Phim mới
                </Text>
              </Menu.Item>
              <Menu.Item>
                <Text
                  style={{
                    fontSize: 16,
                    color: Colors.textGrey,
                    textTransform: "capitalize",
                  }}
                >
                  Phim bộ
                </Text>
              </Menu.Item>
              <Menu.Item>
                <Text
                  style={{
                    fontSize: 16,
                    color: Colors.textGrey,
                    textTransform: "capitalize",
                  }}
                >
                  Phim chiếu rạp
                </Text>
              </Menu.Item>
            </Menu>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>
            JOYX
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <View>
            {!isSearchInput && (
              <TouchableOpacity
                onPress={() => setIsSearchInput(!isSearchInput)}
              >
                <Ionicons name="search" color={"white"} size={32} />
              </TouchableOpacity>
            )}
            {isSearchInput && (
              <TouchableOpacity
                onPress={() => setIsSearchInput(!isSearchInput)}
              >
                <Ionicons name="close" color={"white"} size={32} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity>
            <Ionicons name="person-circle" color={"white"} size={32} />
          </TouchableOpacity>
        </View>
      </View>
      {/* input search */}
      {isSearchInput && (
       <InputSearchComponent/>
      )}
    </View>
  );
}
