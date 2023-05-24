import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useRecoilState } from "recoil";
import { loginState } from "../../stores/atoms";
const LoginFrom = () => {
  const navigate = useNavigate();

  const [, setKeepLoggedIn] = useRecoilState(loginState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onClickLogin = () => {
    if (email === "" || password === "") {
      setErrorMessage("이메일과 비밀번호를 입력해주세요.");
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/auth/login`,
          {
            username: email,
            password: password,
          }
          // {
          //   withCredentials: true,
          // }
        )
        .then((res) => {
          if (res.data.result === "success") {
            const accessToken = res.headers.authorization;
            const refreshToken = res.headers.refresh;
            const memberId = res.headers.memberId;
            console.log("로그인 성공:", res.data, res.headers);

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            setKeepLoggedIn(true);
            localStorage.setItem("memberId", memberId);
            // navigate("/main");
          } else {
            setErrorMessage("이메일 또는 비밀번호가 올바르지 않습니다.");
          }
        })
        .catch((error) => {
          setErrorMessage("로그인에 실패했습니다.");
          console.error(error);
        });
    }
  };

  return (
    <Body>
      <IdInputBox>
        <input
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일"
        ></input>
      </IdInputBox>
      <PwInputBox>
        <input
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호"
        ></input>
      </PwInputBox>
      <LoginBtn>
        <button onClick={onClickLogin}>로그인</button>
      </LoginBtn>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <UserInfo>
        <SignUpBtn>
          <button onClick={() => navigate("/signup")}>회원가입</button>
        </SignUpBtn>
        <FindId>
          <button>이메일찾기</button>
        </FindId>
        <FindPw>
          <button>비밀번호찾기</button>
        </FindPw>
      </UserInfo>
      <GuestLogIn>
        <button>게스트 로그인</button>
      </GuestLogIn>
    </Body>
  );
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
    background-color: #f5f5f5;
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
    color: #aaaaaa;
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
    background-color: #f5f5f5;
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
    color: #aaaaaa;
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
    background-color: #5170fd;
    color: #ffffff;
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
    background-color: #ffffff;
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
    background-color: #ffffff;
    font-weight: bold;
  }
`;

const FindPw = styled.div`
  padding-left: 1rem;

  button {
    width: 5rem;
    border: none;
    outline: none;
    background-color: #ffffff;
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
    background-color: #4636fc;
    color: #ffffff;
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
