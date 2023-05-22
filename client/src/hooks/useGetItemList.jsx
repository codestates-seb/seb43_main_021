import { useQuery } from "react-query";
import { dummyItemList } from "../assets/dummyData";

const useGetItemList = () => {
  const getItemData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyItemList);
      }, 1000);
    });
  };
  // const getItemData = async () =>{
  //   const response =
  // }

  const { data, isLoading, isError, error } = useQuery(
    ["getItemData"],
    getItemData
  );

  return { data, isLoading, isError, error };
};

export default useGetItemList;
