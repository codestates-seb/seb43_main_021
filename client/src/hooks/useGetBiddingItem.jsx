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
      `http://ec2-3-34-46-159.ap-northeast-2.compute.amazonaws.com:8080/bid_items/${auctionItemId}/${bidItemId}`
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
