import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import HeaderComponent from "../shared/components/HeaderComponent";
import Colors from "../utils/Colors";
import FooterComponent from "../shared/components/FooterComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import RatingComponent from "../shared/components/RatingComponent";
import BreadcumbComponent from "../shared/components/BreadcumnComponent";
import EpisodesComponent from "../shared/components/EpisodesComponent";
import { Fragment, useEffect, useRef, useState } from "react";
import CommentComponent from "../shared/components/CommentComponent";
import ListMoviesComponent from "../shared/components/ApartOfMovies/ListMoviesComponents";
import useMovieApi from "../core/hooks/useMovieApi";
import { useSelector } from "react-redux";
import useMovie from "../core/hooks/useMovie";
export default function MovieDetailScreen({ navigation, route }: any) {
  const { slug }: any = route?.params; // Lấy slug từ tham số
  const { getMovieNewUpdate, getMovieBySlug } = useMovieApi();
  const { getFavoriteMovie, addFavoriteMovie, removeFavoriteMovieById } =
    useMovie();
  const [movie, setMovie] = useState<any>(null);
  const [episodes, setEpisodes] = useState<any>(null);
  const [selectedTab, setSelectedTab] = useState("episodes");
  const [isLoading, setIsLoading] = useState(true);
  const [isExistMovieFavorite, setIsExistMovieFavorite] = useState(false);
  const scrollViewRef: any = useRef(null);
  //selector
  const selectUser = useSelector((state: any) => state?.auth?.user);
  const movieNewUpdateSelector = useSelector(
    (state: any) => state.movie?.moviesNewUpdate
  );
  useEffect(() => {
    handleGetMovieBySlug(slug);
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  }, [slug]);
  //movie favorite
  const handleAddFavoriteMovie = async (userId: string, movie: any) => {
    setIsExistMovieFavorite(true);
    await addFavoriteMovie(userId, movie);
  };
  const removeFavoriteMovie = async (userId: any, movieId: any) => {
    setIsExistMovieFavorite(false);
    await removeFavoriteMovieById(userId, movieId);
  };
  const handleCheckExistMovieFavorite = async (userId: any, movieId: any) => {
    const favoriteMovie: any = await getFavoriteMovie(userId, movieId);
    if (favoriteMovie) {
      setIsExistMovieFavorite(true);
    } else {
      setIsExistMovieFavorite(false);
    }
  };
  //movie
  const handleGetMovieBySlug = async (slug: string) => {
    const movie = await getMovieBySlug(slug);
    if (movie) {
      await handleCheckExistMovieFavorite(selectUser?.uid, movie?.movie?._id);
      setMovie(movie?.movie);
      setEpisodes(movie?.episodes);
    }
    setIsLoading(false);
  };
  //tab
  const handleSelected = (tab: string) => {
    setSelectedTab(tab);
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
      <HeaderComponent navigation={navigation} />
      <ScrollView style={{ flex: 1 }} ref={scrollViewRef}>
        <BreadcumbComponent name={movie?.name} navigation={navigation} />
        <View
          style={{
            marginTop: 12,
          }}
        >
          {isLoading && !movie && <ActivityIndicator size={36} />}
          {!isLoading && movie && (
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
                    uri: movie?.thumb_url,
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
                  {movie?.name}
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
                  {movie?.origin_name}
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
                      fontWeight: "500",
                    }}
                  >
                    {movie?.episode_current + " " + movie?.lang}
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
                      {movie?.year} ·
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
                      {movie?.country[0]?.name} ·
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <Text
                      style={{
                        color: Colors.textWhite,
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {movie?.type === "series"
                        ? "Phim Bộ"
                        : movie?.type === "single"
                          ? "Phim Lẻ"
                          : "Hoạt Hình"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 20,
                    flexWrap: "wrap",
                  }}
                >
                  <Text style={{ color: Colors.textGrey }}>Thể Loại: </Text>
                  {movie?.category &&
                    movie.category.map((cat: any, index: any) => (
                      <Fragment key={cat.id}>
                        <TouchableOpacity>
                          <Text style={{ color: Colors.textWhite }}>
                            {cat.name}
                          </Text>
                        </TouchableOpacity>
                        {index < movie.category.length - 1 && (
                          <Text style={{ color: Colors.textWhite }}> - </Text> // Thêm dấu " - " giữa các thể loại
                        )}
                      </Fragment>
                    ))}
                </View>
                {/* Rating */}
                {movie && <RatingComponent movie={movie} />}
                {/* Play/Follow */}
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ViewMovieScreen", {
                        episodeSelected:
                          episodes && episodes[0]?.server_data[0],
                        indexSelected: 0,
                      });
                    }}
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
                  {!isExistMovieFavorite && (
                    <TouchableOpacity
                      onPress={async () => {
                        await handleAddFavoriteMovie(selectUser?.uid, movie);
                      }}
                      style={{
                        backgroundColor: Colors.textGrey,
                        padding: 7,
                        alignSelf: "flex-start",
                        flexDirection: "row",
                        alignItems: "center",
                        borderRadius: 3,
                      }}
                    >
                      <Ionicons name="add" size={22} color={"white"} />
                    </TouchableOpacity>
                  )}
                  {isExistMovieFavorite && (
                    <TouchableOpacity
                      onPress={async () => {
                        await removeFavoriteMovie(selectUser?.uid, movie?._id);
                      }}
                      style={{
                        backgroundColor: Colors.textGrey,
                        padding: 7,
                        alignSelf: "flex-start",
                        flexDirection: "row",
                        alignItems: "center",
                        borderRadius: 3,
                      }}
                    >
                      <Ionicons name="checkmark" size={22} color={"white"} />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          )}
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
              {selectedTab === "episodes" && episodes &&
               (
                <EpisodesComponent
                  episodes={episodes}
                  navigation={navigation}
                />
              )}

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
                      <Text
                        style={{ color: Colors.textGrey, fontWeight: "bold" }}
                      >
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
                        {movie?.director}
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
                        {movie?.actor?.map((a: any) => a).join(", ")}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </View>
          {/* Comment */}
          {movie && <CommentComponent movie={movie} />}
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
              <ListMoviesComponent
                movies={movieNewUpdateSelector?.slice(0, 16)}
                navigation={navigation}
              />
            )}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ListMoviesScreen", {
                  typeSlugItem: { name: "Phim mới", slug: "phim-moi" },
                })
              }
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
