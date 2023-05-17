import React from "react";
import styled from "styled-components";
import { BiInfoCircle } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useRecoilState } from "recoil"
import { 
  modalState,
  LogOutModalState,
} from '../../stores/atoms';
export default function UserInfo(){  
  const [isOpen, setIsOpen] = useRecoilState(modalState);  
  const [logOutClick, setLogOutClick] = useRecoilState(LogOutModalState);        
  
  const openModalHandler = ()=>{
    setIsOpen(!isOpen)    
  }
  const logOutModalHandler=()=>{
    setLogOutClick(!logOutClick)
  }
  return(
    <Wrapper>      
      나의 활동
      <MySeletorContainer>
        <StyledLink to="/useredit">
          <IconContainer>
            <BiInfoCircle />프로필 수정
          </IconContainer>
        </StyledLink>
        <StyledLink to='/changepw'>
          <IconContainer>
            <RiLockPasswordFill/>
            비밀번호 변경
          </IconContainer>
        </StyledLink>
        <IconContainer onClick={logOutModalHandler}>
          <BiLogOut />
          로그아웃
        </IconContainer>
        <IconContainer onClick={openModalHandler}>
          <BsPeople />
          회원탈퇴
        </IconContainer>
      </MySeletorContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 29.25rem;
  padding-left: 1rem;
  margin-top: 1.25rem;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  svg {
    width: 24px;
    height: 24px;
    margin-right: 1rem;
    cursor: pointer;
  }

  @media only screen and (min-width:768px) {
    font-size: 22px;
    padding-top: 1.5rem;    
    svg{
      width: 2.5rem;
      height: 2.5rem;      
    }
  }
`

const MySeletorContainer = styled.div`
  margin-left: 0.25rem;
  position: absolute;
  margin-top: 4rem;  
`

const IconContainer = styled.div`
  margin-bottom: 1.75rem;
  display: flex;
  align-items: center;   
  color: black;   
  cursor: pointer; 
  @media only screen and (min-width:768px){
    margin-bottom: 2.5rem;  
  }   
`

const StyledLink = styled(Link)`
  text-decoration: none;
`;
