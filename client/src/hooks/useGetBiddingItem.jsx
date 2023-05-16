import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { dummyItem } from "../assets/dummyData";

const useGetBiddingItem = () => {
  const { auctionId } = useParams();
  const { biddingId } = useParams();

  const getBiddingItemData = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyItem[auctionId].biddings[biddingId]);
      }, 100);
    });
  };

  const { data, isLoading, isError, error } = useQuery(
    "getBiddingItemData",
    getBiddingItemData,
    {
      staleTime: 0,
      cacheTime: 0,
    }
  );

  return { data, isLoading, isError, error };
};

export default useGetBiddingItem;
