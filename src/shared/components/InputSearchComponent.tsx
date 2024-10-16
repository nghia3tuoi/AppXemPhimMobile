import Colors from "@/src/utils/Colors";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCallback, useState } from "react";
import { debounce } from "lodash";
import useMovieApi from "@/src/core/hooks/useMovieApi";
import { URL_IMAGE_OPHIM } from "@/src/config";
import { useSelector } from "react-redux";
import { KeyboardAvoidingView, ScrollView } from "native-base";
export default function InputSearchComponent({ naviagtion }: any) {
  const { getMoviesByKeyword } = useMovieApi();
  const [movies, setMovies] = useState<any>(null);
  const [keyword, setKeyword] = useState("");
  const loadingSelector = useSelector((state: any) => state.movie?.isLoading);
  const handleSearchInput = useCallback(
    debounce(async (value: any) => {
      if (value.trim() === "") {
        return;
      }
      const movies = await getMoviesByKeyword(value);
      setKeyword(value);
      setMovies(movies);
      // Thực hiện logic tìm kiếm ở đây
    }, 500), // Thời gian debounce (500ms)
    []
  );
  return (
    <View
      style={{
        position: "absolute",
        top: "100%",
        width: "100%",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          borderColor: Colors.textGrey,
          borderWidth: 0.5,
        }}
      >
        <TextInput
          style={{
            backgroundColor: Colors.bgPrimary,
            padding: 12,
            position: "relative",
            color: Colors.textWhite,
            fontSize: 16,
          }}
          placeholder="Tìm kiếm ..."
          placeholderTextColor={Colors.textGrey}
          onChangeText={(value) => handleSearchInput(value)}
        />
        <TouchableOpacity
    
          style={{ position: "absolute", right: 0, padding: 5 }}
        >
          <Ionicons name="search" size={26} color={"white"} />
        </TouchableOpacity>
      </View>
      {keyword && (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView style={{ backgroundColor: "#0A0706", opacity: 0.9 }}>
            {loadingSelector && <ActivityIndicator size={36} />}
            {!loadingSelector &&
              movies &&
              movies.slice(0, 3).map((movie: any, index: any) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      borderBottomColor: Colors.textGrey,
                      borderWidth: 0.5,
                      padding: 12,
                    }}
                  >
                    <View>
                      <Image
                        source={{
                          uri: URL_IMAGE_OPHIM + movie?.thumb_url,
                        }}
                        style={{ width: 40, height: 70, resizeMode: "contain" }}
                      />
                    </View>
                    <View style={{ alignItems: "center", flex: 1 }}>
                      <Text
                        style={{
                          color: Colors.textWhite,
                          fontSize: 16,
                          fontWeight: "500",
                        }}
                      >
                        {movie?.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            <TouchableOpacity
              onPress={() => {
                naviagtion.navigate("ListMoviesScreen", {
                  typeSlugItem: null,
                  keyword: keyword,
                });
              }}
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                borderBottomColor: Colors.textGrey,
                borderWidth: 0.5,
                padding: 12,
              }}
            >
              <Text
                style={{ fontSize: 16, color: Colors.primary }}
                numberOfLines={2}
              >
                Xem thêm "{keyword}"
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}
