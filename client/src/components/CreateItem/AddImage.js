import React, { useState } from "react";
import styled from "styled-components";
import { IoIosCamera } from "react-icons/io";
import { SlClose } from "react-icons/sl"

const AddImage = () => {
  const [imageSrcList, setImeageSrcList] = useState([]); // 이미지 등록
  const [isImageUploaded, setIsImageUploaded] = useState(false); // 색상을 바꾸기 위한 상태 추가

  const onUpload = (event) => {
    if (imageSrcList.length >= 10) {
      return;
    }
    const files = event.target.files;
    const newImageSrcList = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newImageSrcList.push(URL.createObjectURL(file));
    }

    setImeageSrcList((prevList) => [...prevList, ...newImageSrcList]);
    setIsImageUploaded(true);
  };

  const onDeleteImage = (index) => {
    setImeageSrcList((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 1);
      return newList;
    });
  };

    return (
        <AddImages>
          <div>
            <label htmlFor="file">
              <IoIosCamera />
              <h5>
                <span style={{color: isImageUploaded && imageSrcList.length> 0 ? 'red' : 'inherit'}}>{imageSrcList.length}</span>/10</h5>
            </label>
            <input type="file" id="file" onChange={onUpload} multiple accept="image/*" disabled={imageSrcList.length >= 10} />
          </div>
          <ImageList className="image-preview">
            {imageSrcList.map((src, index) => (
              <ImageWrapper key={index}>
                <img src={src} alt={"이미지 미리보기"} />
                <DeleteButton onClick={() => onDeleteImage(index)}>
                  <SlClose />
                </DeleteButton>
              </ImageWrapper>
          ))}
          </ImageList>
        </AddImages>
    )
}

export default AddImage;

const AddImages = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 1.5rem 0;
  border-bottom: 1px solid #F3F3F3;

  > div {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 4.8rem;
    height: 4.8rem;
    background: #F2F3F7;
    border-radius: 5%;
    cursor: pointer;

    > svg {
        width: 24px;
        height: 24px;
      }
  }

  input[type="file"] {
      display: none;
  }

  img {
      width: 4.8rem;
      height: 4.7rem;
      margin-left: 1rem;
      border-radius: 5%;
  }
`;

const ImageList = styled.div`
  display: flex;
  overflow-x: auto;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: red;
  font-weight: bold;
  cursor: pointer;
`;