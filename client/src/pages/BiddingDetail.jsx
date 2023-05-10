import React from "react";
import styled from "styled-components";
import { RiHeartLine } from "react-icons/ri";
import { IoArrowBackOutline } from "react-icons/io5";
import ItemImage from "../components/UI/ItemImage/ItemImage";
import { dummyBiddings, dummyAuctions } from "../assets/dummyData";
import { useParams } from "react-router-dom";

const BiddingDetail = () => {
  const { biddingId } = useParams();

  const handleBack = () => {
    window.history.back();
  };

  return (
    <Wrapper>
      <AuctionImgContainer>
        <ItemImage images={dummyBiddings[biddingId].img} />
        <BackButton onClick={handleBack} />
      </AuctionImgContainer>

      <UserInfoContainer>
        <UserImg src={dummyBiddings[biddingId].userImg} />
        <UserText>
          <div>{dummyBiddings[biddingId].userName}</div>
          <div className="userLocation">
            {dummyBiddings[biddingId].userLocation}
          </div>
        </UserText>
      </UserInfoContainer>
      <UnderLine />
      <AuctionTitle>{dummyBiddings[biddingId].itemTitle} </AuctionTitle>
      <AutcionInfo>{dummyBiddings[biddingId].itemTime}</AutcionInfo>
      <AuctionContent>{dummyBiddings[biddingId].itemContent}</AuctionContent>
      <Footer>
        <FooterLine />
        <FooterContainer>
          <Favorite />
          <DivisionLine />
          <AuctionEnd>
            <div>경매 마감일</div>
            <div style={{ color: "gray" }}>{dummyAuctions.auctionEnd}</div>
          </AuctionEnd>
          <BiddingButton>채팅하기</BiddingButton>
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

// const AuctionSummary = styled.div`
//   margin: 0 0 1.5rem 1rem;
//   font-size: 0.75rem;
//   font-weight: bold;
//   color: gray;
// `;

const UnderLine = styled.div`
  border: 0.5px solid #cccccc;
  margin: 0 1rem;
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

export default BiddingDetail;
