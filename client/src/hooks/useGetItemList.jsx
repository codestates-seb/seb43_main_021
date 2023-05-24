import { useQuery } from "react-query";
// import { dummyItemList } from "../assets/dummyData";
import axios from "axios";

const useGetItemList = () => {
  // const getItemData = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(dummyItemList);
  //     }, 1000);
  //   });
  // };
  const getItemData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/auction_items`
    );
    console.log("리액트쿼리 데이터", response.data);
    return response.data;
  };

  const { data, isLoading, isError, error } = useQuery(
    ["getItemData"],
    getItemData,
    {
      onError: () => {
        console.error("에러 발생!");
      },
    }
  );

  return { data, isLoading, isError, error };
};

export default useGetItemList;
