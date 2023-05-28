import React from "react";
import styled from "styled-components";
import { BsGoogle } from "react-icons/bs";

const LoginOauth = () => {

  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&response_type=code&scope=email%20profile&redirect_uri=https://localhost:3000&scope=https://www.googleapis.com/auth/userinfo.email`;

  const onClickGoogleLogin = () => {
    window.location.assign(oAuthURL);
  }

  return (
    <Body>
      <GgLonInBtn>
        <button onClick={onClickGoogleLogin}>
          <BsGoogle /> Google로 로그인 하기
        </button>
      </GgLonInBtn>
    </Body>
  );
};

export default LoginOauth;

const Body = styled.div`
  padding: 0 1rem 1rem 1rem;
`;

const GgLonInBtn = styled.div`
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: 3px solid var(--black1-color);
    background-color: var(--white1-color);
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
