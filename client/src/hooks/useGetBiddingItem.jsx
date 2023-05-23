import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { dummyItem } from "../assets/dummyData";
import axios from "axios";
const useGetBiddingItem = () => {
  const { auctionItemId } = useParams();
  const { bidItemId } = useParams();

  // const getBiddingItemData = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(dummyItem[auctionItemId].biddings[bidItemId]);
  //     }, 100);
  //   });
  // };

  const getBidItemData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/bid_items/${auctionItemId}/${bidItemId}`
    );
    return response.data;
  };

  const { data, isLoading, isError, error } = useQuery(
    ["getBidItemData", `${auctionItemId}.${bidItemId}`],
    getBidItemData
  );

  return { data, isLoading, isError, error };
};

export default useGetBiddingItem;
