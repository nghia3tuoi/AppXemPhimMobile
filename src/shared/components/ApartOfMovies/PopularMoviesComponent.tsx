import { URL_IMAGE_OPHIM } from "@/src/config";
import useMovieApi from "@/src/core/hooks/useMovieApi";
import Colors from "@/src/utils/Colors";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-reanimated-carousel";

export default function PopularMoviesComponent({ navigation  }: any) {
  const [movies, setMovies] = useState<any>(null);
  const screenWidth = Dimensions.get("window").width; // Lấy chiều rộng màn hình
  const { getMovieNewUpdate } = useMovieApi();
  useEffect(() => {
    handleGetMoviesNewUpdate();
  }, []);
  const handleGetMoviesNewUpdate = async () => {
    const movies = await getMovieNewUpdate();
    if (movies === null) return;
    setMovies(movies);
  };
  return (
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
        {!movies && <ActivityIndicator size={26} />}
        {movies && (
          <Carousel
            loop
            height={250}
            width={screenWidth * 0.9}
            data={movies.slice(0, 10)} // Chỉ lấy 10 mục đầu tiên
            scrollAnimationDuration={1000}
            mode="parallax"
            renderItem={({ item, index }: any) => (
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() =>
                  navigation.navigate("MovieDetailScreen", { slug: item?.slug })
                }
              >
                <ImageBackground
                  source={{ uri: URL_IMAGE_OPHIM + item?.thumb_url }}
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                  resizeMode="cover"
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
                        {item?.episode_current} {item?.quality} {item?.lang}
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
                  <LinearGradient
                    colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]}
                  >
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
                        numberOfLines={2}
                        ellipsizeMode="tail"
                      >
                        {item?.name}
                      </Text>
                      <Text style={{ color: Colors.textGrey, fontSize: 20 }}>
                        {item?.year}
                      </Text>
                    </View>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
}
