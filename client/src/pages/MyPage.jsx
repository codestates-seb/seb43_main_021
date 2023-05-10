import React from "react";
import styled from 'styled-components';
import UserPageTop from '../components/MyPage.js/UserPageTop';
import UserInfo from '../components/MyPage.js/UserInfo';
import Gnb from '../components/UI/Gnb/Gnb';
import MyPageHeader from '../components/UI/Header/MyPageHeader'
import { modalState } from '../stores/atoms';
import { useRecoilState } from "recoil"
import { Modal } from '../components/UI/Item/Modal';

export default function MyPage() {
  const [isOpen,] = useRecoilState(modalState)

  return (
    <Wrapper>      
      {isOpen&&<Modal title={"회원탈퇴"} content={"회원탈퇴 하시겠습니까?"}/>}
      <MyPageHeader title={"나의 당근"} />      
      <UserPageTop userName={"손고장난벽시"}/> 
      <Line/>
      <UserInfo/>
      <Footer>
        <Gnb/>
      </Footer>      
    </Wrapper>
  )
};

const Wrapper = styled.div`  
`
const Line = styled.div`
  width: 100%;
  height: 0.5rem;
  background: #f2f3f6;
`
const Footer = styled.div`
  bottom: 0;
  width: 100%;
  position: fixed;
  z-index: 1;
`

