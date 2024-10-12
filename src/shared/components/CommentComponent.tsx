import Colors from "@/src/utils/Colors";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default function CommentComponent() {
  return (
    <View
      style={{
        padding: 12,
        backgroundColor: "#18181a",
        marginTop: 12,
        borderWidth: 1,
        borderColor: "#202022",
      }}
    >
      <Text style={{ color: Colors.textWhite, fontWeight: "bold", marginBottom:12, fontSize:16 }}>
        Bình Luận (0)
      </Text>
      <View >
        <TextInput
        style={{ padding: 12, backgroundColor: "#272729" ,height:100, color:Colors.textWhite, fontSize:16}}
          multiline
          placeholder="Nhập văn bản ở đây..." // Thay thế văn bản placeholder theo nhu cầu của bạn
          placeholderTextColor={Colors.textGrey}
        />
      </View>
      <TouchableOpacity style={{ padding: 10, backgroundColor: "#3f4045", alignSelf:'flex-start', marginTop:12, borderRadius:5 }}>
        <Text style={{ color: Colors.textWhite,fontSize:16 }}>Bình Luận</Text>
      </TouchableOpacity>
    </View>
  );
}
