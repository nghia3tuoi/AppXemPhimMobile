import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Colors from "../utils/Colors";
import HeaderComponent from "../shared/components/HeaderComponent";
import FooterComponent from "../shared/components/FooterComponent";
import BreadcumbComponent from "../shared/components/BreadcumnComponent";
import EpisodesComponent from "../shared/components/EpisodesComponent";
import RatingComponent from "../shared/components/RatingComponent";
import CommentComponent from "../shared/components/CommentComponent";

import WebView from "react-native-webview";
import { useEffect, useState } from "react";
import ListMoviesComponent from "../shared/components/ApartOfMovies/ListMoviesComponents";
import { useSelector } from "react-redux";

export default function ViewMovieScreen({ route, navigation }: any) {
  const { episodeSelected, indexSelected } = route?.params;
  const [movie, setMovie] = useState<any>(null);
  const [episodes, setEpisodes] = useState<any>(null);
  const movieSelector = useSelector((state: any) => state.movie?.movie);
  const movieNewUpdateSelector = useSelector((state:any)=>state.movie?.moviesNewUpdate)
  useEffect(() => {
    setMovie(movieSelector?.movie);
    setEpisodes(movieSelector?.episodes);
    console.log(episodeSelected)
  }, [episodeSelected]);
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
      <HeaderComponent navigation={navigation} />
      <ScrollView style={{ flex: 1 }}>
        <BreadcumbComponent navigation={navigation} name={movie?.name} episodeName={episodeSelected?.name}/>
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
            {episodeSelected && (
              <SafeAreaView style={{ flex: 1 }}>
                <WebView
                  source={{
                    uri: episodeSelected?.link_embed,
                  }} // Sử dụng URL của video YouTube
                  style={{ width: screenWidth * 0.95, height: 250 }} // Áp dụng phong cách cho WebView
                  javaScriptEnabled={true} // Kích hoạt JavaScript
                  domStorageEnabled={false} // Bật lưu trữ DOM
                  allowsInlineMediaPlayback={true}
                />
              </SafeAreaView>
            )}

            <View style={{ alignItems: "center", gap: 10, padding: 12 }}>
              <Text style={{ color: Colors.textWhite }}>
                ĐỔI SEVER (NẾU LAG)
              </Text>
              <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
                <TouchableOpacity
                  disabled={true}
                  style={{
                    backgroundColor: Colors.bgButton,
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: Colors.textWhite }}>
                    {episodes && episodes[0]?.server_name}
                  </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                  style={{
                    backgroundColor: Colors.bgButton,
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: Colors.textWhite }}>#Sever 2</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
          {/* Episodes */}
          <View>
            {episodes && (
              <EpisodesComponent
                episodes={episodes}
                navigation={navigation}
                indexSelectedProps={indexSelected}
              />
            )}
          </View>
          {/*  */}
          <View>
            {movie && (
              <View style={{ marginTop: 12 }}>
                <Text
                  style={{
                    color: Colors.textWhite,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 18,
                    marginBottom: 6,
                  }}
                >
                  {movie?.name} TẬP {episodeSelected?.name}
                </Text>

                <Text
                  style={{
                    color: Colors.textWhite,
                    textTransform: "capitalize",
                    fontSize: 16,
                  }}
                >
                  <Text style={{ fontWeight: "500" }}>
                    {movie?.name} - {movie?.origin_name} ({movie?.quality} -
                    {movie?.lang})
                  </Text>
                </Text>
                <Text
                  style={{
                    color: Colors.textGrey,
                    fontSize: 16,
                    marginTop: 12,
                    marginBottom: 12,
                  }}
                >
                  Tập {episodes && episodeSelected?.name}
                </Text>
              </View>
            )}
            {/* Rating */}
            <RatingComponent />
            {/* Description Movie */}
            {movie && (
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
                    {movie?.name + " "}
                  </Text>
                  <Text>{movie?.content}</Text>
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
            )}
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
            {/* List movies */}
            {movieNewUpdateSelector && (
              <ListMoviesComponent movies={movieNewUpdateSelector?.slice(0, 16)}  navigation={navigation}/>
            )}
            <TouchableOpacity  onPress={()=>navigation.navigate('ListMoviesScreen',{ typeSlugItem: {name:'Phim mới', slug:'phim-moi'}})}
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
