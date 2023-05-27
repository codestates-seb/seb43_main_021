import React from "react";
import Gnb from "../components/UI/Gnb/Gnb";
import styled from "styled-components";
import Header from "../components/UI/Header/Header";
import Item from "../components/UI/Item/Item";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import useGetItemList from "../hooks/useGetItemList";
import Loading from "../components/UI/Loading/Loading";
import useAccessToken from "../hooks/useAccessToken";

const Home = () => {
  const titleList = ["전체", "강동구", "노원구", "중랑구", "광진구", "마포구"];
  const { data, isLoading, isError, error } = useGetItemList();
  console.log("main data:", data);

  const login = useAccessToken();
  console.log("isLoggedIn:", login);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // if (!data) {
  //   return <div>Home useQuery의 getData 함수 실행 이후에 표시됨</div>;
  // }

  return (
    <>
      <Wrapper>
        <Header titleList={titleList} />
        <Item item={data} />
        <LinkContainer>
          <CustomLink to="/createauction">
            <CreateAuctionButton />
          </CustomLink>
        </LinkContainer>
      </Wrapper>
      <Footer>
        <Gnb />
      </Footer>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
`;

const Footer = styled.div`
  bottom: 0;
  width: 100%;
  position: fixed;
  z-index: 10;
`;

const CreateAuctionButton = styled(BsPlusCircle)`
  font-size: 5rem;
  cursor: pointer;
  color: var(--purple2-color);
  margin-right: 1.5rem;
`;

const LinkContainer = styled.div`
  position: fixed;
  bottom: 90px;
  max-width: 1024px;
  display: flex;
  justify-content: flex-end;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
