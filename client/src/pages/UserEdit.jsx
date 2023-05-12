import React from "react";
import styled from "styled-components"
import UserEditHeader from '../components/UI/Header/UserEditHeader';
import UserEditBody from '../components/MyPage/UserEditBody';
import ChangePNB from '../components/MyPage/CPN/ChangePNB'
import { 
  changePNState,
  emailChangeState
} from '../stores/atoms';
import {useRecoilState} from 'recoil'
import ChangeEmail from '../components/MyPage/CPN/ChangeEmail';
export default function UserEdit(){
  const [onDisplay,] = useRecoilState(changePNState)
  const [onEmail,] =useRecoilState(emailChangeState)
  return (
    <Wrapper>
      <UserEditHeader title={"내 정보 수정"}/>     
      <UserEditBody/> 
      {onDisplay&&<ChangePNB/>}
      {onEmail&&<ChangeEmail/>}
    </Wrapper>
  )
};

const Wrapper = styled.div`  
  
`


