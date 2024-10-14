import Colors from "@/src/utils/Colors";
import { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";
import useMovieApi from "@/src/core/hooks/useMovieApi";
export default function SearchToolComponent() {
  const [sort, setSort] = useState<any>({
    name: "Thời gian đăng",
    slug: "modified.time",
  });
  const [type, setType] = useState<any>({name:"Phim mới", slug:'phim-moi'});
  const [category, setCategory] = useState<any>(null);
  const [country, setCountry] = useState<any>(null);
  const [year, setYear] = useState<any>(null);

  const [isSelectedSort, setIsSelectedSort] = useState(false);
  const [isSelectedType, setIsSelectedType] = useState(false);
  const [isSelectedCategory, setIsSelectedCategory] = useState(false);
  const [isSelectedCountry, setIsSelectedCountry] = useState(false);
  const [isSelectedYear, setIsSelectedYear] = useState(false);

  const countrySelector = useSelector((state: any) => state.country?.countries);
  const categorySelector = useSelector(
    (state: any) => state.category?.categories
  );
  const { getAllMovies } = useMovieApi();

  const years = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023, 2024, 2025, 2026,
  ];

  const handleGetMovies = async (
    typeSlug: string = "phim-moi",
    sortField: string = "modified.time",
    categorySlug: string,
    countrySlug: string,
    year: string
  ) => {
    console.log(typeSlug, sortField, categorySlug, countrySlug, year);
    await getAllMovies(typeSlug, sortField, categorySlug, countrySlug, year);
  };

  const handleToggleSelectedSort = () => {
    setIsSelectedSort(!isSelectedSort);
    //
    if (isSelectedYear === true) {
      setIsSelectedYear(false);
    }
    if (isSelectedType === true) {
      setIsSelectedType(false);
    }
    if (isSelectedCategory === true) {
      setIsSelectedCategory(false);
    }
    if (isSelectedCountry === true) {
      setIsSelectedCountry(false);
    }
  };
  const handleToggleSelectedType = () => {
    setIsSelectedType(!isSelectedType);
    //
    if (isSelectedSort === true) {
      setIsSelectedSort(false);
    }
    if (isSelectedCategory === true) {
      setIsSelectedCategory(false);
    }
    if (isSelectedCountry === true) {
      setIsSelectedCountry(false);
    }
    if (isSelectedYear === true) {
      setIsSelectedYear(false);
    }
  };
  const handleToggleSelectedCategory = () => {
    setIsSelectedCategory(!isSelectedCategory);
    if (isSelectedSort === true) {
      setIsSelectedSort(false);
    }
    if (isSelectedType === true) {
      setIsSelectedType(false);
    }
    if (isSelectedYear === true) {
      setIsSelectedYear(false);
    }
    if (isSelectedCountry === true) {
      setIsSelectedCountry(false);
    }
  };
  const handleToggleSelectedCountry = () => {
    setIsSelectedCountry(!isSelectedCountry);
    if (isSelectedSort === true) {
      setIsSelectedSort(false);
    }
    if (isSelectedType === true) {
      setIsSelectedType(false);
    }
    if (isSelectedYear === true) {
      setIsSelectedYear(false);
    }
    if (isSelectedCategory === true) {
      setIsSelectedCategory(false);
    }
  };
  const handleToggleSelectedYear = () => {
    setIsSelectedYear(!isSelectedYear);
    if (isSelectedSort === true) {
      setIsSelectedSort(false);
    }
    if (isSelectedType === true) {
      setIsSelectedType(false);
    }
    if (isSelectedCategory === true) {
      setIsSelectedCategory(false);
    }
    if (isSelectedCountry === true) {
      setIsSelectedCountry(false);
    }
  };
  return (
    <View>
      <View
        style={{
          marginTop: 12,
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          position: "relative",
          zIndex: 10,
        }}
      >
        <View style={{ flexBasis: "48%", zIndex: 11 }}>
          <TouchableOpacity
            onPress={handleToggleSelectedSort}
            style={{
              backgroundColor: Colors.bgPrimary,
              padding: 12,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
              {sort ? sort?.name : "-- Sắp Xếp --"}
            </Text>
            <Ionicons name="chevron-down" color={Colors.textWhite} size={20} />
          </TouchableOpacity>
          {isSelectedSort && (
            <View
              style={{
                backgroundColor: Colors.bgPrimary,
                borderWidth: 0.5,
                borderColor: "white",
                borderRadius: 5,
                position: "absolute",
                top: "100%",
                width: "100%",
              }}
            >
              <TouchableHighlight
                disabled={true}
                onPressIn={() => {
                  handleToggleSelectedSort();
                }}
                style={{ padding: 12 }}
                underlayColor={Colors.primary}
                onPress={() => console.log(123)}
              >
                <Text style={{ color: Colors.textGrey, fontSize: 16 }}>
                  -- Sắp Xếp --
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPressIn={() => {
                  setSort({ name: "Thời gian đăng", slug: "modified.time" });
                  handleToggleSelectedSort();
                }}
                style={{ padding: 12 }}
                underlayColor={Colors.primary}
                onPress={() => console.log(123)}
              >
                <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                  Thời gian đăng
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPressIn={() => {
                  setSort({ name: "Năm Sản Xuất", slug: "year" });
                  handleToggleSelectedSort();
                }}
                style={{ padding: 12 }}
                underlayColor={Colors.primary}
                onPress={() => console.log(123)}
              >
                <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                  Năm Sản Xuất
                </Text>
              </TouchableHighlight>
            </View>
          )}
        </View>
        <View style={{ flexBasis: "48%", zIndex: 11 }}>
          <TouchableOpacity
            onPress={handleToggleSelectedType}
            style={{
              backgroundColor: Colors.bgPrimary,
              padding: 12,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
              {type && type?.name}
            </Text>
            <Ionicons name="chevron-down" color={Colors.textWhite} size={20} />
          </TouchableOpacity>
          {isSelectedType && (
            <View
              style={{
                backgroundColor: Colors.bgPrimary,
                borderWidth: 0.5,
                borderColor: "white",
                borderRadius: 5,
                position: "absolute",
                top: "100%",
                width: "100%",
              }}
            >
              <TouchableHighlight
                onPressIn={() => {
                  setType({ name: "Phim Mới", slug: "phim-moi" });
                  handleToggleSelectedType();
                }}
                style={{ padding: 12 }}
                underlayColor={Colors.primary}
                onPress={() => console.log(123)}
              >
                <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                  Phim mới
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPressIn={() => {
                  setType({ name: "Phim Lẻ", slug: "phim-le" });
                  handleToggleSelectedType();
                }}
                style={{ padding: 12 }}
                underlayColor={Colors.primary}
                onPress={() => console.log(123)}
              >
                <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                  Phim Lẻ
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPressIn={() => {
                  setType({ name: "Phim Bộ", slug: "phim-bo" });
                  handleToggleSelectedType();
                }}
                style={{ padding: 12 }}
                underlayColor={Colors.primary}
                onPress={() => console.log(123)}
              >
                <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                  Phim Bộ
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPressIn={() => {
                  setType({ name: "Phim Hoạt Hình", slug: "hoat-hinh" });
                  handleToggleSelectedType();
                }}
                style={{ padding: 12 }}
                underlayColor={Colors.primary}
                onPress={() => console.log(123)}
              >
                <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                  Phim Hoạt Hình
                </Text>
              </TouchableHighlight>
            </View>
          )}
        </View>
        <View style={{ flexBasis: "48%", position: "relative", zIndex: 10 }}>
          <TouchableOpacity
            onPress={handleToggleSelectedCategory}
            style={{
              backgroundColor: Colors.bgPrimary,
              padding: 12,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
              {category ? category?.name : "-- Thể Loại --"}
            </Text>
            <Ionicons name="chevron-down" color={Colors.textWhite} size={20} />
          </TouchableOpacity>
          {isSelectedCategory && categorySelector && (
            <ScrollView
              nestedScrollEnabled={true}
              style={{
                backgroundColor: Colors.bgPrimary,
                borderWidth: 0.5,
                borderColor: "white",
                borderRadius: 5,
                position: "absolute",
                top: "100%",
                width: "100%",
                height: 300,
              }}
            >
              <TouchableHighlight
                style={{ padding: 12 }}
                underlayColor={Colors.primary}
                onPress={() => {
                  setCategory(null);
                  handleToggleSelectedCategory();
                }}
              >
                <Text style={{ color: Colors.textGrey, fontSize: 16 }}>
                  -- Thể Loại --
                </Text>
              </TouchableHighlight>
              {categorySelector?.map((item: any, index: any) => {
                return (
                  <TouchableHighlight
                    key={index}
                    style={{ padding: 12 }}
                    underlayColor={Colors.primary}
                    onPress={() => {
                      setCategory(item);
                      handleToggleSelectedCategory();
                    }}
                  >
                    <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                      {item?.name}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          )}
        </View>
        <View style={{ flexBasis: "48%", position: "relative" }}>
          <TouchableOpacity
            onPress={handleToggleSelectedCountry}
            style={{
              backgroundColor: Colors.bgPrimary,
              padding: 12,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
              {country ? country?.name : "-- Quốc Gia --"}
            </Text>
            <Ionicons name="chevron-down" color={Colors.textWhite} size={20} />
          </TouchableOpacity>
          {isSelectedCountry && countrySelector && (
            <ScrollView
              nestedScrollEnabled={true}
              style={{
                backgroundColor: Colors.bgPrimary,
                borderWidth: 0.5,
                borderColor: "white",
                borderRadius: 5,
                position: "absolute",
                top: "100%",
                width: "100%",
                height: 300,
              }}
            >
              <TouchableHighlight
                onPress={() => {
                  setCountry(null);
                  handleToggleSelectedCountry();
                }}
                style={{ padding: 12 }}
                underlayColor={Colors.primary}
              >
                <Text style={{ color: Colors.textGrey, fontSize: 16 }}>
                  -- Quốc Gia --
                </Text>
              </TouchableHighlight>
              {countrySelector?.map((item: any, index: any) => {
                return (
                  <TouchableHighlight
                    key={index}
                    style={{ padding: 12 }}
                    underlayColor={Colors.primary}
                    onPress={() => {
                      setCountry(item);
                      handleToggleSelectedCountry();
                    }}
                  >
                    <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                      {item?.name}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          )}
        </View>
        <View style={{ flexBasis: "48%", position: "relative" }}>
          <TouchableOpacity
            onPress={handleToggleSelectedYear}
            style={{
              backgroundColor: Colors.bgPrimary,
              padding: 12,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
              {year ? year : "-- Năm --"}
            </Text>
            <Ionicons name="chevron-down" color={Colors.textWhite} size={20} />
          </TouchableOpacity>
          {isSelectedYear && years && (
            <ScrollView
              nestedScrollEnabled={true}
              style={{
                backgroundColor: Colors.bgPrimary,
                borderWidth: 0.5,
                borderColor: "white",
                borderRadius: 5,
                position: "absolute",
                top: "100%",
                width: "100%",
                height: 300,
              }}
            >
              <TouchableHighlight
                style={{ padding: 12 }}
                underlayColor={Colors.primary}
                onPress={() => {
                  setYear(null);
                  handleToggleSelectedYear();
                }}
              >
                <Text style={{ color: Colors.textGrey, fontSize: 16 }}>
                  -- Năm --
                </Text>
              </TouchableHighlight>
              {years?.map((item: any, index: any) => {
                return (
                  <TouchableHighlight
                    key={index}
                    style={{ padding: 12 }}
                    underlayColor={Colors.primary}
                    onPress={() => {
                      setYear(item);
                      handleToggleSelectedYear();
                    }}
                  >
                    <Text style={{ color: Colors.textWhite, fontSize: 16 }}>
                      {item}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          )}
        </View>
      </View>
      {/* Button Search */}
      <TouchableOpacity
        onPress={() => handleGetMovies(type?.slug, sort?.slug, category?.slug || "", country?.slug || "", year || "")}
        style={{
          backgroundColor: Colors.primary,
          padding: 10,
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 50,
          margin: 12,
          marginTop: 24,
        }}
      >
        <Text
          style={{ color: Colors.textWhite, fontSize: 16, fontWeight: "500" }}
        >
          Lọc Phim
        </Text>
      </TouchableOpacity>
    </View>
  );
}
