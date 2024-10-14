import { View, Text, ScrollView } from "react-native";
import Colors from "../utils/Colors";
import HeaderComponent from "../shared/components/HeaderComponent";
import BreadcumbComponent from "../shared/components/BreadcumnComponent";
import ListMoviesComponent from "../shared/components/ApartOfMovies/ListMoviesComponents";
import Paginationcomponent from "../shared/components/PaginationComponent";
import FooterComponent from "../shared/components/FooterComponent";

export default function FavoriteMoviesScreen({ navigation }: any) {
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
        <BreadcumbComponent navigation={navigation} name={"Tủ Phim"}/>
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
              <Text
                style={{
                  color: Colors.textWhite,
                  fontSize: 20,
                  fontWeight: "500",
                  textTransform: "uppercase",
                }}
              >
                Tủ Phim
              </Text>
            </View>
          </View>
          {/* Content */}

          <View>
            {/* List Movies */}
            <ListMoviesComponent navigation={navigation} />
            {/* Pagination */}
            <Paginationcomponent />
          </View>
        </View>
        <FooterComponent />
      </ScrollView>
    </View>
  );
}
