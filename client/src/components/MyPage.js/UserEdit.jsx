import React from "react";
import styled from "styled-components";
import { VscAccount } from "react-icons/vsc";
import { FaReceipt } from"react-icons/fa"
import { FaShoppingBag } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";

export default function UserEdit({userName}){
  
  return(
    <Wrapper>
      <ProfileIcon>
        <VscAccount/>
      </ProfileIcon>
      <UserName>{userName}</UserName>         
      <IconContainer>
        <IconArea>
          <FaReceipt/>
        </IconArea>
        <IconTextarea>경매내역</IconTextarea>
        <IconArea>
          <FaShoppingBag/>
        </IconArea>
        <IconTextarea2>입찰목록</IconTextarea2>
        <IconArea>
          <BsSuitHeartFill/>
        </IconArea>
        <IconTextarea3>관심목록</IconTextarea3>
      </IconContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 17.5rem;    
`

const ProfileIcon =  styled.div`
  margin-top: 1.25rem;
  margin-right: 1rem;
  margin-left: 1rem;
  >svg{
    width: 4.5rem;
    height: 4.5rem;
  }
`

const UserName = styled.div`
  margin-top: 2.75rem;
  font-weight: bold;
  font-size: 22px;
`

const IconContainer = styled.div`  
  display: flex;
  width: 100%;
  height: 14rem;
  position: absolute;  
  align-items: center;  
`
const IconArea = styled.div`
  margin-left: 4rem;
  margin-top: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 55px;
  background: #fbebde;
  border-radius: 50%;  
  cursor: pointer;
  >svg{
    width: 24px;
    height: 24px;    
    color: #4636fc;
  }
`

const IconTextarea = styled.div`
  margin-top: 0.5rem;
  font-size: 13px;  
  margin-left: 4.3rem;
  margin-top: 14rem;
  display: flex;
  position: absolute;
  cursor: pointer;
`
const IconTextarea2 = styled.div`
  margin-top: 0.5rem;
  font-size: 13px;  
  margin-left: 11.6rem;
  margin-top: 14rem;
  display: flex;
  position: absolute;
  cursor: pointer;
`
const IconTextarea3 = styled.div`
  margin-top: 0.5rem;
  font-size: 13px;  
  margin-left: 19rem;
  margin-top: 14rem;
  display: flex;
  position: absolute;
  cursor: pointer;
`