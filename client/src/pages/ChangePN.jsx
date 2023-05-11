import React from "react";
import styled from "styled-components"
import ChangePNB from '../components/MyPage/CPN/ChangePNB';
import UserEditHeader from '../components/UI/Header/UserEditHeader';
export default function ChangePN (){
  return(
    <Wrapper>
      <UserEditHeader title={"휴대폰 번호 변경하기"}/>    
      <ChangePNB/> 
    </Wrapper>
  ) 
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`


