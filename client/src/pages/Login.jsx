import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import LoginFrom from "../components/Login/LoginForm";
import LoginOauth from "../components/Login/LoginOauth";

const Login = () => {

  const navigate = useNavigate();
  
  return (
    <Wrapper>
      <Header>
      <BackButton onClick={() => navigate('/')} />
        <HeaderTitle>
          <h2>로그인</h2>
        </HeaderTitle>
      </Header>
      <Container>
        <LoginFrom />
        <LoginOauth />
      </Container>
    </Wrapper>
  )
};

export default Login;

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
    padding: 2rem 1.5rem;
    height: 5.6rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    position: relative;
    border-color: hsl(210, 8%, 90%);
    border-bottom-style: solid;
    border-bottom-width: 1px;
`;

const BackButton = styled(BsChevronLeft)`
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  padding-left: 1.5rem;
  h2 {
    font-size: 15px;
    font-weight: bold;
  }
`;

const Container = styled.div`
  padding: 1rem;
  width: 100%;
`;
