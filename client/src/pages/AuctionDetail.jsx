import React from "react";
import styled from "styled-components";
import { RiHeartLine } from "react-icons/ri";
import { IoArrowBackOutline } from "react-icons/io5";
import ItemImage from "../components/UI/ItemImage/ItemImage";
import { dummyBiddings, dummyItem } from "../assets/dummyData";
import { useNavigate, useParams } from "react-router-dom";

const AuctionDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    window.history.back();
  };

  const handleToBiddingDetail = (id) => {
    navigate(`/biddingdetail/${id}`);
  };

  // {
  //   id: 1,
  //   title: "나이키 에어조던1 스캇 팬텀블랙 265",
  //   period: "2023.05.01 ~ 2023.05.15",
  //   bidding: 5,
  //   auctionState: true,
  //   heart: 5,
  //   img: [img1, img2, img3],  //   userName: "당근단군",
  //   userLocation: "군자동",
  //   userImg: img2,
  //   auctionTitle: "나이키 에어조던1 스캇 팬텀블랙 265",
  //   auctionTime: "50분 전",
  //   content:
  //     "나이키 공홈에서 당첨된 나이키 에어조던1 스캇입니다!\n사진 찍기 위하여 보자기만 걷어봤고 그 외에는 시착도 안 했습니다.\n건대입구에서 직거래 희망합니다!",
  //   auctionSummary: "입찰 3 ・ 관심 1 ・ 조회 146",
  //   auctionEnd: "2023년 5월 15일 오후 5시 26분",
  // },

  return (
    <Wrapper>
      <AuctionImgContainer>
        <ItemImage images={dummyItem[id].img} />
        <BackButton onClick={handleBack} />
      </AuctionImgContainer>

      <UserInfoContainer>
        <UserImg src={dummyItem[id].userImg} />
        <UserText>
          <div>{dummyItem[id].userName}</div>
          <div className="userLocation">{dummyItem[id].userLocation}</div>
        </UserText>
      </UserInfoContainer>
      <UnderLine />
      <AuctionTitle>{dummyItem[id].auctionTitle} </AuctionTitle>
      <AutcionInfo>{dummyItem[id].auctionTime}</AutcionInfo>
      <AuctionContent>{dummyItem[id].content}</AuctionContent>
      <AuctionSummary>{dummyItem[id].auctionSummary}</AuctionSummary>
      <UnderLine />
      <BiddingList>입찰 목록</BiddingList>
      <BiddingItemGrid>
        {dummyBiddings.map((item) => (
          <BiddingItem
            key={item.id}
            onClick={() => handleToBiddingDetail(item.id)}
          >
            <ItemImg src={item.img[0]} />
            <ItemTitle>{item.itemTitle}</ItemTitle>
          </BiddingItem>
        ))}
      </BiddingItemGrid>
      <Footer>
        <FooterLine />
        <FooterContainer>
          <Favorite />
          <DivisionLine />
          <AuctionEnd>
            <div>경매 마감일</div>
            <div style={{ color: "gray" }}>{dummyItem[id].auctionEnd}</div>
          </AuctionEnd>
          <BiddingButton>입찰하기</BiddingButton>
        </FooterContainer>
      </Footer>
    </Wrapper>
  );
};

// ============================================================================

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
`;

const AuctionImgContainer = styled.div`
  width: 100%;
  position: relative;
  padding-top: 100%;
`;

const BackButton = styled(IoArrowBackOutline)`
  position: absolute;
  top: 2.5%;
  left: 2.5%;
  font-size: 2rem;
  z-index: 10;
  color: #f0f0f0;
  cursor: pointer;
`;

const UserInfoContainer = styled.div`
  height: 5rem;
  display: flex;
`;

const UserImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 1rem 0.5rem 1rem 1rem;
  border: none;
  border-radius: 50%;
  object-fit: cover;
`;

const UserText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  .userLocation {
    font-size: 0.75rem;
    color: gray;
  }
`;

const AuctionTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1.5rem 0 1rem 1rem;
`;

const AutcionInfo = styled.div`
  margin-left: 1rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: gray;
`;

const AuctionContent = styled.div`
  margin: 1.5rem 1rem;
`;

const AuctionSummary = styled.div`
  margin: 0 0 1.5rem 1rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: gray;
`;

const UnderLine = styled.div`
  border: 0.5px solid #cccccc;
  margin: 0 1rem;
`;

const BiddingList = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1.5rem 1rem;
`;

const BiddingItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 0 1rem 1rem 1rem;
`;

const BiddingItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -15%;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
  border-radius: 5px;
`;

const ItemTitle = styled.div`
  font-weight: bold;
  margin-top: 1rem;
`;

const Footer = styled.div`
  height: 5rem;
  width: 100%;
  bottom: 0;
  position: fixed;
  background-color: white;
`;

const FooterLine = styled.div`
  border: 0.5px solid #cccccc;
`;

const FooterContainer = styled.div`
  display: flex;
`;

const Favorite = styled(RiHeartLine)`
  font-size: 1.5rem;
  color: gray;
  margin-left: 1rem;
  margin-top: 1.5rem;
  cursor: pointer;
`;

const DivisionLine = styled.div`
  border: 0.5px solid #cccccc;
  width: 0;
  height: 2.5rem;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const AuctionEnd = styled.div`
  margin-top: 1.1rem;
  margin-left: 1rem;
  font-weight: bold;
`;

const BiddingButton = styled.button`
  background-color: #4636fc;
  color: white;
  border: none;
  width: 5.5rem;
  height: 2.5rem;
  font-weight: bold;
  border-radius: 5px;
  margin: 1rem 1rem 1rem auto;
  cursor: pointer;

  &:hover {
    background-color: #5170fd;
  }
`;

export default AuctionDetail;
