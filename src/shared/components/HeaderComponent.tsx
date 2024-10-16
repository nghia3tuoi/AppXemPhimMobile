import Colors from "@/src/utils/Colors";
import { Box, HamburgerIcon, Menu, Image } from "native-base";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import InputSearchComponent from "./InputSearchComponent";
import useMovieApi from "@/src/core/hooks/useMovieApi";
import { useSelector } from "react-redux";
import useAuth from "@/src/core/hooks/useAuth";
export default function HeaderComponent({ navigation }: any) {
  const [countries, setCountries] = useState<any>(null);
  const [categories, setCategories] = useState<any>(null);
  const [isSearchInput, setIsSearchInput] = useState(false);
  const screenWidth = Dimensions.get("window").width; // Lấy chiều rộng màn hình
  const [isMenuCountry, setIsMenuCountry] = useState(false);
  const [isMenuCategory, setIsMenuCategory] = useState(false);
  const { getCountries, getCategories, getAllMovies } = useMovieApi();
  const selectUser = useSelector((state: any) => state?.auth?.user);
  const { logout } = useAuth();
  useEffect(() => {
    hanldeGetCountries();
    hanldeGetCategories();
  }, []);
  const handleLogout = async () => {
    await logout();
  };
  const handleGetMovies = async (
    typeSlug: string = "phim-moi",
    sortField: string = "modified.time",
    categorySlug: string,
    countrySlug: string,
    year: string
  ) => {
    await getAllMovies(typeSlug, sortField, categorySlug, countrySlug, year);
  };
  const hanldeGetCountries = async () => {
    const countries = await getCountries();
    setCountries(countries);
  };
  const hanldeGetCategories = async () => {
    const categories = await getCategories();
    setCategories(categories);
  };

  const renderItemsCountries = (item: any, index: any) => {
    return (
      <Menu.Item
        onPress={async () => {
          await handleGetMovies(
            "phim-moi",
            "modified.time",
            "",
            item?.slug,
            ""
          );
          navigation.navigate("ListMoviesScreen", {
            typeSlugRoute: "phim-moi",
            countryItem: item,
          });
        }}
        key={index}
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
          {item?.name.trim()}
        </Text>
      </Menu.Item>
    );
  };
  const renderItemsCategories = (item: any, index: any) => {
    return (
      <Menu.Item
        onPress={async () => {
          await handleGetMovies(
            "phim-moi",
            "modified.time",
            item?.slug,
            "",
            ""
          );
          navigation.navigate("ListMoviesScreen", {
            typeSlugRoute: "phim-moi",
            categoryItem: item,
          });
        }}
        key={index}
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
          {item?.name.trim()}
        </Text>
      </Menu.Item>
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
              <Menu.Item onPress={() => navigation.navigate("HomeScreen")}>
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
              {isMenuCategory && categories && (
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    paddingLeft: 24,
                    gap: 10,
                  }}
                >
                  {categories.map((item: any, index: any) => {
                    return renderItemsCategories(item, index);
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
              {isMenuCountry && countries && (
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    paddingLeft: 24,
                    gap: 10,
                  }}
                >
                  {countries.map((item: any, index: any) => {
                    return renderItemsCountries(item, index);
                  })}
                </View>
              )}
              <Menu.Item
                onPress={async () => {
                  await handleGetMovies(
                    "phim-moi",
                    "modified.time",
                    "",
                    "",
                    ""
                  );
                  navigation.navigate("ListMoviesScreen", {
                    typeSlugItem: { slug: "phim-moi", name: "Phim Mới" },
                  });
                }}
              >
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
              <Menu.Item
                onPress={async () => {
                  await handleGetMovies("phim-bo", "modified.time", "", "", "");
                  navigation.navigate("ListMoviesScreen", {
                    typeSlugItem: { slug: "phim-bo", name: "Phim Bộ" },
                  });
                }}
              >
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
              <Menu.Item
                onPress={async () => {
                  await handleGetMovies("phim-le", "modified.time", "", "", "");
                  navigation.navigate("ListMoviesScreen", {
                    typeSlugItem: { slug: "phim-le", name: "Phim Lẻ" },
                  });
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: Colors.textGrey,
                    textTransform: "capitalize",
                  }}
                >
                  Phim Lẻ
                </Text>
              </Menu.Item>
              <Menu.Item
                onPress={async () => {
                  await handleGetMovies(
                    "hoat-hinh",
                    "modified.time",
                    "",
                    "",
                    ""
                  );
                  navigation.navigate("ListMoviesScreen", {
                    typeSlugItem: { slug: "hoat-hinh", name: "Anime" },
                  });
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: Colors.textGrey,
                    textTransform: "capitalize",
                  }}
                >
                  Phim Anime
                </Text>
              </Menu.Item>
            </Menu>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
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
          {/* user setting */}
          <Box>
            <Menu
              backgroundColor={Colors.bgPrimary}
              w={screenWidth * 0.5}
              marginTop={4}
              borderRadius={5}
              trigger={(triggerProps) => {
                return (
                  <Pressable
                    accessibilityLabel="More options menu"
                    {...triggerProps}
                  >
                    {!selectUser?.photoURL && (
                      <Ionicons
                        name="person-circle"
                        color={"white"}
                        size={34}
                      />
                    )}
                    {selectUser?.photoURL && (
                      <Image
                        style={{ width: 32, height: 32, borderRadius: 50 }}
                        source={{ uri: selectUser?.photoURL }}
                        alt={selectUser?.displayName}
                      />
                    )}
                  </Pressable>
                );
              }}
            >
              <Box style={{ flex: 1, alignItems: "center" }}>
                {!selectUser?.photoURL && (
                  <Ionicons name="person-circle" color={"white"} size={90} />
                )}
                {selectUser?.photoURL && (
                  <Image
                    style={{ width: 70, height: 70, borderRadius: 50 }}
                    source={{ uri: selectUser?.photoURL }}
                    alt={selectUser?.displayName}
                  />
                )}
              </Box>
              <Menu.Item
                style={{
                  borderBottomColor: Colors.textGrey,
                  borderBottomWidth: 0.5,
                }}
              >
                <Text
                  style={{
                    color: Colors.textGrey,
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {selectUser?.displayName}
                </Text>
              </Menu.Item>
              <Menu.Item onPress={()=>navigation.navigate('FavoriteMoviesScreen')}
                style={{
                  justifyContent: "center",
                  borderBottomColor: Colors.textGrey,
                  borderBottomWidth: 0.5,
                }}
              >
                <Ionicons name="star" size={20} color={Colors.textWhite} />
                <Text
                  style={{
                    color: Colors.textWhite,
                    fontSize: 16,
                    flexDirection: "row",
                    alignItems: "center",
                    fontWeight: "500",
                  }}
                >
                  Tủ Phim
                </Text>
              </Menu.Item>
              <Menu.Item
                style={{ justifyContent: "center" }}
                onPress={async () => {
                  await handleLogout();
                  navigation.navigate("LoginScreen");
                }}
              >
                <Ionicons
                  name="log-out-outline"
                  size={20}
                  color={Colors.textWhite}
                />
                <Text
                  style={{
                    color: Colors.textWhite,
                    fontSize: 16,
                    flexDirection: "row",
                    alignItems: "center",
                    fontWeight: "500",
                  }}
                >
                  Đăng xuất
                </Text>
              </Menu.Item>
            </Menu>
          </Box>
        </View>
      </View>
      {/* input search */}
      {isSearchInput && <InputSearchComponent naviagtion={navigation} />}
    </View>
  );
}
