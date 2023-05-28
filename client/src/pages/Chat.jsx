import React, { useEffect } from "react";
import styled from "styled-components";
import Gnb from "../components/UI/Gnb/Gnb";
import Header from "../components/UI/Header/Header";
import ChatItem from "../components/Chat/ChatItem";
import { useNavigate } from "react-router-dom";
import useAccessToken from "../hooks/useAccessToken";
import { loginState } from "../stores/atoms";
import { useRecoilState } from "recoil";

const Chat = () => {
  const [login] = useRecoilState(loginState);
  useAccessToken();
  const navigate = useNavigate();

  return (
    <>
      {login === true ? (
        <>
          <Container>
            <Header title={"채팅"} />
          </Container>
          <ChatItem />
          <Footer>
            <Gnb />
          </Footer>
        </>
      ) : (
        navigate("/login")
      )}
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
