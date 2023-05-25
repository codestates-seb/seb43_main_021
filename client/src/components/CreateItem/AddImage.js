import React, { useState } from "react";
import styled from "styled-components";
import { IoIosCamera } from "react-icons/io";
import { SlClose } from "react-icons/sl";
import axios from "axios";

const AddImage = ({ imageSrcList, setImageSrcList }) => {
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const onUpload = async (event) => {
    if (imageSrcList.length >= 10) {
      return;
    }
    const files = event.target.files;
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("multipartFile", file);
  
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/images/upload/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const imageUrl = response.data;
  
        setImageSrcList((prevList) => [...prevList, imageUrl]);
      } catch (error) {
        console.error(error);
      }
    }
    setIsImageUploaded(true);
  };

  const onDeleteImage = (index) => {
    setImageSrcList((prevList) => {
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
            <span
              style={{
                color:
                  isImageUploaded && imageSrcList.length > 0
                    ? "red"
                    : "inherit",
              }}
            >
              {imageSrcList.length}
            </span>
            /10
          </h5>
        </label>
        <input
          type="file"
          id="file"
          onChange={onUpload}
          multiple
          accept="image/*"
          disabled={imageSrcList.length >= 10}
        />
      </div>
      <ImageList className="image-preview">
        {imageSrcList.map((src, index) => (
          <ImageWrapper key={index}>
            <Image src={src} alt={"이미지 미리보기"} />
            <DeleteButton onClick={() => onDeleteImage(index)}>
              <SlClose />
            </DeleteButton>
          </ImageWrapper>
        ))}
      </ImageList>
    </AddImages>
  );
};

export default AddImage;

const AddImages = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 1.5rem 0;
  border-bottom: 1px solid var(--white2-color);

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
    background: var(--white2-color);
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
  object-fit: contain;
  }
`;

const Image = styled.img`
  width: 4.8rem;
  height: 4.7rem;
  margin-left: 1rem;
  border-radius: 5%;
  object-fit: contain;
`

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
  color: var(--red1-color);
  font-weight: bold;
  cursor: pointer;
`;
