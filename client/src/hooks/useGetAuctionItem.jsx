import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { dummyItem } from "../assets/dummyData";

const useGetAuctionItem = () => {
  const { auctionId } = useParams();

  const getData = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyItem[auctionId]);
      }, 100);
    });
  };

  const { data, isLoading, isError, error } = useQuery("getData", getData, {
    staleTime: 0,
    cacheTime: 0,
  });

  return { data, isLoading, isError, error, auctionId };
};

export default useGetAuctionItem;
