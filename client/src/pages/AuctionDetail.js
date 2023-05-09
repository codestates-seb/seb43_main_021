import React from "react";
import styled from "styled-components";
import { RiHeartLine } from "react-icons/ri";
import ItemImage from "../components/UI/ItemImage/ItemImage";
import { dummyImages, dummyBiddings, dummyAuctions } from "../assets/dummyData";

const AuctionDetail = () => {
  return (
    <Wrapper>
      <AuctionImgContainer>
        <ItemImage images={dummyImages} />
      </AuctionImgContainer>
      <UserInfoContainer>
        <UserImg />
        <UserText>
          <div>{dummyAuctions.userName}</div>
          <div className="userLocation">{dummyAuctions.userLocation}</div>
        </UserText>
      </UserInfoContainer>
      <UserInfoUnderLine />
      <AuctionTitle>{dummyAuctions.auctionTitle} </AuctionTitle>
      <AutcionInfo>{dummyAuctions.auctionTime}</AutcionInfo>
      <AuctionContent>{dummyAuctions.content}</AuctionContent>
      <AuctionSummary>{dummyAuctions.auctionSummary}</AuctionSummary>
      <AuctionUnderLine />
      <BiddingList>입찰 목록</BiddingList>
      <BiddingItemGrid>
        {dummyBiddings.map((item) => (
          <BiddingItem key={item.id}>
            <ItemImg src={item.img} />
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
            <div style={{ color: "gray" }}>{dummyAuctions.auctionEnd}</div>
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
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  .userLocation {
    font-size: 0.75rem;
    color: gray;
  }
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

// const AuctionImg = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const ArrowRight = styled.div`
//   position: absolute;
//   top: 45%;
//   right: 3%;
//   font-size: 3rem;
//   color: white;
//   cursor: pointer;
// `;

// const ArrowBack = styled.div`
//   position: absolute;
//   top: 45%;
//   left: 3%;
//   font-size: 3rem;
//   color: white;
//   cursor: pointer;
// `;
// const DotContainer = styled.div`
//   position: absolute; /* 추가: 절대 위치 설정 */
//   top: 0%; /* 추가: 원하는 위치로 조정 */
//   left: 0%; /* 추가: 원하는 위치로 조정 */
//   display: flex;
// `;

// const [currentImage, setCurrentImage] = useState(0);
// const images = [imgNike, img, img1];

// const nextImage = () => {
//   const nextIndex = (currentImage + 1) % images.length;
//   setCurrentImage(nextIndex);
// };

// const backImage = () => {
//   const backIndex = (currentImage + images.length - 1) % images.length;
//   setCurrentImage(backIndex);
// };

// <AuctionImg src={images[currentImage]} />
//       <ArrowRight onClick={nextImage}>
//         <IoIosArrowForward />
//       </ArrowRight>
//       <ArrowBack onClick={backImage}>
//         <IoIosArrowBack />
//       </ArrowBack>
//       <DotContainer>
//         {images.map((_, index) => (
//           <Dot key={index} index={index} active={index === currentImage} />
//         ))}
//       </DotContainer>

// const Dot = styled.div`
//   position: absolute;
//   bottom: 5%;
//   left: ${(props) => props.index * 5}%;
//   background-color: ${(props) => (props.active ? "white" : "#818181")};
//   width: 3%;
//   height: 3%;
//   border-radius: 50%;
//   opacity: 70%;
// `;
