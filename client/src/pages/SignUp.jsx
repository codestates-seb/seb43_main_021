import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsChevronLeft, BsGoogle } from "react-icons/bs";

const SignUp = () => {

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <BackButton onClick={() => navigate('/')} /> {/* onClick={() => navigate{"/Home"}} 이벤트 넣기 */}
        <HeaderTitle>
          <h2>회원가입</h2>
        </HeaderTitle>
      </Header>
      <Container>
        <Body>
          <CreateId>
            <CreateIdTitle>
              <h3>아이디</h3>
            </CreateIdTitle>
            <CreateIdInput>
              <input placeholder="공백 / 특수문자 제외 5글자 이상"></input>
            </CreateIdInput>
          </CreateId>
          <CreatePw>
            <CreatePwTitle>
              <h3>비밀번호</h3>
            </CreatePwTitle>
            <CreatePwInput>
              <input placeholder="영문 + 숫자 조합의 8글자 이상"></input>
            </CreatePwInput>
          </CreatePw>
          <AgainPw>
            <input placeholder="비밀번호 재입력"></input>
          </AgainPw>
          <CreateNickName>
            <CreateNickNameTitle>
              <h3>닉네임</h3>
            </CreateNickNameTitle>
            <CreateNickNameInput>
              <input placeholder="닉네임"></input>
            </CreateNickNameInput>
          </CreateNickName>
          <AddEmail>
              <AddEmailTitle>
                <h3>이메일</h3>
              </AddEmailTitle>
              <AddEmailInput>
                <input type="email" placeholder="이메일"></input>
              </AddEmailInput>
          </AddEmail>
          <AddPhone>
            <AddPhoneTitle>
              <h3>휴대폰</h3>
            </AddPhoneTitle>
            <AddPhoneInput>
              <input placeholder="휴대폰 번호"></input>
            </AddPhoneInput>
          </AddPhone>
          <SignUpBtn>
            <button>회원가입 하기</button>
          </SignUpBtn>
          <GgSignUpBtn>
            <button> <BsGoogle /> Google로 회원가입 하기</button>
          </GgSignUpBtn>
        </Body>
      </Container>
      </Wrapper>
  )
};

export default SignUp;

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
  background-color: #F2F3F7;
  padding: 1rem;
  width: 100%;
`;

const Body = styled.div`
  background-color: #ffffff;
  padding: 1rem;
`;

const CreateId = styled.div`
  padding-top: 1rem;
`;

const CreateIdTitle = styled.div`
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

const CreateIdInput = styled.div`
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

const CreatePw = styled.div`
  padding-top: 1rem;
`;

const CreatePwTitle = styled.div`
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

const CreatePwInput = styled.div`
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

const AgainPw = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;

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

const CreateNickName = styled.div`
  padding-top: 1rem;
`;

const CreateNickNameTitle = styled.div`
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

const CreateNickNameInput = styled.div`
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

const AddEmail = styled.div`
  padding-top: 1rem;
`;

const AddEmailTitle = styled.div`
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

const AddEmailInput = styled.div`
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

const AddPhone = styled.div`
  padding-top: 1rem;
`;

const AddPhoneTitle = styled.div`
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

const AddPhoneInput = styled.div`
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

const SignUpBtn = styled.div`
  padding-top: 3rem;
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

    @media screen and (min-width: 768px) {
      width: 28rem;
    }
  }
`;

const GgSignUpBtn = styled.div`
  padding-top: 2rem;
  padding-bottom: 0.5rem;
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
