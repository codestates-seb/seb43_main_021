import { useState } from 'react'
import styled from "styled-components"
import { Link, useNavigate } from 'react-router-dom'
import { ItemButton } from '../UI/Item/ItemButton'
import { ItemButton2 } from '../UI/Item/ItemButton2'
import axios from 'axios'
export default function ChangePassword(){  
  const navigate = useNavigate();

  const [password, setPassword] = useState("");//password State
  const [newPassword, setNewPassword] = useState("");//new password State
  const [confirmPassword, setConfirmPassword] = useState("");//confirmPassword State

  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");//password error State
  const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState("");//new password error State
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState("");//confirmPassword error State



  // PW
  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length > 16) {
      setPasswordErrorMessage("비밀번호는 최대 16글자까지 입력 가능합니다.");
    } else if (value.length < 4 || !/^(?=.*[a-zA-Z0-9])(?=.*\d).{4,}$/.test(value)) {
      setPasswordErrorMessage("비밀번호를 영문 + 숫자 조합의 4글자 이상으로 입력해주세요.");
    } else {
    setPasswordErrorMessage("");
    }
  };

  // New PW
  const onChangeNewPassword = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    if (value.length > 16) {
      setNewPasswordErrorMessage("비밀번호는 최대 16글자까지 입력 가능합니다.");
    } else if (value.length < 4 || !/^(?=.*[a-zA-Z0-9])(?=.*\d).{4,}$/.test(value)) {
      setNewPasswordErrorMessage("비밀번호를 영문 + 숫자 조합의 4글자 이상으로 입력해주세요.");
    } else if (value===password){
      setNewPasswordErrorMessage("기존의 비밀번호와 동일합니다.")
    } else {
      setNewPasswordErrorMessage("");
    } 
  };

  // ConfirmPW
  const onChangePasswordConfirm = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (newPassword !== value) {
      setConfirmPasswordErrorMessage("생성한 비밀번호와 동일하게 입력해주세요.");
    } else {
    setConfirmPasswordErrorMessage("");
    }
  };
  // Pw Change Button
  const onClickChangePw = () => {
    if (
      password && newPassword &&confirmPassword&& !passwordErrorMessage &&!newPasswordErrorMessage && !confirmPasswordErrorMessage
    ) {
      axios
        .patch(
          'http://ec2-13-125-170-160.ap-northeast-2.compute.amazonaws.com:8080/member/profile/2',
          {            
            password: newPassword,
          }
        )
        .then((res=>{
          setPassword(res.data.password); 
          console.log(res.data.password);
          console.log("비밀번호가 성공적으로 변경되었습니다!");     
          navigate("/mypage")

        }))
        .catch((err) => {
          console.log(err);
        });      
    } else {
      console.log("필수 입력 영역을 모두 올바르게 작성해주세요.")      
      setPasswordErrorMessage(!password||passwordErrorMessage? passwordErrorMessage || "비밀번호를 입력해주세요.":"");
      setNewPasswordErrorMessage(!newPassword||newPasswordErrorMessage?newPasswordErrorMessage|| "새 비밀번호를 입력해주세요.":"")
      setConfirmPasswordErrorMessage(!confirmPassword||confirmPasswordErrorMessage?confirmPasswordErrorMessage || "새 비밀번호를 재입력해주세요.":"");      
    }
  };
  return(
    <Wrapper>
      <TopTitle>계정 정보</TopTitle>
      <InputWrapper>
        <InputTitle>
          <h3>비밀번호</h3><span>*</span>
        </InputTitle>
        <InputField>
          <input           
          placeholder="영문 + 숫자 조합의 4글자 이상" 
          value={password} 
          onChange={onChangePassword}>
          </input>
        </InputField>
        {<ErrorMessage>{passwordErrorMessage}</ErrorMessage>}
      </InputWrapper>
      <InputWrapper>
        <InputTitle>
          <h3>새 비밀번호</h3><span>*</span>
        </InputTitle>
        <InputField>
          <input           
          placeholder="영문 + 숫자 조합의 4글자 이상"
          value={newPassword}
          onChange={onChangeNewPassword}></input>
        </InputField>
        {<ErrorMessage>{newPasswordErrorMessage}</ErrorMessage>}
      </InputWrapper>
      <InputWrapper>
        <InputField>
          <input           
          placeholder="비밀번호 재입력"
          value={confirmPassword}
          onChange={onChangePasswordConfirm} ></input>
        </InputField>
        {<ErrorMessage>{confirmPasswordErrorMessage}</ErrorMessage>}
      </InputWrapper>      
      <ButtonArea>
        <Cancellation to='/mypage'>
          <ItemButton2/> 
        </Cancellation>
        <Permit onClick={onClickChangePw}>
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
  span {
    padding-left: 0.1rem;
    padding-bottom: 0.6rem;
    color: red;
    font-weight: bold;
  }
`;

const InputField = styled.div`
  display: flex;  

  input {
    background-color: #f5f5f5;
    border: none;
    outline: none;
    width: 96%;
    height: 2.8rem;
    border-radius: 5px;
    font-size: 12px;
    padding-left: 1rem;    
  }

  input::placeholder {
    color: #aaaaaa;
  }  
`;

const ButtonArea = styled.div`
  display: flex;      
  margin: 4.25rem 2rem 0 2rem;
  justify-content: center;
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
  padding-top: 0.5rem;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;

    @media screen and (min-width: 768px) {
      font-size: 12px;
    }
`;