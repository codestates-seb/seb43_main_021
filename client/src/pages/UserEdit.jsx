import React from "react";
import styled from "styled-components"
import UserEditHeader from '../components/UI/Header/UserEditHeader';
import UserEditBody from '../components/MyPage/UserEditBody';

export default function UserEdit(){

  return (
    <Wrapper>
      <UserEditHeader title={"프로필 수정"} clear={"완료"}/>     
      <UserEditBody nickname={"판다"}/> 
    
    </Wrapper>
  )
};

const Wrapper = styled.div`  
  
`


