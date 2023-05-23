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
      "http://ec2-3-34-46-159.ap-northeast-2.compute.amazonaws.com:8080/auction_items"
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
