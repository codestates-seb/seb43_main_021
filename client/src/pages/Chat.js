import React from "react";
import styled from "styled-components";
import Gnb from "../components/UI/Gnb/Gnb";
import Header from "../components/UI/Header/Header";
import ChatItem from "../components/Chat/ChatItem";
const Chat = () => {
  return (
    <>
      <Container>
        <Header title={"채팅"} />
      </Container>
      <ChatItem />
      <Footer>
        <Gnb />
      </Footer>
    </>
  );
};
const Container = styled.div``;

const Footer = styled.div`
  bottom: 0;
  width: 100%;
  position: fixed;
  z-index: 10;
`;

export default Chat;
