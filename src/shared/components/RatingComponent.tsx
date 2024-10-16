import { TouchableOpacity, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/src/utils/Colors";
import useRating from "@/src/core/hooks/useRating";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function RatingComponent({ movie }: any) {
  const selectUser = useSelector((state: any) => state.auth?.user);
  const { getRatingsByMovieId, addRating, checkUserHasRated } = useRating();
  const [pointCurrent, setPointCurrrent] = useState<any>(0);
  const [rating, setRating] = useState<any>(null);
  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  useEffect(() => {
    const useFetch = async () => {
      await handleGetRatingByMovieId(movie?._id, selectUser?.uid);
    };
    useFetch();
  }, [movie]);
  const handleGetRatingByMovieId = async (movieId: any, userId: any) => {
    const rating = await getRatingsByMovieId(movieId, userId);
    if (rating) {
      setRating(rating);
      setPointCurrrent(rating?.userRating);
    }
  };
  const handleAddRating = async (userId: any, movieId: any, point: any) => {
    if (!userId || !movieId || !point) return;
    //check user has rated?
    const isHasRated = await checkUserHasRated(userId, movieId);
    if (isHasRated) {
      return;
    }
    setPointCurrrent(point);
    await addRating(userId, movieId, point);
    await handleGetRatingByMovieId(movieId, userId);
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <View>
        <View style={{ flexDirection: "row", marginBottom: 3 }}>
          {points.map((point, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                handleAddRating(selectUser?.uid, movie?._id, point)
              }
            >
              <Ionicons
                name={pointCurrent >= point ? "star" : "star-outline"}
                color={"yellow"}
                size={20}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View>
          {!rating && (
            <Text style={{ color: Colors.textWhite }}>0 điểm / 0 lượt</Text>
          )}
          {rating && (
            <Text style={{ color: Colors.textWhite }}>
              ( {rating?.averageRating | 0} điểm / {rating?.totalRatings | 0}{" "}
              lượt )
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}
