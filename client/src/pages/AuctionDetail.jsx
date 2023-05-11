import React from "react";
import styled from "styled-components";
import { RiHeartLine } from "react-icons/ri";
import { IoArrowBackOutline } from "react-icons/io5";
import ItemImage from "../components/UI/ItemImage/ItemImage";
import { useNavigate } from "react-router-dom";
import useGetAuctionItem from "../hooks/useGetAuctionItem";

const AuctionDetail = () => {
  const { data, isLoading, isError, error, auctionId } = useGetAuctionItem();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>로딩 중 테스트입니다~!~!~!~!</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleBack = () => {
    navigate(`/`);
  };

  const handleToBiddingDetail = (auctionId, id) => {
    navigate(`/biddingdetail/${auctionId}/${id}`);
  };

  return (
    <Wrapper>
      <AuctionImgContainer>
        <ItemImage images={data.img} />
        <BackButton onClick={handleBack} />
      </AuctionImgContainer>
      <UserInfoContainer>
        <UserImg src={data.userImg} />
        <UserText>
          <div>{data.userName}</div>
          <div className="userLocation">{data.userLocation}</div>
        </UserText>
      </UserInfoContainer>
      <UnderLine />
      <AuctionTitle>{data.title} </AuctionTitle>
      <AutcionInfo>{data.auctionTime}</AutcionInfo>
      <AuctionContent>{data.content}</AuctionContent>
      <AuctionSummary>{data.auctionSummary}</AuctionSummary>
      <UnderLine />
      <BiddingList>입찰 목록</BiddingList>
      <BiddingItemGrid>
        {data.biddings.map((i) => (
          <BiddingItem
            key={i.id}
            onClick={() => handleToBiddingDetail(auctionId, i.id)}
          >
            <ItemImg src={i.img[0]} />
            <ItemTitle>{i.itemTitle}</ItemTitle>
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
            <div style={{ color: "gray" }}>{data.auctionEnd}</div>
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

// ===============================================================

// useEffect(() => {
//   const getData = setTimeout(() => {
//     setItem(dummyItem);
//   }, 1000);
//   return () => clearTimeout(getData);
// }, [setItem]);

// const getData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       setItem(dummyItems[id]);
//       resolve(dummyItems[id]);
//     }, 400);
//   });
// };

// const { isLoading, isError, error } = useQuery("getData", getData, {
//   staleTime: 0,
//   cacheTime: 0,
// });

// if (isLoading) {
//   return <div>로딩 중 테스트입니다~!~!~!~!</div>;
// }

// if (isError) {
//   return <div>Error: {error.message}</div>;
// }
