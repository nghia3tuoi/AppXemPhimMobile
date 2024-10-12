import Colors from "@/src/utils/Colors";
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from "react-native";
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
export default function NominatedMoviesComponent() {
  return (
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
  );
}
