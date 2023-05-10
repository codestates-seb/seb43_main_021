import React from "react";
import styled from "styled-components"
import UserEditHeader from '../components/UI/Header/UserEditHeader';
import UserEditBody from '../components/MyPage.js/UserEditBody';

export default function UserEdit(){
  return (
    <Wrapper>
      <UserEditHeader title={"내 정보 수정"}/>     
      <UserEditBody/> 
    </Wrapper>
  )
};

const Wrapper = styled.div`  
  border-bottom: 1px solid #f6f6f8;
`


