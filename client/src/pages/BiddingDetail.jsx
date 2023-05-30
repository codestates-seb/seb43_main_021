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

const BiddingDetail = () => {
  const { data, isLoading, isError, error } = useGetBiddingItem();
  const img = [noImage];
  const [modal, setModal] = useRecoilState(AuctionConfirm);
  const memberId = localStorage.getItem("memberId");

  console.log("bidItemData:", data);

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
          bidItemId={data.bidItemId}
          auction_item_id={data.auctionItemId}
          data={data}
        />
      ) : null}
      <AuctionImgContainer>
        {data.imageUrlList.length > 0 ? (
          <ItemImage images={data.imageUrlList} />
        ) : (
          <ItemImage images={img} />
        )}
        <BackButton onClick={handleBack} />
        <div onClick={() => setModal(!modal)}>
          {Number(memberId) === data.member.memberId ? <ItemDot /> : null}
        </div>
      </AuctionImgContainer>
      <UserInfoContainer>
        {data.member.imageUrlList.length ? (
          <UserImg src={data.member.imageUrlList[0]} />
        ) : (
          <UserImg src={defaultUserImg} />
        )}
        <UserText>
          <div>{data.member.nickName}</div>
          <div className="userLocation">
            {data.location ? data.location : "지역 정보 없음"}
          </div>
        </UserText>
      </UserInfoContainer>
      <div className="line">
        <Line />
      </div>
      <AuctionTitle>{data.bidItemName} </AuctionTitle>
      <AutcionInfo>
        <FormatDateTime dateTime={data.createDate} />
      </AutcionInfo>
      <AuctionContent>{data.bidItemContent}</AuctionContent>
      <Footer bidItemStatus={data.bidItemStatus} />
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
  top: 2.5%;
  left: 2.5%;
  font-size: 2rem;
  z-index: 10;
  color: var(--white2-color);
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
