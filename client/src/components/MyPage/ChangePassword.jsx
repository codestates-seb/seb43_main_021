import { useState } from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ItemButton } from '../UI/Item/ItemButton'
import { ItemButton2 } from '../UI/Item/ItemButton2'

export default function ChangePassword(){  
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");



  const onChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onClickLogin = () => {
    if (password === "") {
      setErrorMessage("비밀번호를 입력해주세요.");
    } else if (password !== "") {
      setErrorMessage("비밀번호가 올바르지 않습니다.");
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
  return(
    <Wrapper>
      <TopTitle>계정 정보</TopTitle>
      <InputWrapper>
        <InputTitle>
          <h3>비밀번호</h3>
        </InputTitle>
        <InputField>
          <input placeholder="영문 + 숫자 조합의 8글자 이상" value={password} onChange={onChangePassword}></input>
        </InputField>
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          <h3>새 비밀번호</h3>
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
      <ButtonArea>
        <Cancellation to='/mypage'>
          <ItemButton2/> 
        </Cancellation>
        <Permit onClick={onClickLogin}>
          <ItemButton/>           
        </Permit>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ButtonArea>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;  
  margin-left: 1rem;
` 
const TopTitle = styled.div`
  margin-top: 1.75rem;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 2rem;
`
const InputWrapper = styled.div`
  padding-top: 1rem;
`;
const InputTitle = styled.div`
  display: flex;  
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

const ButtonArea = styled.div`
  display: flex;      
  margin: 4.25rem 2rem 0 2rem;
`
const Cancellation = styled(Link)`
    text-decoration: none;
  >div{
    width: 148px;
    height: 46px;    
  }
  @media screen and (min-width: 768px){
    >div{
      width: 180px;
    }
  }
`;
const Permit = styled.div`
  >div{
    width: 148px;
    height: 46px;
    margin-left: 0.5rem;        
  }
  @media screen and (min-width: 768px){
    >div{
      width: 180px;
      margin-left: 2rem;
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