import { URL_IMAGE_OPHIM } from "@/src/config";
import Colors from "@/src/utils/Colors";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";

export default function ListMoviesComponent({ movies,navigation }: any) {
  const renderItemMovies = ({ item }: any) => {
    return (
      <TouchableOpacity
      onPress={()=>navigation.navigate('MovieDetailScreen', {slug:item?.slug})}
        style={{
          flex: 1,
          marginLeft: 12,
          marginBottom: 12,
          backgroundColor: Colors.bgPrimary,
        }}
      >
        <View>
          <ImageBackground
            source={{ uri: URL_IMAGE_OPHIM + item?.thumb_url }}
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
              {item?.episode_current} {item?.quality} {item?.lang}
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
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {item?.name}
            </Text>
            <Text
              style={{
                color: Colors.textGrey,
                textTransform: "capitalize",
                fontWeight: "bold",
                marginTop: 6,
              }}
                 numberOfLines={2}
              ellipsizeMode="tail"
            >
              {item?.origin_name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ marginTop: 12, marginLeft: -12 }}>
      <FlatList
        scrollEnabled={false}
        data={movies}
        keyExtractor={(item: any) => item?._id.toString()}
        renderItem={renderItemMovies}
        numColumns={2}
      />
    </View>
  );
}
