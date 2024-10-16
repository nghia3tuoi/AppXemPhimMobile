import Colors from "@/src/utils/Colors";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function EpisodesComponent({
  navigation,
  episodes,
  indexSelectedProps,
}: any) {
  const [indexSelected, SetIndexSelected] = useState(null);
  useEffect(() => {
    SetIndexSelected(indexSelectedProps);
  }, [indexSelectedProps]);
  return (
    <View style={{ padding: 12, backgroundColor: Colors.bgPrimary }}>
      <Text
        style={{
          color: Colors.textWhite,
          fontSize: 14,
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Danh Sách Tập
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 12,
          gap: 10,
        }}
      >
        {episodes &&
          episodes[0]?.server_data?.map((data: any, index: any) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  SetIndexSelected(index);
                  navigation.navigate("ViewMovieScreen", {
                    episodeSelected: data,
                    indexSelected: index,
                  });
                }}
                style={{
                  backgroundColor:
                    indexSelected === index ? Colors.primary : "#404040",
                  width: 35,
                  height: 35,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: Colors.textWhite,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  {data?.name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
}
