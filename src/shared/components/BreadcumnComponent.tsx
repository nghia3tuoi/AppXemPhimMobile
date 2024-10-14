import Colors from "@/src/utils/Colors";
import { TouchableOpacity, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BreadcumbComponent({
  navigation,
  name,
  episodeName,
}: any) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.bgPrimary,
        padding: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 5,
        marginTop: 12,
        borderRadius: 5,
      }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Ionicons name="home" color={"white"} size={20} />
        <Text
          style={{ color: Colors.textWhite, fontSize: 16, fontWeight: "bold" }}
        >
          Joyx
        </Text>
        <Ionicons name="chevron-forward" color={"white"} size={20} />
      </TouchableOpacity>
      {name && (
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
        >
          <Text
            style={{
              color: Colors.textWhite,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {name}
          </Text>
          {episodeName && (
            <Ionicons name="chevron-forward" color={"white"} size={20} />
          )}
        </TouchableOpacity>
      )}
      {episodeName && (
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
        >
          <Text
            style={{
              color: Colors.textWhite,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Tập {episodeName}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
