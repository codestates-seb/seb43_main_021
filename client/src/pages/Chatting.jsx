import React, { useState } from "react";
import Header from "../components/UI/Header/Header";
import { styled } from "styled-components";
import img2 from "../assets/images/img2.jpg";
import { IoTriangleOutline } from "react-icons/io5";
import ConfirmModal from "../components/UI/Modal/ConfirmModal";
import { useRecoilState } from "recoil";
import { AuctionConfirm } from "../stores/atoms";

const Chatting = () => {
  const [modal, setModal] = useRecoilState(AuctionConfirm);

  return (
    <Wrapper>
      {modal ? <ConfirmModal member={"아차산 라이더"} /> : null}
      <Header chatTitle={"아차산라이더"} />
      <AuctionInfo>
        <AuctionImgText>
          <AuctionImg src={img2} />
          <AuctionInfoText>
            <div>투애니원 앨범</div>
            <div>경매 중(입찰: 3건)</div>
          </AuctionInfoText>
        </AuctionImgText>
        <Buttom onClick={() => setModal(!modal)}>낙찰 하기</Buttom>
      </AuctionInfo>
      <AuctionLine />
      <ChattingBody>
        <ChatContents>
          <UserImg src={img2} />
          <Content>
            안녕하세요~! 물건 관심 있어서 연락 드렸습니다 ㅎㅎㅎ 안녕~~ 물건
            관심 있어서 연락 드렸습니다 ㅎㅎㅎ
          </Content>
          <ContentTime>오전 12:31</ContentTime>
        </ChatContents>
      </ChattingBody>
      <ChattingFooter>
        <ChattingInput placeholder="메시지 보내기" />
        <SubmitButton></SubmitButton>
      </ChattingFooter>
    </Wrapper>
  );
};

export default Chatting;

const Wrapper = styled.div``;

const AuctionInfo = styled.div`
  width: 100%;
  height: 7rem;
  padding: 1rem;
  display: flex;
  font-weight: bold;
  flex-direction: column;
`;

const AuctionLine = styled.div`
  border: 0.5px solid #cccccc;
  width: 100%;
`;

const AuctionImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  margin-right: 0.75rem;
`;

const AuctionInfoText = styled.div``;

const Buttom = styled.button`
  height: 1.75rem;
  width: 5.75rem;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #dcdcdc;
  cursor: pointer;
  margin-top: 0.75rem;
  font-weight: bold;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const AuctionImgText = styled.div`
  display: flex;
`;

const ChattingBody = styled.div``;

const ChatContents = styled.div`
  display: flex;
  align-items: start;
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

const Content = styled.div`
  /* display: inline-block; */
  /* white-space: nowrap; */

  background-color: #f2f3f6;
  /* background-color: skyblue; */
  padding: 0.5rem 0.5rem;
  border-radius: 15px;
`;

const ContentTime = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  color: #9c9c9c;
  white-space: nowrap;
  align-self: flex-end;
`;

const ChattingFooter = styled.div`
  height: 5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  /* background-color: skyblue; */
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  max-width: 1024px;
`;

const ChattingInput = styled.input`
  width: 85%;
  height: 2.5rem;
  border-radius: 20px;
  border: none;
  background-color: #f2f3f6;
  margin-left: 3%;
  padding-left: 1rem;
`;

const SubmitButton = styled(IoTriangleOutline)`
  width: 12%;
  transform: rotate(90deg);
  cursor: pointer;
  font-size: 2rem;
  color: #7e7e7e;
`;
