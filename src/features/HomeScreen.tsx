import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  FlatList,
} from "react-native";
import Colors from "../utils/Colors";
import { useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import HeaderComponent from "../shared/components/HeaderComponent";
import FooterComponent from "../shared/components/FooterComponent";

export default function HomeScreen({ navigation }: any) {
  const screenWidth = Dimensions.get("window").width; // Lấy chiều rộng màn hình
  const [selectedTab, setSelectedTab] = useState("series");

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
  ];
  const handleSelectedTab = (type: string) => {
    setSelectedTab(type);
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
    <View style={{ flex: 1, backgroundColor: Colors.bgMain, paddingTop: 40 }}>
      <View style={{ flex: 1, padding: 12 }}>
        {/* Header */}
        <HeaderComponent />
        <ScrollView style={{ padding: 4, height: "100%", flex: 1 }}>
          {/* Content Main */}
          {/* single / series */}
          <View
            style={{
              paddingBottom: 12,
            }}
          >
            <View
              style={{
                borderBottomColor: Colors.primary,
                borderBottomWidth: 0.5,
              }}
            >
              <View
                style={{
                  borderLeftWidth: 3,
                  borderLeftColor: Colors.primary,
                  marginTop: 12,
                }}
              >
                <Text
                  style={{
                    color: Colors.textWhite,
                    fontSize: 18,
                    padding: 5,
                  }}
                >
                  THỊNH HÀNH
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Carousel
                  loop
                  height={250}
                  width={screenWidth * 0.9}
                  data={movies}
                  scrollAnimationDuration={1000}
                  mode="parallax"
                  renderItem={({ item, index }) => (
                    <TouchableOpacity style={{ flex: 1 }}>
                      <ImageBackground
                        source={{ uri: item.imageUrl }}
                        style={{
                          flex: 1,
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <View style={{ marginTop: 10 }}>
                            <Text
                              style={{
                                color: Colors.textWhite,
                                fontSize: 16,
                                padding: 5,
                                backgroundColor: Colors.primary,
                                fontWeight: "bold",
                              }}
                            >
                              Tập full 40/40 Vietsub
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={{
                                backgroundColor: "red",
                                color: Colors.textWhite,
                                fontSize: 16,
                                padding: 5,
                                fontWeight: "bold",
                              }}
                            >
                              Phim mới
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            padding: 15,
                            gap: 5,
                          }}
                        >
                          <Text
                            style={{
                              color: Colors.textWhite,
                              fontSize: 20,
                              fontWeight: "bold",
                            }}
                          >
                            {item?.movieName}
                          </Text>
                          <Text
                            style={{ color: Colors.textGrey, fontSize: 20 }}
                          >
                            2024
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
            {/* series/single */}
            <View style={{ marginTop: 12 }}>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity
                  onPress={() => handleSelectedTab("series")}
                  style={{
                    padding: 10,
                    backgroundColor:
                      selectedTab === "series" ? Colors.primary : "transparent",
                    borderRadius: 2,
                  }}
                >
                  <Text style={{ color: Colors.textWhite, fontWeight: "bold" }}>
                    PHIM BỘ MỚI
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleSelectedTab("single")}
                  style={{
                    padding: 10,
                    backgroundColor:
                      selectedTab === "single" ? Colors.primary : "transparent",
                    borderRadius: 2,
                  }}
                >
                  <Text style={{ color: Colors.textWhite, fontWeight: "bold" }}>
                    PHIM LẺ MỚI
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 12, marginLeft: -12 }}>
                {selectedTab === "series" && (
                  <FlatList
                    scrollEnabled={false}
                    data={movies}
                    keyExtractor={(item) => item?.id.toString()}
                    renderItem={renderItemMovies}
                    numColumns={2}
                  />
                )}
                {selectedTab === "single" && (
                  <FlatList
                    scrollEnabled={false}
                    data={movies}
                    keyExtractor={(item) => item?.id.toString()}
                    renderItem={renderItemMovies}
                    numColumns={2}
                  />
                )}
              </View>
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  backgroundColor: Colors.primary,
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                  Xem thêm...
                </Text>
              </TouchableOpacity>
            </View>
            {/* PHIM HÀNH ĐỘNG */}
            <View style={{ marginTop: 12 }}>
              <View
                style={{
                  borderLeftWidth: 3,
                  borderLeftColor: Colors.primary,
                  marginTop: 12,
                }}
              >
                <Text
                  style={{
                    color: Colors.textWhite,
                    fontSize: 18,
                    padding: 5,
                  }}
                >
                  PHIM HÀNH ĐỘNG
                </Text>
              </View>
              <View style={{ marginTop: 12, marginLeft: -12 }}>
                {selectedTab === "series" && (
                  <FlatList
                    scrollEnabled={false}
                    data={movies}
                    keyExtractor={(item) => item?.id.toString()}
                    renderItem={renderItemMovies}
                    numColumns={2}
                  />
                )}
                {selectedTab === "single" && (
                  <FlatList
                    scrollEnabled={false}
                    data={movies}
                    keyExtractor={(item) => item?.id.toString()}
                    renderItem={renderItemMovies}
                    numColumns={2}
                  />
                )}
              </View>
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  backgroundColor: Colors.primary,
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                  Xem thêm...
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* footer */}
          <FooterComponent />
        </ScrollView>
      </View>
    </View>
  );
}


