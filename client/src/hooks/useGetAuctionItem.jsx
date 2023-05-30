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
    return response.data;
  };

  const {
    data: auctionData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery(["getData", auctionItemId], getData);

  return { auctionData, isLoading, isError, error, isSuccess, auctionItemId };
};

export default useGetAuctionItem;
