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
  

  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);  //image상태
  const [profileNickname, setProfileNickname] = useRecoilState(profileNicknameState);//nickname상태
  const handleImageChange = (image) => {
    setSelectedImage(image); 
  };

  const handleNicknameChange = (nickname) => {
    setProfileNickname(nickname);
  };
  const handleSubmit = () => {    
    console.log("Selected Image:", selectedImage);
    console.log("Profile Nickname:", profileNickname);
  };

  return (
    <Wrapper>
      <UserEditHeader title={"프로필 수정"} clear={"완료"} handleSubmit={handleSubmit}/>     
      <UserEditBody nickname={profileNickname}  onImageChange={handleImageChange} onNicknameChange={handleNicknameChange}/> 
    
    </Wrapper>
  )
};

const Wrapper = styled.div`  
  
`


