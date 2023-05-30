import React, { useEffect } from "react";
import styled from "styled-components";
import Gnb from "../components/UI/Gnb/Gnb";
import Header from "../components/UI/Header/Header";
import ChatItem from "../components/Chat/ChatItem";
import { useNavigate } from "react-router-dom";
import useAccessToken from "../hooks/useAccessToken";

const Chat = () => {
  useAccessToken();
  const navigate = useNavigate();
  const memberId = localStorage.getItem("memberId");

  // useEffect(() => {
  //   if (!memberId) {
  //     navigate("/login");
  //   }
  // }, [memberId]);

  console.log(memberId);
  return (
    <Container>
      {memberId ? (
        <>
          <Container>
            <Header title={"채팅"} />
          </Container>
          <ChatItem />
          <Footer>
            <Gnb />
          </Footer>
        </>
      ) : null}
    </Container>
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
