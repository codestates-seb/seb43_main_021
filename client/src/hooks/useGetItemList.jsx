import { useQuery } from "react-query";
import { dummyItemList } from "../assets/dummyData";

const useGetItemList = () => {

  const getItemData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyItemList);
      }, 100);
    });
  };

  const { data, isLoading, isError, error } = useQuery(
    "getItemData",
    getItemData,
    {
      staleTime: 0,
      cacheTime: 0,
    }
  );

  return { data, isLoading, isError, error };
};

export default useGetItemList;
