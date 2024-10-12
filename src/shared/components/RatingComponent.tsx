import { TouchableOpacity, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/src/utils/Colors";
export default function RatingComponent() {
    return (
        <View style={{  marginBottom:20}}>
        <View style={{ flexDirection: "row", marginBottom:3 }}>
          <TouchableOpacity>
            <Ionicons name="star-outline" color={"yellow"} size={18} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="star-outline" color={"yellow"} size={18} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="star-outline" color={"yellow"} size={18} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="star-outline" color={"yellow"} size={18} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="star-outline" color={"yellow"} size={18} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="star-outline" color={"yellow"} size={18} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="star-outline" color={"yellow"} size={18} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="star-outline" color={"yellow"} size={18} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="star-outline" color={"yellow"} size={18} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="star-outline" color={"yellow"} size={18} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ color: Colors.textWhite }}>
            ( 0 điểm / 0 lượt )
          </Text>
        </View>
      </View>
    )
}