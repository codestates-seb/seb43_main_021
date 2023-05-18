import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { dummyItem } from "../assets/dummyData";

const useGetAuctionItem = () => {
  const { auctionId } = useParams();

  const getData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyItem[auctionId]);
      }, 100);
    });
  };

  const { data, isLoading, isError, error } = useQuery(
    ["getData", auctionId],
    getData
  );

  return { data, isLoading, isError, error, auctionId };
};

export default useGetAuctionItem;
