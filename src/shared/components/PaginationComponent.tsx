import Colors from "@/src/utils/Colors";
import { useEffect, useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";

export default function Paginationcomponent({ params, handleGetMovies }: any) {
  const [pageCurrent, setPageCurrent] = useState<any>(1);
  const [totalPage, setTotalPage] = useState<any>(0);
  const [sort, setSort] = useState<any>({
    name: "Thời gian đăng",
    slug: "modified.time",
  });
  const [typeSlug, setTypeSlug] = useState<any>({
    name: "Phim mới",
    slug: "phim-moi",
  });
  const [categorySlug, setCategorySlug] = useState<any>("");
  const [countrySlug, setCountrySlug] = useState<any>("");
  const [year, setYear] = useState<any>("");
  useEffect(() => {
    if (params) {
      setPageCurrent(params?.pagination?.currentPage);
      setTotalPage(params?.pagination?.pageRanges);
      setTypeSlug(params?.type_list);
      setSort(params?.sortField);
      setCategorySlug(params?.filterCategory[0]);
      setCountrySlug(params?.filterCountry[0]);
    }
  }, []);
  const getPageNumbers = () => {
    const pages = [];
    pages.push(1); // Trang đầu tiên
    if (pageCurrent > 3) {
      pages.push("..."); // Dấu "..." trước trang hiện tại
    }
    // Các trang giữa
    for (
      let i = Math.max(2, pageCurrent - 1);
      i <= Math.min(totalPage - 1, pageCurrent + 1);
      i++
    ) {
      pages.push(i);
    }
    if (pageCurrent < totalPage - 2) {
      pages.push("..."); // Dấu "..." sau trang hiện tại
    }
    pages.push(totalPage); // Trang cuối cùng
    return pages;
  };

  const handlePageClick = async (page: any) => {
    if (page !== "..." && page != pageCurrent) {
      setPageCurrent(page);
      if (typeSlug || sort || categorySlug || countrySlug || year || page ) {
        await handleGetMovies(
          typeSlug || "phim-moi",
          sort || "modified.time",
          categorySlug || "",
          countrySlug || "",
          year || "",
          page || ""
        );
      }
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      {getPageNumbers().map((page, index) => (
        <TouchableHighlight
          key={index}
          underlayColor={Colors.primary}
          onPress={() => handlePageClick(page)}
          style={{
            backgroundColor:
              page === pageCurrent ? Colors.primary : Colors.bgButton,
            width: 35,
            height: 35,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: Colors.textWhite }}>{page}</Text>
        </TouchableHighlight>
      ))}
    </View>
  );
}
