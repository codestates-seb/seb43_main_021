import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
// import { dummyItem } from "../assets/dummyData";
import axios from "axios";

const useGetAuctionItem = () => {
  const { auctionItemId } = useParams();

  // const getData = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(dummyItem[auctionId]);
  //     }, 100);
  //   });
  // };

  const getData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/auction_items/${auctionItemId}`
    );
    console.log("겟옥션 데이터", response.data);
    return response.data;
  };

  const { data, isLoading, isError, error } = useQuery(
    ["getData", auctionItemId],
    getData
  );

  return { data, isLoading, isError, error, auctionItemId };
};

export default useGetAuctionItem;
