import React from "react";
import Gnb from "../components/UI/Gnb/Gnb";
import styled from "styled-components";
import Header from "../components/UI/Header/Header";
import Item from "../components/UI/Item/Item";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { dummyItemList } from "../assets/dummyData";

const Home = () => {
  const getItemData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyItemList);
      }, 400);
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

  if (isLoading) {
    return <div>홈 로딩 중</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Home useQuery의 getData 함수 실행 이후에 표시됨</div>;
  }
  console.log("홈 데이터", data);

  return (
    <Wrapper>
      <Header title={"군자동"} />
      <Item item={data} />
      <LinkContainer>
        <CustomLink to="/createauction">
          <CreateAuctionButton />
        </CustomLink>
      </LinkContainer>
      <Footer>
        <Gnb />
      </Footer>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;

const Footer = styled.div`
  bottom: 0;
  width: 100%;
  position: fixed;
  z-index: 10;
`;

const CreateAuctionButton = styled(BsPlusCircle)`
  font-size: 5rem;
  cursor: pointer;
  color: #4636fc;
  margin-right: 2rem;
`;

const LinkContainer = styled.div`
  position: fixed;
  bottom: 90px;
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: flex-end;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
