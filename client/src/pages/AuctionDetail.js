import React from "react";
import styled from "styled-components";
import img from "../assets/158893.jpg";

const AuctionDetail = () => {
  return (
    <Container>
      <AuctionImg src={img} />
      <UserInfoContainer>
        <UserImg></UserImg>
        <UserText>
          <UserTitle>당근단군</UserTitle>
          <UserLocation>군자동</UserLocation>
        </UserText>
      </UserInfoContainer>
      <UserInfoUnderLine />
      <AuctionTitle>나이키 에어조던1 스캇 팬텀블랙 265 </AuctionTitle>
      <AutcionInfo>남성패션/잡화・50분 전</AutcionInfo>
      <AuctionContent>
        나이키 공홈에서 당첨된 나이키 에어조던1 스캇입니다!
        <br />
        <br /> 사진 찍기 위하여 보자기만 걷어봤고 그 외에는 시착도 안 했습니다.
        <br /> <br />
        건대입구에서 직거래 희망합니다!
      </AuctionContent>
      <AuctionSummary>입찰 3・관심 1・조회 146</AuctionSummary>
      <AuctionUnderLine />
      <BiddingList>입찰 목록</BiddingList>
      <BiddingItemGrid>
        <BiddingItem>
          <ItemImg src={img} />
          <ItemTitle>투애니원 앨범</ItemTitle>
        </BiddingItem>
        <BiddingItem>
          <ItemImg src={img} />
          <ItemTitle>투애니원 앨범</ItemTitle>
        </BiddingItem>
        <BiddingItem>
          <ItemImg src={img} />
          <ItemTitle>투애니원 앨범</ItemTitle>
        </BiddingItem>
      </BiddingItemGrid>
      <Footer>
        <FooterLine />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const AuctionImg = styled.img`
  width: 26rem;
  height: 26rem;
`;
const UserInfoContainer = styled.div`
  height: 5rem;
  display: flex;
`;

const UserImg = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 1rem 0.5rem 1rem 1rem;
  border: 0.5px solid black;
  border-radius: 50%;
`;

const UserText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserTitle = styled.div`
  margin-top: 1.5rem;
  font-weight: bold;
`;

const UserLocation = styled.div`
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-size: 0.75rem;
  color: gray;
`;

const UserInfoUnderLine = styled.div`
  border: 0.5px solid #cccccc;
  margin: 0 1rem;
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
  margin-left: 1rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: gray;
`;

const AuctionUnderLine = styled.div`
  border: 0.5px solid #cccccc;
  margin: 1.5rem 1rem;
`;

const BiddingList = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 1rem;
  margin-bottom: 1.5rem;
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
`;

const ItemImg = styled.img`
  width: 11.5rem;
  height: 8.625rem;
  object-fit: cover;
  border-radius: 5px;
`;

const ItemTitle = styled.div`
  font-weight: bold;
  margin-top: 1rem;
`;

const Footer = styled.div`
  height: 5rem;
`;

const FooterLine = styled.div`
  border: 0.5px solid #cccccc;
`;

export default AuctionDetail;
