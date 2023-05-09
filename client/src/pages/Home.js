import React from "react";
import Gnb from "../components/UI/Gnb/Gnb";
import styled from "styled-components";
import Header from "../components/UI/Header/Header";
import Item from "../components/UI/Item/Item";

const Home = () => {
  return (
    <Wrapper>
      <Header title={"군자동"} />

      <Item />
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
