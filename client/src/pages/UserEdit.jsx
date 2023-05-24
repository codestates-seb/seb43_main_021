import React from "react";
import styled from "styled-components"
import { useRecoilState } from 'recoil';
import {
  selectedImageState,
  profileNicknameState,
}from "../stores/atoms"
import UserEditHeader from '../components/UI/Header/UserEditHeader';
import UserEditBody from '../components/MyPage/UserEditBody';

export default function UserEdit(){
  

  const [, setSelectedImage] = useRecoilState(selectedImageState);  //image상태
  const [profileNickname, setProfileNickname] = useRecoilState(profileNicknameState);//nickname상태
  const handleImageChange = (image) => {
    setSelectedImage(image); 
  };

  const handleNicknameChange = (nickname) => {
    setProfileNickname(nickname);
  };
  

  return (
    <Wrapper>
      <UserEditHeader title={"프로필 수정"} />     
      <UserEditBody nickname={profileNickname}  onImageChange={handleImageChange} onNicknameChange={handleNicknameChange}/>     
    </Wrapper>
  )
};

const Wrapper = styled.div`  
  
`


