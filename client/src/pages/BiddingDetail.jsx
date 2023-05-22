import React from "react";
import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";
import ItemImage from "../components/UI/ItemImage/ItemImage";
import useGetBiddingItem from "../hooks/useGetBiddingItem";
import Footer from "../components/UI/Footer/Footer";
import Loading from "../components/UI/Loading/Loading";

const BiddingDetail = () => {
  const { data, isLoading, isError, error } = useGetBiddingItem();

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleBack = () => {
    window.history.back();
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
      <AuctionTitle>{data.itemTitle} </AuctionTitle>
      <AutcionInfo>{data.itemTime}</AutcionInfo>
      <AuctionContent>{data.itemContent}</AuctionContent>
      <Footer />
    </Wrapper>
  );
};

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

const UnderLine = styled.div`
  border: 0.5px solid #cccccc;
  margin: 0 1rem;
  //
`;

export default BiddingDetail;
