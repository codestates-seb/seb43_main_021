import React from "react";
import styled from "styled-components";
import { VscAccount } from "react-icons/vsc";
import { FaReceipt } from"react-icons/fa"
import { FaShoppingBag } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom"

export default function UserPageTop({userName}){
  
  return(
    <Wrapper>
      <ProfileIcon>
        <VscAccount/>
      </ProfileIcon>
      <UserName>{userName}</UserName>         
      <IconContainer>
        <IconArea to="/myauctionlist">
          <FaReceipt/>
        </IconArea>
        <IconTextarea to="/myauctionlist" >경매내역</IconTextarea>
        <IconArea to="/biddingList">
          <FaShoppingBag/>
        </IconArea>
        <IconTextarea2 to="/biddingList">입찰목록</IconTextarea2>
        <IconArea to= "/favoritelist">
          <BsSuitHeartFill/>
        </IconArea>
        <IconTextarea3 to= "/favoritelist">관심목록</IconTextarea3>
      </IconContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 17.5rem;    
  @media only screen and (min-width:768px){
    height: 21rem;        
  }
`

const ProfileIcon =  styled.div`  
  margin: 1.25rem 1rem 0;
  >svg{
    width: 4.5rem;
    height: 4.5rem;
  }
  @media only screen and (min-width:768px){    
    margin: 2rem 1rem 0;
    svg{
      width: 5.5rem;
      height: 5.5rem;
    }
  }
`

const UserName = styled.div`
  margin-top: 2.75rem;
  font-weight: bold;
  font-size: 22px;
  @media only screen and (min-width:768px){
    margin-top: 3.5rem;
    font-size: 30px;
    margin-left: 1.5rem;
  }
`

const IconContainer = styled.div`  
  display: flex;
  width: 100%;
  height: 14rem;
  position: absolute;  
  align-items: center;  
`
const IconArea = styled(Link)`
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
  @media only screen and (min-width:768px){
    margin-left: 6rem;
    margin-top: 12rem;
    width: 78px;
    height: 80px;
    >svg{
      width: 36px;
      height: 36px;    
    }
  }
`

const IconTextarea = styled(Link)`  
  font-size: 13px;  
  margin-left: 4.3rem;
  margin-top: 14rem;
  display: flex;
  position: absolute;
  text-decoration: none;
  color: black;
  cursor: pointer;
  @media only screen and (min-width:768px){
    margin-top: 21rem;
    font-size: 20px;  
    margin-left: 6.25rem;        
  }
`
const IconTextarea2 = styled(Link)`  
  font-size: 13px;  
  margin-left: 11.6rem;
  margin-top: 14rem;
  display: flex;
  position: absolute;
  text-decoration: none;
  color: black;
  cursor: pointer;
  @media only screen and (min-width:768px){
    margin-top: 21rem;
    font-size: 20px;  
    margin-left: 17.25rem;        
  }
`
const IconTextarea3 = styled(Link)`  
  font-size: 13px;  
  margin-left: 19rem;
  margin-top: 14rem;
  display: flex;
  position: absolute;
  text-decoration: none;
  color: black;
  cursor: pointer;
  @media only screen and (min-width:768px){
    margin-top: 21rem;
    font-size: 20px;  
    margin-left: 28.25rem;        
  }
`