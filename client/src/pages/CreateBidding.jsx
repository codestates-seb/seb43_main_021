import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosCamera } from "react-icons/io";
import { SlClose } from "react-icons/sl";
import { BsChevronLeft } from "react-icons/bs";
import BiddingLocation from "../components/ItemDetail/BiddingLocation";
import axios from "axios";
import { useRecoilState } from "recoil";
import { reviseItem } from "../stores/atoms";

const CreateBidding = () => {
  const navigate = useNavigate();
  const { auctionItemId } = useParams();
  const [imageSrcList, setImageSrcList] = useState([]); // 이미지 등록
  const [isImageUploaded, setIsImageUploaded] = useState(false); // 색상을 바꾸기 위한 상태 추가

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [selectLocation, setSelectLocation] = useState("지역 설정");
  const [showTitleWarning, setShowTitleWarning] = useState(false);
  const [showTextWarning, setShowTextWarning] = useState(false);
  const [showLocationWarning, setShowLocationWarning] = useState(false);
  const memberId = localStorage.getItem("memberId");
  const accessToken = localStorage.getItem("accessToken");
  const [reItem, setReItem] = useRecoilState(reviseItem);

  useEffect(() => {
    if (!memberId) {
      alert("로그인 후 입찰할 수 있습니다.");
      navigate("/login");
    } else if (reItem.length !== 0) {
      setTitle(reItem.bidItemName);
      setText(reItem.bidItemContent);
      setSelectLocation(reItem.location);
    }
    return () => {
      setReItem([]);
    };
  }, [memberId]);

  console.log("비딩 만들기", reItem);

  const handleBack = () => {
    window.history.back();
  };

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
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/images/upload/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
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

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setShowTitleWarning(false);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
    setShowTextWarning(false);
  };

  const titleList = [
    "지역 설정",
    "강동구",
    "노원구",
    "중랑구",
    "광진구",
    "마포구",
  ];

  const LocationChange = (location) => {
    setSelectLocation(location);
    if (location !== "지역 설정") {
      setShowLocationWarning(false);
    }
  };

  const handleCreateBtnClick = async () => {
    if (title === "") {
      setShowTitleWarning(true);
    }

    if (text === "") {
      setShowTextWarning(true);
    }

    if (title !== "" && text !== "" && selectLocation !== "지역 설정") {
      try {
        const data = {
          bidItemName: title,
          bidItemContent: text,
          imageUrlList: imageSrcList,
          location: selectLocation,
        };

        axios
          .post(
            `${process.env.REACT_APP_API_URL}/bid_items/${auctionItemId}`,
            data,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((res) => {
            navigate(`/AuctionDetail/${auctionItemId}`);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleReviseBtnClick = async () => {
    if (title === "") {
      setShowTitleWarning(true);
    }

    if (text === "") {
      setShowTextWarning(true);
    }

    if (title !== "" && text !== "" && selectLocation !== "지역 설정") {
      try {
        const data = {
          bidItemName: title,
          bidItemContent: text,
          imageUrlList: imageSrcList,
          location: selectLocation,
        };

        axios
          .patch(
            `${process.env.REACT_APP_API_URL}/bid_items/${reItem.auctionItem.auctionItemId}/${reItem.bidItemId}`,
            data,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((res) => {
            navigate(`/AuctionDetail/${reItem.auctionItem.auctionItemId}`);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Wrapper>
      <Header>
        <BackButton onClick={handleBack} />
        <HeaderTitle>
          <h2>입찰 등록하기</h2>
        </HeaderTitle>
      </Header>
      <Container>
        <Body>
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
                  <img src={src} alt={"이미지 미리보기"} />
                  <DeleteButton onClick={() => onDeleteImage(index)}>
                    <SlClose />
                  </DeleteButton>
                </ImageWrapper>
              ))}
            </ImageList>
          </AddImages>
          <Title>
            <input
              placeholder="제목"
              value={title}
              onChange={handleTitleChange}
            />
            {showTitleWarning && <Warning>제목을 입력해주세요.</Warning>}
          </Title>
          <TextArea>
            <textarea
              placeholder="입찰 등록하실 물품의 내용을 입력해주세요."
              value={text}
              onChange={handleTextChange}
            />
            {showTextWarning && <Warning>게시글 내용을 입력해주세요.</Warning>}
          </TextArea>
          <BiddingLocation
            titleList={titleList}
            showLocationWarning={showLocationWarning}
            selectLocation={selectLocation}
            setSelectLocation={LocationChange}
            setShowLocationWarning={setShowLocationWarning}
          />
        </Body>
      </Container>
      <CreateBtn>
        {reItem.length === 0 ? (
          <button onClick={handleCreateBtnClick}>등록하기</button>
        ) : (
          <button onClick={handleReviseBtnClick}>수정하기</button>
        )}
      </CreateBtn>
    </Wrapper>
  );
};

export default CreateBidding;

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  padding: 2rem 1.5rem;
  height: 5.6rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  margin: 0 auto;
  position: relative;
  border-color: var(--white3-color);
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

const BackButton = styled(BsChevronLeft)`
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  padding-left: 1.5rem;
  h2 {
    font-size: 15px;
    font-weight: bold;
  }
`;

const CreateBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  button {
    background-color: var(--purple1-color);
    color: var(--white1-color);
    border: none;
    width: 20rem;
    height: 2.8rem;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Container = styled.div``;

const Body = styled.div`
  padding: 1rem;
`;

const AddImages = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 1.5rem 0;
  border-bottom: 1px solid var(--white2-color) > div {
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
  color: var(--red1-color);
  font-weight: bold;
  cursor: pointer;
`;

const Title = styled.div`
  padding: 2rem 0rem;
  border-bottom: 1px solid var(--white2-color);
  outline: none;

  input {
    border: none;
    outline: none;
    font-size: 25px;
    width: 100%;
  }

  input::placeholder {
    color: var(--white4-color);
  }
`;

const TextArea = styled.div`
  padding: 2.2rem 0 1.5rem 0;
  border-bottom: 1px solid var(--white2-color);

  textarea {
    width: 100%;
    height: 12rem;
    box-sizing: border-box;
    border: 2px solid var(--black1-color);
    border-radius: 5px;
    font-size: 16px;
    resize: none;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
  }

  textarea::placeholder {
    color: var(--white4-color);
  }
`;

const Warning = styled.div`
  color: var(--red1-color);
  font-size: 13px;
  text-align: center;
  margin-top: 0.5rem;
`;
