import React from "react";
import styled from "styled-components"
import UserEditHeader from '../components/UI/Header/UserEditHeader';
import ChangePassword from '../components/MyPage/ChangePassword';
export default function ChangePw () {
  return (
    <Wrapper>
      <UserEditHeader title={"비밀번호 변경"}/>
      <ChangePassword/>
    </Wrapper>
  )
};


const Wrapper = styled.div`
  width: 100%;
`