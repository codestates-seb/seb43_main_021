import React from "react";
import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";
import ItemImage from "../components/UI/ItemImage/ItemImage";
import useGetBiddingItem from "../hooks/useGetBiddingItem";
import Footer from "../components/UI/Footer/Footer";
import Loading from "../components/UI/Loading/Loading";
import noImage from "../assets/images/noimage.png";
import FormatDateTime from "../utils/FormatDateTime";
import defaultUserImg from "../assets/images/defaultUserImg.jpg";
import Line from "../components/UI/Line/Line";
import { useRecoilState } from "recoil";
import { AuctionConfirm } from "../stores/atoms";
import ItemEditModal from "../components/UI/Modal/ItemEditModal";
import ItemDot from "../components/ItemDetail/ItemDot";
import { HiOutlineHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const BiddingDetail = () => {
  const { bidData, isLoading, isError, error } = useGetBiddingItem();
  const img = [noImage];
  const [modal, setModal] = useRecoilState(AuctionConfirm);
  const memberId = localStorage.getItem("memberId");
  const navigate = useNavigate();

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
      {modal ? (
        <ItemEditModal
          bidItemId={bidData.bidItemId}
          auction_item_id={bidData.auctionItemId}
          data={bidData}
        />
      ) : null}
      <AuctionImgContainer>
        {bidData.imageUrlList.length > 0 ? (
          <ItemImage images={bidData.imageUrlList} />
        ) : (
          <ItemImage images={img} />
        )}
        <BackButton onClick={handleBack} />
        <HomeButtom onClick={() => navigate("/main")} />
        <div onClick={() => setModal(!modal)}>
          {Number(memberId) === bidData.member.memberId ? <ItemDot /> : null}
        </div>
      </AuctionImgContainer>
      <UserInfoContainer>
        {bidData.member.imageUrlList.length ? (
          <UserImg src={bidData.member.imageUrlList[0]} />
        ) : (
          <UserImg src={defaultUserImg} />
        )}
        <UserText>
          <div>{bidData.member.nickName}</div>
          <div className="userLocation">
            {bidData.location ? bidData.location : "지역 정보 없음"}
          </div>
        </UserText>
      </UserInfoContainer>
      <div className="line">
        <Line />
      </div>
      <AuctionTitle>{bidData.bidItemName} </AuctionTitle>
      <AutcionInfo>
        <FormatDateTime dateTime={bidData.createDate} />
      </AutcionInfo>
      <AuctionContent>{bidData.bidItemContent}</AuctionContent>
      <Footer bidItemStatus={bidData.bidItemStatus} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;

  .line {
    margin: 0 1rem;
  }
`;

const AuctionImgContainer = styled.div`
  width: 100%;
  position: relative;
  padding-top: 100%;
`;

const BackButton = styled(IoArrowBackOutline)`
  position: absolute;
  /* top: 2.5%;
  left: 2.5%; */
  top: 0.7rem;
  left: 0.7rem;

  font-size: 2rem;
  z-index: 10;
  color: var(--white3-color);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
    top: 1.2rem;
    left: 1rem;
  }
`;

const HomeButtom = styled(HiOutlineHome)`
  position: absolute;
  top: 0.65rem;
  left: 2.8rem;
  font-size: 2rem;
  z-index: 10;
  color: var(--white3-color);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
    top: 1.4rem;
    left: 4.4rem;
  }
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
    color: var(--gray1-color);
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
  color: var(--gray1-color);
`;

const AuctionContent = styled.div`
  margin: 1.5rem 1rem;
`;

const UnderLine = styled.div`
  border: 0.5px solid var(--white5-color);
  margin: 0 1rem;
  //
`;

export default BiddingDetail;
