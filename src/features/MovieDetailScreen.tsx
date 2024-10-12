import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import HeaderComponent from "../shared/components/HeaderComponent";
import Colors from "../utils/Colors";
import FooterComponent from "../shared/components/FooterComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import RatingComponent from "../shared/components/RatingComponent";
import BreadcumbComponent from "../shared/components/BreadcumnComponent";
import EpisodesComponent from "../shared/components/EpisodesComponent";
import { useState } from "react";
import CommentComponent from "../shared/components/CommentComponent";
export default function MovieDetailScreen() {
  const [selectedTab, setSelectedTab] = useState("episodes");
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
  const handleSelected = (tab: string) => {
    setSelectedTab(tab);
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
        <View
          style={{
            marginTop: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingTop: 12,
              paddingBottom: 12,
              backgroundColor: "#18181B",
            }}
          >
            <View style={{ flexBasis: "35%" }}>
              <Image
                source={{
                  uri: "https://i.mpcdn.top/c/oaymbXK/tam-sinh-vo-thuong.jpg",
                }}
                style={{ height: 200, resizeMode: "cover", borderRadius: 5 }}
              />
            </View>
            <View
              style={{ flexBasis: "65%", paddingRight: 10, paddingLeft: 10 }}
            >
              <Text
                style={{
                  color: Colors.textWhite,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: 18,
                  marginBottom: 6,
                }}
              >
                TAM SINH VÔ THƯƠNG
              </Text>
              <Text
                style={{
                  color: Colors.textGrey,
                  fontWeight: "500",
                  textTransform: "capitalize",
                  fontSize: 16,
                  marginBottom: 6,
                }}
              >
                Be loved a lifetime
              </Text>
              <View
                style={{
                  padding: 5,
                  backgroundColor: Colors.primary,
                  alignSelf: "flex-start",
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{
                    color: Colors.textWhite,
                    textTransform: "capitalize",
                    fontSize: 14,
                  }}
                >
                  Tập 15 vietsub
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 5, marginBottom: 6 }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: Colors.textWhite,
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    2024 ·
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: Colors.textWhite,
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    Trung Quốc ·
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: Colors.textWhite,
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    Phim Bộ
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={{ color: Colors.textGrey }}>Thể Loại: </Text>
                <TouchableOpacity>
                  <Text style={{ color: Colors.textWhite }}>
                    Cổ Trang - Thần Thoại
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Rating */}
              <RatingComponent />
              {/* Play/Follow */}
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#D9534F",
                    padding: 7,
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 3,
                  }}
                >
                  <Ionicons name="play" size={22} color={"white"} />
                  <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                    Xem Ngay
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.textGrey,
                    padding: 7,
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 3,
                  }}
                >
                  <Ionicons
                    name="add-circle-outline"
                    size={22}
                    color={"white"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Episodes movies */}
          <View
            style={{
              marginTop: 12,
              backgroundColor: "#181818",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 12,
                marginBottom: 12,
                gap: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => handleSelected("episodes")}
                style={{
                  padding: 5,
                  paddingTop: 10,
                  paddingBottom: 10,
                  backgroundColor:
                    selectedTab === "episodes" ? Colors.primary : "transparent",
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    textTransform: "uppercase",
                    color: Colors.textWhite,
                    fontWeight: "bold",
                  }}
                >
                  Danh sách tập
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelected("info")}
                style={{
                  padding: 5,
                  paddingTop: 10,
                  paddingBottom: 10,
                  backgroundColor:
                    selectedTab === "info" ? Colors.primary : "transparent",
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    textTransform: "uppercase",
                    color: Colors.textWhite,
                    fontWeight: "bold",
                  }}
                >
                  Thông tin phim
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelected("actor")}
                style={{
                  padding: 5,
                  paddingTop: 10,
                  paddingBottom: 10,
                  backgroundColor:
                    selectedTab === "actor" ? Colors.primary : "transparent",
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    textTransform: "uppercase",
                    color: Colors.textWhite,
                    fontWeight: "bold",
                  }}
                >
                  Diễn viên
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "#222222" }}>
              {selectedTab === "episodes" && <EpisodesComponent />}

              {selectedTab === "info" && (
                <View style={{ padding: 12 }}>
                  <Text
                    style={{
                      color: Colors.textWhite,
                      fontSize: 14,
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    TÓM TẮT
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      marginTop: 12,
                    }}
                  >
                    <Text style={{ color: Colors.textGrey, fontSize: 16 }}>
                      <Text style={{ fontWeight: "bold" }}>
                        Tam Sinh Vô Thương
                      </Text>
                      <Text>
                        kể về Thương Ấu, nữ tử trẻ tuổi của tộc Thánh Linh vô
                        tình cứu được Tư Uyên, Minh Vương của Minh tộc vào trước
                        ngày đại hôn, lại không biết đêm tân hôn toàn tộc sẽ bị
                        giết. Để hồi sinh tộc nhân, Thương Ấu giả làm yêu tinh
                        hươu Mộng Li tới Minh tộc để lấy trái tim hổ phách của
                        Minh Vương. Trong khoảng thời gian cùng chung sống,
                        Thương Ấu đã phải lòng kẻ thù của mình, nhưng để hồi
                        sinh tộc nhân, Thương Ấu vẫn lựa chọn moi tim Tư Uyên,
                        cuối cùng lại phát hiện kẻ thù là người khác...
                      </Text>
                    </Text>
                  </View>
                </View>
              )}
              {selectedTab === "actor" && (
                <View style={{ padding: 12 }}>
                  <View>
                    <Text
                      style={{
                        color: Colors.textWhite,
                        fontSize: 14,
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                    >
                      Đạo diễn
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        marginTop: 12,
                      }}
                    >
                      <Text style={{ color: Colors.textGrey, fontSize: 16 }}>
                        Cổ thiên lạc
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 12 }}>
                    <Text
                      style={{
                        color: Colors.textWhite,
                        fontSize: 14,
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                    >
                      DIỄN VIÊN
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        marginTop: 12,
                      }}
                    >
                      <Text style={{ color: Colors.textGrey, fontSize: 16 }}>
                        Lý tiểu long, Cổ thiên lạc
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </View>
          {/* Comment */}
          <CommentComponent />
          {/* Movie New */}
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
                PHIM ĐỀ CỬ
              </Text>
            </View>
            <View style={{ marginTop: 12, marginLeft: -12 }}>
              <FlatList
                scrollEnabled={false}
                data={movies}
                keyExtractor={(item) => item?.id.toString()}
                renderItem={renderItemMovies}
                numColumns={2}
              />
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
        <FooterComponent />
      </ScrollView>
    </View>
  );
}
