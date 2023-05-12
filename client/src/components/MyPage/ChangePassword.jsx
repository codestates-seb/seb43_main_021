import styled from "styled-components"
import { Link } from 'react-router-dom'
import { ItemButton } from '../UI/Item/ItemButton'
import { ItemButton2 } from '../UI/Item/ItemButton2'

export default function ChangePassword(){  
  return(
    <Wrapper>
      <TopTitle>계정 정보</TopTitle>
      <InputWrapper>
        <InputTitle>
          <h3>비밀번호</h3>
        </InputTitle>
        <InputField>
          <input placeholder="영문 + 숫자 조합의 8글자 이상"></input>
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
        <Permit>
          <ItemButton/>           
        </Permit>
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
  justify-content: center;  
  margin-top: 4.25rem;
  margin-right: 2rem;
`
const Cancellation = styled(Link)`
    text-decoration: none;
  >div{
    width: 148px;
    height: 46px;    
  }
`;
const Permit = styled.div`
  >div{
    width: 148px;
    height: 46px;
    margin-left: 0.5rem;        
  }
`;