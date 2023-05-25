import React from "react";
import styled from "styled-components";
import { BsGoogle } from "react-icons/bs";

const SignUpOauth = () => {
  return (
    <Form>
      <GgSignUpBtn>
        <button>
          {" "}
          <BsGoogle /> Google로 회원가입 하기
        </button>
      </GgSignUpBtn>
    </Form>
  );
};

export default SignUpOauth;

const Form = styled.div``;

const GgSignUpBtn = styled.div`
  padding-top: 2rem;
  padding-bottom: 0.5rem;
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

    @media screen and (min-width: 768px) {
      width: 28rem;
    }
  }
`;
