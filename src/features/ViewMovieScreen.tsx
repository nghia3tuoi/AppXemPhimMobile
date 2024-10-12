import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Colors from "../utils/Colors";
import HeaderComponent from "../shared/components/HeaderComponent";
import FooterComponent from "../shared/components/FooterComponent";
import BreadcumbComponent from "../shared/components/BreadcumnComponent";
import EpisodesComponent from "../shared/components/EpisodesComponent";
import RatingComponent from "../shared/components/RatingComponent";
import CommentComponent from "../shared/components/CommentComponent";
import NominatedMoviesComponent from "../shared/components/ApartOfMovies/NominatedMoviesComponent";
import WebView from "react-native-webview";

export default function ViewMovieSreen() {
  const screenWidth = Dimensions.get("window").width; // Lấy chiều rộng màn hình
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
        <View style={{ marginTop: 12 }}>
          {/* Movies play */}
          <View
            style={{
              backgroundColor: "#171717",
              alignItems: "center",
              borderBottomColor: Colors.textGrey,
              borderBottomWidth: 0.5,
            }}
          >
            <SafeAreaView style={{ flex: 1 }}>
              <WebView
                source={{
                  uri: "https://player.phimapi.com/player/?url=https://s5.phim1280.tv/20241010/HXvhfZis/index.m3u8 ",
                }} // Sử dụng URL của video YouTube
                style={{ width: screenWidth, height: 250 }} // Áp dụng phong cách cho WebView
                javaScriptEnabled={true} // Kích hoạt JavaScript
                domStorageEnabled={true} // Bật lưu trữ DOM
                allowsInlineMediaPlayback={true}
              />
            </SafeAreaView>

            <View style={{ alignItems: "center", gap: 10, padding: 12 }}>
              <Text style={{ color: Colors.textWhite }}>
                ĐỔI SEVER (NẾU LAG)
              </Text>
              <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.bgButton,
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: Colors.textWhite }}>#Sever 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.bgButton,
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: Colors.textWhite }}>#Sever 2</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Episodes */}
          <View>
            <EpisodesComponent />
          </View>
          {/*  */}
          <View>
            <View style={{ marginTop: 12 }}>
              <Text
                style={{
                  color: Colors.textWhite,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                MỐI LIÊN KẾT BÍ ẨN TẬP 2
              </Text>
              <Text
                style={{
                  color: Colors.textWhite,
                  textTransform: "capitalize",
                  fontSize: 16,
                }}
              >
                <Text>MỐI LIÊN KẾT BÍ ẨN - </Text>
                <Text>DREAMING OF FREAKING FAIRYLATE (FULLHD - VIETSUB)</Text>
              </Text>
              <Text
                style={{
                  color: Colors.textGrey,
                  fontSize: 16,
                  marginTop: 12,
                  marginBottom: 12,
                }}
              >
                Tập 1
              </Text>
            </View>
            {/* Rating */}
            <RatingComponent />
            {/* Description Movie */}
            <View
              style={{
                minHeight: 150,
                overflow: "hidden",
                backgroundColor: Colors.bgPrimary,
                width: "100%",
                padding: 6,
              }}
            >
              <Text
                style={{
                  color: Colors.textWhite,
                  fontSize: 16,

                  lineHeight: 26,
                }}
                numberOfLines={5}
                ellipsizeMode="tail"
              >
                <Text style={{ color: Colors.textGrey, fontWeight: "bold" }}>
                  Giấc Mơ Lọ Lem
                </Text>
                <Text>
                  kể về một người phụ nữ có ước mơ trở thành Lọ Lem vì thực tế
                  khắc nghiệt của mình. Cô gặp một Hoàng tử quyến rũ người không
                  tin vào tình yêu và trải qua những xung đột mà họ phải đối mặt
                  cô trưởng thành trở thành Công chúa quyến rũ... trở thành Lọ
                  Lem vì thực tế khắc nghiệt của mình. Cô gặp một Hoàng tử quyến
                  rũ người không tin vào tình yêu và trải qua những xung đột mà
                  họ phải đối mặt cô trưởng thành trở thành Công chúa quyến rũ
                  trở thành Lọ Lem vì thực tế khắc nghiệt của mình. Cô gặp một
                  Hoàng tử quyến rũ người không tin vào tình yêu và trải qua
                  những xung đột mà họ phải đối mặt cô trưởng thành trở thành
                  Công chúa quyến rũ
                </Text>
              </Text>
              <TouchableOpacity style={{ alignSelf: "flex-end" }}>
                <Text
                  style={{
                    color: Colors.primary,
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Xem thêm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Comment */}
          <CommentComponent />
          {/* Nominated Movies */}
          <NominatedMoviesComponent />
        </View>
        <FooterComponent />
      </ScrollView>
    </View>
  );
}
