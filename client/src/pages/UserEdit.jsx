import React from "react";
import styled from "styled-components"
import { useRecoilState } from 'recoil';
import {
  selectedImageState,
  profileNicknameState,
}from "../stores/atoms"
import UserEditHeader from '../components/UI/Header/UserEditHeader';
import UserEditBody from '../components/MyPage/UserEditBody';
import axios from 'axios';
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
    const requestBody = {
      nickName: profileNickname,
    };

    axios
      .patch(
        `http://ec2-3-34-179-243.ap-northeast-2.compute.amazonaws.com:8080/member/profile/2`,        
        requestBody
      )
      .then((res) => {
        setProfileNickname(res.nickName);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <UserEditHeader title={"프로필 수정"} handleSubmit={handleSubmit} submit={"완료"}/>     
      <UserEditBody nickname={profileNickname}  onImageChange={handleImageChange} onNicknameChange={handleNicknameChange}/> 
    
    </Wrapper>
  )
};

const Wrapper = styled.div`  
  
`


