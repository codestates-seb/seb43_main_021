import React from "react";
import styled from "styled-components";
import { VscAccount } from "react-icons/vsc";
import { CiReceipt } from"react-icons/ci"
import { BiShoppingBag } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom"

export default function UserPageTop({userName}){
  
  return(
    <Wrapper>
      <ProfileIcon>
        <VscAccount/>
      </ProfileIcon>
      <UserName>{userName}</UserName>         
      <IconContainer>
        나의 거래
        <MySelectorContainer>
          <MyIconContainer to="/myauctionlist">
            <CiReceipt/>
            경매내역
          </MyIconContainer>
          <MyIconContainer to="/biddingList">
            <BiShoppingBag/>
            입찰목록
          </MyIconContainer>
          <MyIconContainer to= "/favoritelist">
            <BiHeart/>
            관심목록
          </MyIconContainer>
        </MySelectorContainer>
      </IconContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20.5rem;    
  @media only screen and (min-width:768px){
    height: 28rem;        
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
  padding: 7.5rem 1rem;
  font-size: 15px;
  font-weight: bold;
  svg {
    width: 24px;
    height: 24px;
    margin-right: 1rem;
    cursor: pointer;
  }
  @media only screen and (min-width:768px) {
    font-size: 22px;
    padding-top: 2rem; 
    margin: 7.5rem 0;   
    svg{
      width: 2.5rem;
      height: 2.5rem;      
    }
  }
`
const MySelectorContainer = styled.div`
  margin-left: 0.25rem;
  position: absolute;
  margin-top: 2rem;  
  @media only screen and (min-width:768px){
    margin-top: 4rem;
  }
`
const MyIconContainer = styled(Link)`
  margin-bottom: 1.75rem;
  display: flex;
  align-items: center;   
  color: black;   
  cursor: pointer; 
  text-decoration: none;
  @media only screen and (min-width:768px){
    margin-bottom: 2.5rem;  
  }   
`
