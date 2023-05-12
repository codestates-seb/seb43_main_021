import React from "react";
import styled from "styled-components";

const SignUpForm = () => {
  return (
    <Form>
      <InputWrapper>
        <InputTitle>
          <h3>아이디</h3>
        </InputTitle>
        <InputField>
          <input placeholder="공백 / 특수문자 제외 5글자 이상"></input>
        </InputField>
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          <h3>비밀번호</h3>
        </InputTitle>
        <InputField>
          <input placeholder="영문 + 숫자 조합의 8글자 이상"></input>
        </InputField>
      </InputWrapper>
      <InputWrapper>
        <InputField>
          <input placeholder="비밀번호 재입력"></input>
        </InputField>
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          <h3>닉네임</h3>
        </InputTitle>
        <InputField>
          <input placeholder="닉네임"></input>
        </InputField>
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          <h3>이메일</h3>
        </InputTitle>
        <InputField>
          <input type="email" placeholder="이메일"></input>
        </InputField>
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          <h3>휴대폰</h3>
        </InputTitle>
        <InputField>
          <input placeholder="휴대폰 번호"></input>
        </InputField>
      </InputWrapper>
      <SignUpBtn>
        <button>회원가입 하기</button>
      </SignUpBtn>
    </Form>
  );
};

export default SignUpForm;

const Form = styled.div``;

const InputWrapper = styled.div`
  padding-top: 1rem;
`;

const InputTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 19.5rem;

  @media screen and (min-width: 768px) {
    padding-right: 25rem;
  }

  h3 {
    padding-bottom: 0.5rem;
    font-size: 12px;
    font-weight: bold;
  }
`;

const InputField = styled.div`
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

const SignUpBtn = styled.div`
  padding-top: 3rem;
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

        @media screen and (min-width: 768px) {
        width: 28rem;
        }
    }
`;