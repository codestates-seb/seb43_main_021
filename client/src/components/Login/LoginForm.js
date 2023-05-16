import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import axios from "axios";

const LoginFrom = () => {

  const navigate = useNavigate();

  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeMemberId = (event) => {
    setMemberId(event.currentTarget.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onClickLogin = () => {
    if (memberId === "" || password === "") {
      setErrorMessage("아이디와 비밀번호를 입력해주세요.");
    } else if (memberId !== "" || password !== "") {
      setErrorMessage("아이디 또는 비밀번호가 올바르지 않습니다.");
    } else {
      // .post("주소", { memberId, password }) < 서버로 POST 요청 보냄
      // .then((response) => {
      //  if (response) => { < 서버 응답처리
            navigate("/"); // < 로그인 성공 시
      //  } else {
          //  setErrorMessage(response.data.message); << 로그인 실패 시
    //  }
    //  })
    // .catch((error) => {
      // console.error("로그인 요청 에러:", error);
      // setErrorMessage
    // })
    }
  }

    return (
        <Body>
          <IdInputBox>
            <input value={memberId} onChange={onChangeMemberId} placeholder="아이디"></input>
          </IdInputBox>
          <PwInputBox>
            <input value={password} onChange={onChangePassword} placeholder="비밀번호"></input>
          </PwInputBox>
          <LoginBtn>
            <button onClick={onClickLogin}>로그인</button>
          </LoginBtn>
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <UserInfo>
            <SignUpBtn>
              <button onClick={() => navigate('/signup')}>회원가입</button>
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
        </Body>
    )
};

export default LoginFrom;

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
    cursor: pointer;

    @media screen and (min-width: 768px) {
      width: 28rem;
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;

    @media screen and (min-width: 768px) {
      font-size: 12px;
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
    cursor: pointer;
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