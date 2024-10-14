import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import HeaderComponent from "../shared/components/HeaderComponent";
import Colors from "../utils/Colors";
import { ScrollView } from "native-base";
import BreadcumbComponent from "../shared/components/BreadcumnComponent";
import FooterComponent from "../shared/components/FooterComponent";
import Paginationcomponent from "../shared/components/PaginationComponent";
import ListMoviesComponent from "../shared/components/ApartOfMovies/ListMoviesComponents";
import { useSelector } from "react-redux";
import SearchToolComponent from "../shared/components/SearchToolComponent";
import { useEffect } from "react";

export default function ListMoviesScreen({ navigation, route }: any) {
  const {
    typeSlugItem = null,
    categoryItem = null,
    countryItem = null,
    keyword = "",
  }: any = route.params;
  const movieSelector = useSelector((state: any) => state.movie?.movies);
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
        <BreadcumbComponent
          navigation={navigation}
          name={
            (typeSlugItem && typeSlugItem?.name) ||
            (categoryItem && categoryItem?.name) ||
            (countryItem && countryItem?.name)
          }
        />
        <View style={{ flex: 1, zIndex: 10 }}>
          <View style={{ zIndex: 20 }}>
            <View
              style={{
                borderBottomColor: Colors.colorBorder,
                borderBottomWidth: 1,
                alignItems: "center",
                padding: 12,
              }}
            >
              {typeSlugItem && (
                <Text
                  style={{
                    color: Colors.textWhite,
                    fontSize: 20,
                    fontWeight: "500",
                    textTransform: "uppercase",
                  }}
                >
                  {typeSlugItem?.name}
                </Text>
              )}
              {categoryItem && (
                <Text
                  style={{
                    color: Colors.textWhite,
                    fontSize: 20,
                    fontWeight: "500",
                    textTransform: "uppercase",
                  }}
                >
                  {categoryItem?.name}
                </Text>
              )}
              {countryItem && (
                <Text
                  style={{
                    color: Colors.textWhite,
                    fontSize: 20,
                    fontWeight: "500",
                    textTransform: "uppercase",
                  }}
                >
                  {countryItem?.name}
                </Text>
              )}
              {keyword && (
                <Text
                  style={{
                    color: Colors.textWhite,
                    fontSize: 20,
                    fontWeight: "500",
                    textTransform: "uppercase",
                  }}
                >
                  {keyword}
                </Text>
              )}
            </View>
            {/* Tool Search */}
            <SearchToolComponent />
          </View>
          {/* Content */}
          {!movieSelector && <ActivityIndicator size={26} />}
          {movieSelector && (
            <View>
              {/* List Movies */}
              <ListMoviesComponent
                movies={movieSelector}
                navigation={navigation}
              />
              {/* Pagination */}
              <Paginationcomponent />
            </View>
          )}
        </View>
        <FooterComponent />
      </ScrollView>
    </View>
  );
}
