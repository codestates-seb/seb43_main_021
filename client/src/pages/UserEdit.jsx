import React from "react";
import styled from "styled-components"
import UserEditHeader from '../components/UI/Header/UserEditHeader';

export default function UserEdit(){
  return (
    <Wrapper>
      <UserEditHeader title={"내 정보 수정"}/>
      <Line/>
    </Wrapper>
  )
};

const Wrapper = styled.div`  
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #f2f3f6;
`


