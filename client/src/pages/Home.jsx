import React from "react";
import Gnb from "../components/UI/Gnb/Gnb";
import styled from "styled-components";
import Header from "../components/UI/Header/Header";
import Item from "../components/UI/Item/Item";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <Header title={"군자동"} />
      <Item />
      <CustomLink to="/createauction">
        <CreateAuctionButton />
      </CustomLink>
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

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  position: fixed;
  bottom: 90px;
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: flex-end;
`;
