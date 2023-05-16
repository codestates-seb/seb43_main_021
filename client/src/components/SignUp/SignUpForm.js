import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyData } from "../../assets/dummyData";
import styled from "styled-components";

const SignUpForm = () => {

  const navigate = useNavigate();

  // ID, PW, ConfirmPW, NickName 확인
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_Number] = useState("");

  // ID, PW, ConfirmPW, NickName 오류 메시지  
  const [idErrorMessage, setIdErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState("");
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");

  // ID
  const onChangeMemberId = (e) => {
    const value = e.target.value; // 정규식의 최소 글자에 맞춰도 경고 메시지가 노출되어 추가하여 수정
    setMemberId(value);
    if (value.length < 5 || !/^[\w\s]{5,}$/.test(value)) {
      setIdErrorMessage("아이디를 영문 및 영문+숫자 5글자 이상으로 입력해주세요.");
    } else {
      setIdErrorMessage("");
    }
  };

  // PW
  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8 || !/^(?=.*[a-zA-Z0-9])(?=.*\d).{8,}$/.test(value)) {
      setPasswordErrorMessage("비밀번호를 영문 + 숫자 조합의 8글자 이상으로 입력해주세요.");
    } else {
    setPasswordErrorMessage("");
    }
  };

  // ConfirmPW
  const onChangePasswordConfirm = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (password !== value) {
      setConfirmPasswordErrorMessage("생성한 비밀번호와 동일하게 입력해주세요.");
    } else {
    setConfirmPasswordErrorMessage("");
    }
  };

  // NickName
  const onChangeNickName = (e) => {
    const value = e.target.value;
    setNickName(value);
    if (value.length < 2 || !/^[\w\s]{2,}$/.test(value)) {
      setNicknameErrorMessage("닉네임을 영문 및 영문+숫자 2글자 이상으로 입력해주세요.");
    } else {
      setNicknameErrorMessage("");
    }
  };

  // email
  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value.length < 7 || !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(value)) {
      setEmailErrorMessage("유효한 이메일 주소를 입력해주세요.");
    } else {
      setEmailErrorMessage("");
    }
  };

  // phone
  const onChangePhoneNumber = (e) => {
    const value = e.target.value;
    setPhone_Number(value);
    if (value.length < 10 || !/^\d{3}-\d{3,4}-\d{4}$/.test(value)) {
      setPhoneErrorMessage("유효한 핸드폰 번호를 입력해주세요.");
    } else {
      setPhoneErrorMessage("");
    }
  };

  // 회원가입하기 버튼
  const onClickSignUp = () => {
    if (
      memberId && password && confirmPassword && nickName && !idErrorMessage && !passwordErrorMessage && !confirmPasswordErrorMessage && !nicknameErrorMessage
    ) {
      const newDummyData = {
        memberId,
        password,
        nickName,
        email,
        phone_number,
      };
      
      dummyData.push(newDummyData);

      console.log("회원가입이 성공적으로 완료되었습니다!");
      console.log("가입 정보:", newDummyData);
      navigate("/")
    } else {
      console.log("필수 입력 영역을 모두 올바르게 작성해주세요.")
      setIdErrorMessage(memberId ? "" : idErrorMessage || "아이디를 입력해주세요.");
      setPasswordErrorMessage(password ? "" : passwordErrorMessage || "비밀번호를 입력해주세요.");
      setConfirmPasswordErrorMessage(confirmPassword ? "" : confirmPasswordErrorMessage || "비밀번호를 재입력해주세요.");
      setNicknameErrorMessage(nickName ? "" : nicknameErrorMessage || "닉네임을 입력해주세요.");
    }
  };

  return (
    <Form>
      <InputWrapper>
        <InputTitle>
          <h3>아이디</h3><span>*</span>
        </InputTitle>
        <InputField>
          <input
            type="text"
            value={memberId}
            onChange={onChangeMemberId}
            placeholder="공백 / 특수문자 제외, 영문 및 영문+숫자 5글자 이상" />
        </InputField>
      </InputWrapper>
      {idErrorMessage && <ErrorMessage>{idErrorMessage}</ErrorMessage>}
      <InputWrapper>
        <InputTitle>
          <h3>비밀번호</h3><span>*</span>
        </InputTitle>
        <InputField>
          <input
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder="영문 + 숫자 조합의 8글자 이상" />
        </InputField>
      </InputWrapper>
      {<ErrorMessage>{passwordErrorMessage}</ErrorMessage>}
      <InputWrapper>
        <InputField>
          <input
            type="password"
            value={confirmPassword}
            onChange={onChangePasswordConfirm}
            placeholder="비밀번호 재입력" />
        </InputField>
      </InputWrapper>
      {confirmPasswordErrorMessage && (<ErrorMessage>{confirmPasswordErrorMessage}</ErrorMessage>)}
      <InputWrapper>
        <InputTitle>
          <h3>닉네임</h3><span>*</span>
        </InputTitle>
        <InputField>
          <input
            type="text"
            value={nickName}
            onChange={onChangeNickName}
            placeholder="공백 / 특수문자 제외, 영문 및 영문+숫자 2글자 이상"></input>
        </InputField>
      </InputWrapper>
      {nicknameErrorMessage && <ErrorMessage>{nicknameErrorMessage}</ErrorMessage>}
      <InputWrapper>
        <InputTitle>
          <h3>이메일</h3>
        </InputTitle>
        <InputField>
          <input type="email" value={email} onChange={onChangeEmail} placeholder="이메일"></input>
        </InputField>
      </InputWrapper>
      {emailErrorMessage && <ErrorMessage>{emailErrorMessage}</ErrorMessage>}
      <InputWrapper>
        <InputTitle>
          <h3>휴대폰</h3>
        </InputTitle>
        <InputField>
          <input type="phone_number" value={phone_number} onChange={onChangePhoneNumber} placeholder="휴대폰 번호"></input>
        </InputField>
      </InputWrapper>
      {phoneErrorMessage && <ErrorMessage>{phoneErrorMessage}</ErrorMessage>}
      <SignUpBtn>
        <button onClick={onClickSignUp}>회원가입 하기</button>
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

  span {
    padding-left: 0.1rem;
    padding-bottom: 0.6rem;
    color: red;
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

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  font-size: 11px;
  padding-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

    @media screen and (min-width: 768px) {
      font-size: 12px;
    }
`;