import React from "react";
import styled from "styled-components";
import { BiInfoCircle } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri"
import { BiLogOut } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
export default function UserInfo(){
  return(
    <Wrapper>
      나의 활동
      <MySeletorContainer>
        <IconContainer>
          <BiInfoCircle/>
          내 정보수정
        </IconContainer>
        <IconContainer>
          <RiLockPasswordFill/>
          비밀번호 변경
        </IconContainer>
        <IconContainer>
          <BiLogOut/>
          로그아웃
        </IconContainer>
        <IconContainer>
          <BsPeople/>
          회원탈퇴
        </IconContainer>
      </MySeletorContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 29.25rem;  
  padding-left: 1rem;
  margin-top: 1.25rem;
  font-size: 15px;
  font-weight: bold;
  svg{
    width: 24px;
    height: 24px;
    margin-right: 1rem;
    cursor: pointer;
  }
`

const MySeletorContainer = styled.div`
  margin-left: 0.25rem;
  position: absolute;
  margin-top: 4rem;
`
const IconContainer = styled.div`
  margin-bottom: 1.75rem;  
  display: flex;
  align-items: center;  
  cursor: pointer;  
`