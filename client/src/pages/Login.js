import React from "react";
import styled from "styled-components";
import { BsChevronLeft, BsGoogle } from "react-icons/bs";

const Login = () => {
  return (
    <Wrapper>
      <Header>
      <BsChevronLeft /> {/* onClick={() => navigate{"/Home"}} 이벤트 넣기 */}
        <HeaderTitle>
          <h2>로그인</h2>
        </HeaderTitle>
      </Header>
      <Container>
        <Body>
          <IdInputBox>
            <input placeholder="아이디"></input>
          </IdInputBox>
          <PwInputBox>
            <input placeholder="비밀번호"></input>
          </PwInputBox>
          <LoginBtn>
            <button>로그인</button>
          </LoginBtn>
          <UserInfo>
            <SignUpBtn>
              <button>회원가입</button>
            </SignUpBtn>
            <FindId>
              <button>아이디찾기</button>
            </FindId>
            <FindPw>
              <button>비밀번호찾기</button>
            </FindPw>
          </UserInfo>
          <GuestLogIn>
            <button>게스트 로그인</button>
          </GuestLogIn>
          <GgLonInBtn>
            <button> <BsGoogle /> Google로 로그인 하기</button>
          </GgLonInBtn>
        </Body>
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

const Body = styled.div`
  padding: 1rem;
`;

const IdInputBox = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    background-color: #F5F5F5;
    border: none;
    outline: none;
    width: 22rem;
    height: 2.8rem;
    border-radius: 5px;
    font-size: 12px;
    padding-left: 1rem;

    @media screen and (min-width: 768px) {
      width: 28rem;
    }
  }

  input::placeholder {
    color: #AAAAAA;
  }
`;

const PwInputBox = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

input {
    background-color: #F5F5F5;
    border: none;
    outline: none;
    width: 22rem;
    height: 2.8rem;
    border-radius: 5px;
    font-size: 12px;
    padding-left: 1rem;

    @media screen and (min-width: 768px) {
      width: 28rem;
    }
  }

  input::placeholder {
    color: #AAAAAA;
  }
`;

const LoginBtn = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: #5170FD;
    color: #FFFFFF;
    border: none;
    width: 22rem;
    height: 2.8rem;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;

    @media screen and (min-width: 768px) {
      width: 28rem;
    }
  }
`;

const UserInfo = styled.div`
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUpBtn = styled.div`
  padding-right: 1rem;
  border-color: #000000;
  border-right-style: solid;
  border-right-width: 1px;

  button {
    width: 3.5rem;
    border: none;
    outline: none;
    background-color: #FFFFFF;
    font-weight: bold;
  }
`;

const FindId = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  border-color: #000000;
  border-right-style: solid;
  border-right-width: 1px;

  button {
    width: 4.5rem;
    border: none;
    outline: none;
    background-color: #FFFFFF;
    font-weight: bold;
  }
`;

const FindPw = styled.div`
  padding-left: 1rem;

  button {
    width: 5rem;
    border: none;
    outline: none;
    background-color: #FFFFFF;
    font-weight: bold;
  }
`;

const GuestLogIn = styled.div`
  padding-top: 4rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: #4636FC;
    color: #FFFFFF;
    border: none;
    width: 22rem;
    height: 2.8rem;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;

    @media screen and (min-width: 768px) {
      width: 28rem;
    }
  }
`;

const GgLonInBtn = styled.div`
  padding-top: 1.2rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: 3px solid #000000;
    background-color: #FFFFFF;
    width: 22rem;
    height: 2.8rem;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;

    @media screen and (min-width: 768px) {
      width: 28rem;
    }
  }
`;