import React from "react";
import styled from 'styled-components';
import UserEditHeader from '../components/UI/Header/UserEditHeader';
import BiddingItem from '../components/MyPage/BiddingItem';
export default function BiddingList(){
  return (
    <Wrapper>
      <UserEditHeader title={"입찰목록"}/>
      <BiddingItem/>
    </Wrapper>
  )
}
const Wrapper = styled.div``
