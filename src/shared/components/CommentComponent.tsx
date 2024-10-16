import useComment from "@/src/core/hooks/useComment";
import Colors from "@/src/utils/Colors";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { useSelector } from "react-redux";

export default function CommentComponent({ movie }: any) {
  const selectUser = useSelector((state: any) => state.auth?.user);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<any>(null);
  const { addComment, getAllComments } = useComment();
  useEffect(() => {
    handleGetAllComments();
  }, [movie]);
  const handleAddComment = async () => {
    if (movie && selectUser && commentText !== "") {
      await addComment(movie?._id, selectUser, commentText);
      setCommentText("");
      await handleGetAllComments();
    }
  };
  const handleGetAllComments = async () => {
    const comments = await getAllComments(movie?._id);
    setComments(comments);
  };
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
      <View>
        <Text
          style={{
            color: Colors.textWhite,
            fontWeight: "bold",
            marginBottom: 12,
            fontSize: 16,
          }}
        >
          Bình Luận (0)
        </Text>
        <View>
          <TextInput
            onChangeText={(value) => setCommentText(value)}
            value={commentText}
            style={{
              padding: 12,
              backgroundColor: "#272729",
              height: 100,
              color: Colors.textWhite,
              fontSize: 16,
            }}
            multiline
            placeholder="Nhập văn bản ở đây..." // Thay thế văn bản placeholder theo nhu cầu của bạn
            placeholderTextColor={Colors.textGrey}
          />
        </View>
        <TouchableOpacity
          onPress={() => handleAddComment()}
          disabled={commentText === ""}
          style={{
            padding: 10,
            backgroundColor: "#3f4045",
            alignSelf: "flex-start",
            marginTop: 12,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
            Bình Luận
          </Text>
        </TouchableOpacity>
      </View>
      {/* Result */}
      {comments?.length <= 0 && <Text style={{color:Colors.textWhite, fontSize:16, alignSelf:'center', padding:12}}>Không có bình luận.</Text>}
      {comments?.length > 0 && (
        <View
          style={{
            backgroundColor: Colors.bgPrimary,
            marginTop: 12,
            padding: 12,
            borderRadius: 5,
            gap: 10,
          }}
        >
          {comments &&
            comments.map((comment: any, index: any) => {
              return (
                <View key={index} style={{ flexDirection: "row", gap: 10 }}>
                  <View>
                    <Image
                      source={{ uri: comment?.user?.photoURL }}
                      style={{ width: 35, height: 35, borderRadius: 50 }}
                    />
                  </View>
                  <View
                    style={{
                      backgroundColor: Colors.bgButton,
                      padding: 12,
                      borderRadius: 10,
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        color: Colors.textWhite,
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {comment?.user?.displayName}
                    </Text>
                    <Text
                      style={{ color: Colors.textWhite, fontSize: 17 }}
                      numberOfLines={10}
                    >
                      {comment?.commentText}
                    </Text>
                  </View>
                </View>
              );
            })}
        </View>
      )}
    </View>
  );
}
