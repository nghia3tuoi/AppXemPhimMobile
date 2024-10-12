import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  FlatList,
  ImageBackground,
} from "react-native";
import HeaderComponent from "../shared/components/HeaderComponent";
import Colors from "../utils/Colors";
import { ScrollView } from "native-base";
import BreadcumbComponent from "../shared/components/BreadcumnComponent";
import FooterComponent from "../shared/components/FooterComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import Paginationcomponent from "../shared/components/PaginationComponent";

export default function ListMoviesScreen() {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState();
  const [country, setCountry] = useState();
  const [year, setYear] = useState();

  const [isSelectedSort, setIsSelectedSort] = useState(false);
  const [isSelectedCategory, setIsSelectedCategory] = useState(false);
  const [isSelectedCountry, setIsSelectedCountry] = useState(false);
  const [isSelectedYear, setIsSelectedYear] = useState(false);

  const movies = [
    {
      id: 1,
      movieName: "Movie 1",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 2,
      movieName: "Movie 2",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 3,
      movieName: "Movie 3",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
    {
      id: 4,
      movieName: "Movie 4",
      imageUrl:
        "https://image.motchilltv.my/motchill/luu-thuy-dieu-dieu-x350.webp",
    },
  ];

  const handleToggleSelectedSort = () => {
    setIsSelectedSort(!isSelectedSort);
    //
    if (isSelectedYear === true) {
      setIsSelectedYear(false);
    }
    if (isSelectedCategory === true) {
      setIsSelectedCategory(false);
    }
    if (isSelectedCountry === true) {
      setIsSelectedCountry(false);
    }
  };
  const handleToggleSelectedCategory = () => {
    setIsSelectedCategory(!isSelectedCategory);
    if (isSelectedSort === true) {
      setIsSelectedSort(false);
    }
    if (isSelectedYear === true) {
      setIsSelectedYear(false);
    }
    if (isSelectedCountry === true) {
      setIsSelectedCountry(false);
    }
  };
  const handleToggleSelectedCountry = () => {
    setIsSelectedCountry(!isSelectedCountry);
    if (isSelectedSort === true) {
      setIsSelectedSort(false);
    }
    if (isSelectedYear === true) {
      setIsSelectedYear(false);
    }
    if (isSelectedCategory === true) {
      setIsSelectedCategory(false);
    }
  };
  const handleToggleSelectedYear = () => {
    setIsSelectedYear(!isSelectedYear);
    if (isSelectedSort === true) {
      setIsSelectedSort(false);
    }
    if (isSelectedCategory === true) {
      setIsSelectedCategory(false);
    }
    if (isSelectedCountry === true) {
      setIsSelectedCountry(false);
    }
  };

  const renderItemMovies = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          marginLeft: 12,
          marginBottom: 12,
          backgroundColor: Colors.bgPrimary,
        }}
      >
        <View>
          <ImageBackground
            source={{ uri: item?.imageUrl }}
            style={{ height: 200 }}
          >
            <Text
              style={{
                color: Colors.textWhite,
                fontSize: 14,
                fontWeight: "bold",
                backgroundColor: Colors.primary,
                alignSelf: "flex-start",
                padding: 5,
                marginTop: 10,
              }}
            >
              Full 40/40
            </Text>
          </ImageBackground>
          <View style={{ padding: 10 }}>
            <Text
              style={{
                color: Colors.textWhite,
                fontWeight: "bold",
                textTransform: "capitalize",
                fontSize: 16,
              }}
            >
              Hố Sâu Đói Khát
            </Text>
            <Text
              style={{
                color: Colors.textGrey,
                textTransform: "capitalize",
                fontWeight: "bold",
                marginTop: 6,
              }}
            >
              The Platform 2
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (isSelectedSort === true) {
          setIsSelectedSort(false);
        }
        if (isSelectedYear === true) {
          setIsSelectedYear(false);
        }
        if (isSelectedCategory === true) {
          setIsSelectedCategory(false);
        }
        if (isSelectedCountry === true) {
          setIsSelectedCountry(false);
        }
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.bgMain,
          paddingTop: 40,
          padding: 12,
        }}
      >
        <HeaderComponent />
        <ScrollView style={{ flex: 1 }}>
          <BreadcumbComponent />
          <View style={{ flex: 1, zIndex: 10 }}>
            <View>
              <View
                style={{
                  borderBottomColor: Colors.colorBorder,
                  borderBottomWidth: 1,
                  alignItems: "center",
                  padding: 12,
                }}
              >
                <Text
                  style={{
                    color: Colors.textWhite,
                    fontSize: 20,
                    fontWeight: "500",
                  }}
                >
                  TRUNG QUỐC
                </Text>
              </View>
              {/* Tool Search */}
              <View
                style={{
                  marginTop: 12,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 10,
                  position: "relative",
                  zIndex: 10,
                }}
              >
                <View style={{ flexBasis: "48%", zIndex: 10 }}>
                  <TouchableOpacity
                    onPress={handleToggleSelectedSort}
                    style={{
                      backgroundColor: Colors.bgPrimary,
                      padding: 12,
                      borderRadius: 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                      {sort === "" ? "-- Sắp Xếp -- " : sort}
                    </Text>
                    <Ionicons
                      name="chevron-down"
                      color={Colors.textWhite}
                      size={20}
                    />
                  </TouchableOpacity>
                  {isSelectedSort && (
                    <View
                      style={{
                        backgroundColor: Colors.bgPrimary,
                        borderWidth: 0.5,
                        borderColor: "white",
                        borderRadius: 5,
                        position: "absolute",
                        top: "100%",
                        width: "100%",
                      }}
                    >
                      <TouchableHighlight
                        onPressIn={() => {
                          setSort("");
                          handleToggleSelectedSort();
                        }}
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textGrey, fontSize: 14 }}>
                          -- Sắp Xếp --
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        onPressIn={() => {
                          setSort("Năm Sản Xuất");
                          handleToggleSelectedSort();
                        }}
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Năm Sản Xuất
                        </Text>
                      </TouchableHighlight>
                    </View>
                  )}
                </View>
                <View
                  style={{ flexBasis: "48%", position: "relative", zIndex: 10 }}
                >
                  <TouchableOpacity
                    onPress={handleToggleSelectedCategory}
                    style={{
                      backgroundColor: Colors.bgPrimary,
                      padding: 12,
                      borderRadius: 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                      -- Thể Loại --
                    </Text>
                    <Ionicons
                      name="chevron-down"
                      color={Colors.textWhite}
                      size={20}
                    />
                  </TouchableOpacity>
                  {isSelectedCategory && (
                    <ScrollView
                      nestedScrollEnabled={true}
                      style={{
                        backgroundColor: Colors.bgPrimary,
                        borderWidth: 0.5,
                        borderColor: "white",
                        borderRadius: 5,
                        position: "absolute",
                        top: "100%",
                        width: "100%",
                        height: 300,
                      }}
                    >
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textGrey, fontSize: 14 }}>
                          -- Thể Loại --
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Tình Cảm
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                    </ScrollView>
                  )}
                </View>
                <View style={{ flexBasis: "48%", position: "relative" }}>
                  <TouchableOpacity
                    onPress={handleToggleSelectedCountry}
                    style={{
                      backgroundColor: Colors.bgPrimary,
                      padding: 12,
                      borderRadius: 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                      -- Quốc Gia --
                    </Text>
                    <Ionicons
                      name="chevron-down"
                      color={Colors.textWhite}
                      size={20}
                    />
                  </TouchableOpacity>
                  {isSelectedCountry && (
                    <ScrollView
                      nestedScrollEnabled={true}
                      style={{
                        backgroundColor: Colors.bgPrimary,
                        borderWidth: 0.5,
                        borderColor: "white",
                        borderRadius: 5,
                        position: "absolute",
                        top: "100%",
                        width: "100%",
                        height: 300,
                      }}
                    >
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textGrey, fontSize: 14 }}>
                          -- Quốc Gia --
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hàn Quốc
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Trung Quốc
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                    </ScrollView>
                  )}
                </View>
                <View style={{ flexBasis: "48%", position: "relative" }}>
                  <TouchableOpacity
                    onPress={handleToggleSelectedYear}
                    style={{
                      backgroundColor: Colors.bgPrimary,
                      padding: 12,
                      borderRadius: 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                      -- Năm --
                    </Text>
                    <Ionicons
                      name="chevron-down"
                      color={Colors.textWhite}
                      size={20}
                    />
                  </TouchableOpacity>
                  {isSelectedYear && (
                    <ScrollView
                      nestedScrollEnabled={true}
                      style={{
                        backgroundColor: Colors.bgPrimary,
                        borderWidth: 0.5,
                        borderColor: "white",
                        borderRadius: 5,
                        position: "absolute",
                        top: "100%",
                        width: "100%",
                        height: 300,
                      }}
                    >
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textGrey, fontSize: 14 }}>
                          -- Quốc Gia --
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hàn Quốc
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Trung Quốc
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ padding: 12 }}
                        underlayColor={Colors.primary}
                        onPress={() => console.log(123)}
                      >
                        <Text style={{ color: Colors.textWhite, fontSize: 14 }}>
                          Hành Động
                        </Text>
                      </TouchableHighlight>
                    </ScrollView>
                  )}
                </View>
              </View>
              {/* Button Search */}
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.primary,
                  padding: 10,
                  justifyContent: "center",
                  alignSelf: "center",
                  borderRadius: 50,
                  margin: 12,
                }}
              >
                <Text style={{ color: Colors.textWhite }}>Lọc Phhim</Text>
              </TouchableOpacity>
            </View>
            {/* Content */}
            <View>
              {/* List Movies */}
              <View style={{ marginTop: 12 }}>
                <View style={{ marginLeft: -12 }}>
                  <FlatList
                    scrollEnabled={false}
                    data={movies}
                    keyExtractor={(item) => item?.id.toString()}
                    renderItem={renderItemMovies}
                    numColumns={2}
                  />
                </View>
              </View>
              {/* Pagination */}
              <Paginationcomponent/>
            </View>
          </View>
          <FooterComponent />
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
