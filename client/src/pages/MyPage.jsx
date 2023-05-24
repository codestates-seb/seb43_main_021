import React from "react";
import styled from "styled-components";
import UserPageTop from "../components/MyPage/UserPageTop";
import UserInfo from "../components/MyPage/UserInfo";
import Gnb from "../components/UI/Gnb/Gnb";
import MyPageHeader from "../components/UI/Header/MyPageHeader";
import { 
  modalState,
  LogOutModalState,
  moveModalState,
  loginState,
} from "../stores/atoms";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { Modal } from "../components/UI/Item/Modal";
import { LogOutModal } from "../components/MyPage/LogOutModal";
import { PWCheckModal } from "../components/UI/Item/PWCheckModal";
import useAccessToken from '../hooks/useAccessToken';

export default function MyPage() {
  const navigate = useNavigate();
  const [isOpen] = useRecoilState(modalState);
  const [logOutClick] = useRecoilState(LogOutModalState);
  const [goPage] = useRecoilState(moveModalState);
  const  [keepLoggedIn] = useRecoilState(loginState)
  useAccessToken();// useAccessToken만 쓰면 토큰을 가져올수있다
  console.log(keepLoggedIn)
  console.log(useAccessToken)




  return (    
    <Wrapper>      
      {keepLoggedIn === true ? (
      <>
      {isOpen && <Modal />}
      {logOutClick && <LogOutModal />}
      {goPage && <PWCheckModal />}
      <MyPageHeader title={"마이 페이지"} />
      <UserPageTop />
      <Line />
      <UserInfo />
      <Footer>
        <Gnb />
      </Footer>
    </>
    ) : (
    navigate('/login')    
    )}      
    </Wrapper> 
  )
}


const Wrapper = styled.div`  
max-width: 1024px;
`

const Line = styled.div`
  width: 100%;
  height: 0.5rem;
  background: #f2f3f6;
`;
const Footer = styled.div`
  bottom: 0;
  width: 100%;
  position: fixed;
  z-index: 1;
`;
