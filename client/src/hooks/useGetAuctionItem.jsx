import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { dummyItem } from "../assets/dummyData";
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
      `http://ec2-3-34-46-159.ap-northeast-2.compute.amazonaws.com:8080/auction_items/${auctionItemId}`,
      {
        withCredentials: true,
      }
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
