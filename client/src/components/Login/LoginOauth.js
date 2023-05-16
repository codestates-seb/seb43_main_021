import React from "react";
import styled from "styled-components";
import { BsGoogle } from "react-icons/bs"

const LoginOauth = () => {
    return (
        <Body>
           <GgLonInBtn>
            <button> <BsGoogle /> Google로 로그인 하기</button>
          </GgLonInBtn> 
        </Body>
    )
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