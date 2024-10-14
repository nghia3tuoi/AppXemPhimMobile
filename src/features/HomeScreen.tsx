import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Colors from "../utils/Colors";
import { useEffect, useState } from "react";
import HeaderComponent from "../shared/components/HeaderComponent";
import FooterComponent from "../shared/components/FooterComponent";
import { useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import PopularMoviesComponent from "../shared/components/ApartOfMovies/PopularMoviesComponent";
import useMovieApi from "../core/hooks/useMovieApi";
import ListMoviesComponent from "../shared/components/ApartOfMovies/ListMoviesComponents";

export default function HomeScreen({ navigation }: any) {
  const selectUser = useSelector((state: any) => state?.auth?.user);
  const [moviesSingle, setMoviesSingle] = useState<any>(null);
  const [moviesSeries, setMoviesSeries] = useState<any>(null);
  const [moviesAnime, setMoviesAnime] = useState<any>(null);
  const [selectedTab, setSelectedTab] = useState("series");
  const { getMoviesByTypeSlug } = useMovieApi();
  useEffect(() => {
    handleGetMoviesSingle("phim-le");
    handleGetMoviesSeries("phim-bo");
    handleGetMoviesAnime("hoat-hinh");
  }, []);

  const handleGetMoviesSingle = async (TypeSlug: string) => {
    const moviesSingle = await getMoviesByTypeSlug(1, TypeSlug,"");
    setMoviesSingle(moviesSingle);
  };
  const handleGetMoviesSeries = async (TypeSlug: string) => {
    const moviesSeries = await getMoviesByTypeSlug(1, TypeSlug,"");
    setMoviesSeries(moviesSeries);
  };
  const handleGetMoviesAnime = async (TypeSlug: string) => {
    const moviesAnime = await getMoviesByTypeSlug(1, TypeSlug,"trung-quoc");
    setMoviesAnime(moviesAnime);
  };
  //
  const handleSelectedTab = (type: string) => {
    setSelectedTab(type);
  };
  useEffect(() => {
    // console.log(selectUser)
    // if(selectUser === null) {
    //   return navigation.navigate("LoginScreen");
    // }
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.bgMain, paddingTop: 40 }}>
      <View style={{ flex: 1, padding: 12 }}>
        {/* Header */}
        <HeaderComponent navigation={navigation}/>
        <ScrollView style={{ padding: 4, height: "100%", flex: 1 }}>
          {/* Content Main */}
          {/* single / series */}
          <View
            style={{
              paddingBottom: 12,
            }}
          >
            {/* Popular movies */}
            <PopularMoviesComponent navigation={navigation}/>
            {/* Series/Single */}
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
              {/*  List Movies Series */}
              {selectedTab === "series" && !moviesSeries && (
                <ActivityIndicator size={26} />
              )}
              {selectedTab === "series" && moviesSeries && (
                <ListMoviesComponent navigation={navigation} movies={moviesSeries?.slice(0, 16)} />
              )}
              {/*  List Movies Single */}
              {selectedTab === "single" && !moviesSingle && (
                <ActivityIndicator size={26} />
              )}
              {selectedTab === "single" && moviesSingle && (
                <ListMoviesComponent navigation={navigation} movies={moviesSingle?.slice(0, 16)} />
              )}
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  backgroundColor: Colors.primary,
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                  Xem thêm &gt;&gt;
                </Text>
              </TouchableOpacity>
            </View>
            {/* Phim Anime */}
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
                  ANIME
                </Text>
              </View>
              {/*  List movies */}
              {!moviesAnime && <ActivityIndicator size={26} />}
              {moviesAnime && (
                <ListMoviesComponent navigation={navigation} movies={moviesAnime?.slice(0, 16)} />
              )}
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  backgroundColor: Colors.primary,
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                  Xem thêm &gt;&gt;
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
