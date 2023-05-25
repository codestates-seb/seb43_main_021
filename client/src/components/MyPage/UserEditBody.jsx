import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { 
  selectedImageState,
  profileNicknameState,
  memberIdState, } from "../../stores/atoms";
import { Link, useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineCamera } from "react-icons/ai";
import { SlClose } from "react-icons/sl";

import axios from "axios";
import { Button2 } from "../UI/Button/Button2";
import { Button1 } from "../UI/Button/Button1";
export default function UserEditBody({  
  onImageChange,
  onNicknameChange,
}) {
  const navigate = useNavigate();
  const [memberId] = useRecoilState(memberIdState);
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState); //image상태
  const [profileNickname, setProfileNickname] = useRecoilState(profileNicknameState); //nickname상태
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState(""); //nickname errormessage 상태
  const accessToken = localStorage.getItem("accessToken");

  const fileInputRef = useRef(null);
  const nicknameInputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
      onImageChange(reader.result);
    }
  };
  const handleProfileClick = () => {
    fileInputRef.current.click();
  };
  const onChangeNickname = (e) => {
    const value = e.target.value;
    setProfileNickname(value);
    if (
      value.length < 2 ||
      value.length > 20 ||
      !/^[\w\s가-힣]{2,}$/.test(value)
    ) {
      setNicknameErrorMessage(
        "닉네임을 2글자 이상 20글자 미만으로 입력해주세요 "
      );
      nicknameInputRef.current.focus();
      return;
    } else {
      setNicknameErrorMessage("");
    }
    onNicknameChange(value);
  };

  const profileDeleteClick = () => {
    setSelectedImage(!selectedImage);
  };

  const handleSubmit = () => {
    console.log("Selected Image:", selectedImage);
    console.log("Profile Nickname:", profileNickname);
    const requestBody = {
      nickName: profileNickname,
      imageUrlList: selectedImage,
    };

    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/member/profile/${memberId}`,
        requestBody,        
        {
          headers: {
            Authorization: accessToken,
          },
        },        
      )
      .then((res) => {
        setProfileNickname(res.nickName);
        setSelectedImage(res.imageUrlList);
        navigate("/mypage");
      })
      .catch((err) => {
        navigate("/mypage");
        console.log(err);
      });
  };
  return (
    <Wrapper>
      <ProfileContainer>
        <label htmlFor="file">
          <ProfileInput
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <AiOutlineCamera onClick={handleProfileClick} />
        </label>
        {selectedImage ? (
          <div>
            <CloseButton>
              <SlClose onClick={profileDeleteClick} />
            </CloseButton>
            <img src={selectedImage} alt="프로필 이미지" />
          </div>
        ) : (
          <VscAccount />
        )}
      </ProfileContainer>
      <span>
        ☀︎ 위의 카메라 버튼을 클릭하시면 프로필 이미지를 등록하실 수 있습니다👆
      </span>
      <NickNameContainer>닉네임</NickNameContainer>
      <NickNameInput
        ref={nicknameInputRef}
        type="text"
        placeholder="nickname"
        onChange={onChangeNickname}
        value={profileNickname || ''}
      ></NickNameInput>
      {nicknameErrorMessage && (
        <ErrorMessage>{nicknameErrorMessage}</ErrorMessage>
      )}
      <ButtonArea>
        <Cancellation to="/mypage">
          <Button2 name={"취소"} />
        </Cancellation>
        <Permit onClick={handleSubmit}>
          <Button1 name={"확인"} />
        </Permit>
      </ButtonArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  span {
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: red;
  }
  @media only screen and (min-width: 768px) {
    span {
      font-size: 15px;
    }
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0 3rem 0;
  label {
    input {
      display: none;
    }
    > svg {
      color: gray;
      position: absolute;
      width: 2.75rem;
      margin-left: 6rem;
      margin-top: 3rem;
      cursor: pointer;
    }
  }
  svg {
    width: 6.75rem;
    height: 6.75rem;
  }
  img {
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
  }
  @media only screen and (min-width: 768px) {
    margin: 3.5rem 0;
    label {
      input {
      }
      > svg {
        color: gray;
        position: absolute;
        width: 3rem;
        margin-left: 6rem;
        margin-top: 3rem;
      }
    }
    svg {
      width: 9rem;
      height: 9rem;
    }
  }
`;
const ProfileInput = styled.input`
  color: blue;
  position: absolute;
`;
const NickNameContainer = styled.div`
  font-size: 18px;
  margin: 0 0 1rem 1rem;
  font-weight: bold;
`;
const CloseButton = styled.div`
  svg {
    color: gray;
    position: absolute;
    width: 2rem;
    margin-left: 7rem;
    padding-bottom: 7rem;
    cursor: pointer;
  }
`;
const NickNameInput = styled.input`
  margin-left: 1rem;
  margin-right: 1rem;
  width: 97%;
  height: 3.5rem;
  font-size: 22px;
  padding-left: 1rem;
  ::placeholder {
    margin-left: 1rem;
    font-size: 22px;
  }
`;
const ButtonArea = styled.div`
  display: flex;
  margin: 4.25rem 2rem 0 2rem;
  justify-content: center;
`;
const Cancellation = styled(Link)`
  text-decoration: none;
  > div {
    width: 148px;
    height: 46px;
  }
  @media screen and (min-width: 768px) {
    > div {
      width: 180px;
    }
  }
`;
const Permit = styled.div`
  > div {
    width: 148px;
    height: 46px;
    margin-left: 0.5rem;
  }
  @media screen and (min-width: 768px) {
    > div {
      width: 180px;
      margin-left: 2rem;
    }
  }
`;
const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  font-size: 11px;
  padding-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;
