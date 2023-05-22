import React, { useState } from "react";
import Header from "../components/UI/Header/Header";
import { styled } from "styled-components";
import img2 from "../assets/images/img2.jpg";
import img1 from "../assets/images/img1.jpeg";

import { IoTriangleOutline } from "react-icons/io5";
import ConfirmModal from "../components/UI/Modal/ConfirmModal";
import { useRecoilState } from "recoil";
import { AuctionConfirm } from "../stores/atoms";
import { chatContent1 } from "../assets/dummyChatData";
import { HiOutlinePlusSm } from "react-icons/hi";
import { SlClose } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Chatting = () => {
  const [modal, setModal] = useRecoilState(AuctionConfirm);
  const [imageSrcList, setImeageSrcList] = useState([]); // 이미지 등록
  const [isImageUploaded, setIsImageUploaded] = useState(false); // 색상을 바꾸기 위한 상태 추가
  const [chatting, setChatting] = useState("");
  const [choice, setChoice] = useState(false); // 경매 낙찰 여부
  const navigate = useNavigate();

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

  const submitChatting = () => {
    console.log(chatting, imageSrcList);
    setChatting("");
    setImeageSrcList([]);
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      submitChatting();
    }
  };

  const auctionComplete = () => {
    setChoice(true);
  };

  return (
    <Wrapper>
      {modal ? (
        <ConfirmModal
          member={"아차산 라이더"}
          auctionComplete={auctionComplete}
        />
      ) : null}
      <Header chatTitle={"아차산라이더"} />
      <AuctionAndBid>
        <AuctionInfo>
          <AuctionImgText>
            <AuctionImg
              src={img2}
              onClick={() => navigate("/AuctionDetail/0")}
            />
            <AuctionInfoText>
              <div>투애니원 앨범입니다~~~~~~</div>
              {choice ? (
                <div>낙찰 완료!</div>
              ) : (
                <div>
                  경매 중<span>(입찰: 3건)</span>
                </div>
              )}
              {choice ? null : (
                <Buttom onClick={() => setModal(!modal)}>낙찰 하기</Buttom>
              )}
            </AuctionInfoText>
          </AuctionImgText>
        </AuctionInfo>
        <BidInfo>
          <AuctionImgText>
            <AuctionImg
              src={img1}
              onClick={() => navigate("/AuctionDetail/0")}
            />
            <AuctionInfoText>
              <div>조던 1 스캇 팬텀 블랙 265 거의 새 상품</div>
              {choice ? <div>입찰 종료</div> : <div>입찰 중</div>}
            </AuctionInfoText>
          </AuctionImgText>
        </BidInfo>
      </AuctionAndBid>
      <AuctionLine />
      <ChattingBody imageSrcList={imageSrcList}>
        {chatContent1.map((chat, index) =>
          //로컬스토리지의 유저 정보와 같을 경우로 수정예정
          chat.member_id === 1 ? (
            <UserChatContents key={index}>
              <UserContentTime>{chat.createdate}</UserContentTime>
              <UserContent>{chat.content}</UserContent>
            </UserChatContents>
          ) : chat.member_id === "admin" ? (
            <AdminContent>
              🎉 낙찰 되었습니다! 상대방과 거래 약속을 잡아보세요. 🎉
            </AdminContent>
          ) : (
            <ChatContents key={index}>
              <UserImg src={chat.img} />
              <Content>{chat.content}</Content>
              <ContentTime>{chat.createdate}</ContentTime>
            </ChatContents>
          )
        )}
      </ChattingBody>
      <ChattingFooter>
        <div>
          <label htmlFor="file">
            <SendImg />
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
        <ChattingInput
          placeholder="메시지 보내기"
          value={chatting}
          onChange={(e) => setChatting(e.target.value)}
          onKeyDown={handleEnterPress}
        />
        <SubmitButton onClick={submitChatting}></SubmitButton>
      </ChattingFooter>
      {imageSrcList[0] ? (
        <ImageContainer>
          {imageSrcList.map((image, index) => (
            <ImageWrapper key={index}>
              <Img src={image} alt={"이미지 미리보기"} />
              <DeleteButton onClick={() => onDeleteImage(index)}>
                <SlClose />
              </DeleteButton>
            </ImageWrapper>
          ))}
        </ImageContainer>
      ) : null}
    </Wrapper>
  );
};

export default Chatting;

const Wrapper = styled.div``;

const AuctionAndBid = styled.div`
  display: flex;
`;

const AuctionInfo = styled.div`
  width: 50%;
  height: 5rem;
  padding: 0.5rem;
`;

const BidInfo = styled.div`
  width: 50%;
  height: 5rem;
  padding: 0.5rem;
  border-left: 0.5px solid gray;
`;

const AuctionLine = styled.div`
  border: 0.5px solid #cccccc;
  width: 100%;
`;

const AuctionImg = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const AuctionInfoText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow-x: scroll;

  span {
    color: red;
    font-size: 0.65rem;
  }
`;

const Buttom = styled.button`
  height: 1.5rem;
  width: 5.5rem;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #dcdcdc;
  cursor: pointer;
  font-weight: bold;
  margin-top: 0.1rem;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const AuctionImgText = styled.div`
  display: flex;
`;

const ChattingBody = styled.div`
  margin-bottom: ${({ imageSrcList }) =>
    imageSrcList.length ? "11rem" : "5rem"};
`;

const ChatContents = styled.div`
  display: flex;
  /* align-items: start; */
  margin: 1rem;
  gap: 0.5rem;
  max-width: 1024px;
`;

const UserChatContents = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
  gap: 0.5rem;
  max-width: 1024px;
`;

const UserImg = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  border-radius: 50%;
`;

const AdminContent = styled.div`
  background-color: #7c43f8;
  padding: 1rem 0.5rem;
  color: white;
  border-radius: 26px;
  text-align: center;
  width: 25rem;
  margin: 2rem auto;
  font-weight: 300;
  font-size: 17px;
`;

const Content = styled.div`
  background-color: #f2f3f6;
  padding: 0.5rem;
  border-radius: 10px;
`;

const ContentTime = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  color: #9c9c9c;
  white-space: nowrap;
  align-self: flex-end;
`;

const UserContent = styled.div`
  background-color: #4b3bfa;
  color: white;
  padding: 0.5rem;
  border-radius: 10px;
`;

const UserContentTime = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  color: #9c9c9c;
  white-space: nowrap;
  align-self: flex-end;
`;

const ChattingFooter = styled.div`
  height: 4rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  max-width: 1024px;

  input[type="file"] {
    display: none;
  }
`;
const SendImg = styled(HiOutlinePlusSm)`
  width: 4rem;
  font-size: 2rem;
  color: #595959;
  cursor: pointer;

  &:hover {
    color: #868686;
  }
`;

const ChattingInput = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 20px;
  border: none;
  background-color: #f2f3f6;
  padding-left: 1rem;
`;

const SubmitButton = styled(IoTriangleOutline)`
  width: 5rem;
  transform: rotate(90deg);
  cursor: pointer;
  font-size: 2rem;
  color: #7e7e7e;

  &:hover {
    color: #a6a6a6;
  }
`;

const ImageContainer = styled.div`
  padding: 0.5rem 0;
  height: 5.8rem;
  width: 100%;
  position: fixed;
  bottom: 4rem;
  background-color: white;
  display: flex;
  overflow-x: auto;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const DeleteButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 1.25rem;
  color: black;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #626262;
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  margin-left: 1rem;
  border-radius: 5%;
  object-fit: cover;
`;
