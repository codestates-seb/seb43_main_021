import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import defaultUserImg from "../../assets/images/defaultUserImg.jpg";
import Line from "../UI/Line/Line";

const dummyData = [
  {
    id: "1",
    name: "아차산라이더",
    location: "군자동",
    time: "3시간 전",
    content: "안녕하세요 ㅎㅎㅎ",
    img: defaultUserImg,
  },
  {
    id: "2",
    name: "김하민",
    location: "성수동",
    time: "1시간 전",
    content: "저는 5시 쯤 가능할 것 같습니다~~",
    img: defaultUserImg,
  },
];

const ChatItem = () => {
  const navigate = useNavigate();

  const handleChatting = () => {
    navigate("/chatting");
  };
  return (
    <>
      {dummyData.map((item) => (
        <div key={item.id}>
          <Container onClick={handleChatting}>
            <LeftItem>
              <UserImg src={item.img} />
              <ChatDetail>
                <UserTitle>{item.name}</UserTitle>
                <UserInfo>
                  {item.location} {item.time}
                </UserInfo>
                <ChatThumbnail>{item.content}</ChatThumbnail>
              </ChatDetail>
            </LeftItem>
            <RightItem>
              <ItemImg />
            </RightItem>
          </Container>
          <Line />
        </div>
      ))}
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftItem = styled.div`
  display: flex;
`;

const RightItem = styled.div``;
const UserImg = styled.img`
  margin: 1rem;
  width: 3rem;
  height: 3rem;
  border: none;
  object-fit: cover;
  border-radius: 50%;
`;

const ChatDetail = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

const UserTitle = styled.span`
  font-weight: bold;
  margin-right: 0.25rem;
`;
const UserInfo = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: var(--gray1-color);
`;
const ChatThumbnail = styled.div`
  display: flex;
  align-items: center;
  height: 60%;
`;

const ItemImg = styled.div`
  margin: 1.25rem 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border: 0.5px solid black;
`;

export default ChatItem;
