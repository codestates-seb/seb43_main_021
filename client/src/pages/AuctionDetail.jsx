import React, { useState } from "react";
import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";
import ItemImage from "../components/UI/ItemImage/ItemImage";
import { useNavigate } from "react-router-dom";
import useGetAuctionItem from "../hooks/useGetAuctionItem";
import Footer from "../components/UI/Footer/Footer";
import Loading from "../components/UI/Loading/Loading";
import img2 from "../assets/images/img2.jpg";
import FormatDateTime from "../utils/FormatDateTime";
import ItemDot from "../components/ItemDetail/ItemDot";
import defaultUserImg from "../assets/images/defaultUserImg.jpg";
import ItemEditModal from "../components/UI/Modal/ItemEditModal";
import { useRecoilState } from "recoil";
import { AuctionConfirm } from "../stores/atoms";

const AuctionDetail = () => {
  const { data, isLoading, isError, error, auctionItemId } =
    useGetAuctionItem();
  const [modal, setModal] = useRecoilState(AuctionConfirm);
  const navigate = useNavigate();
  const img = [img2];

  console.log("옥션디테일 데이터", data);
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

  const handleToBiddingDetail = (auctionId, id) => {
    navigate(`/biddingdetail/${auctionId}/${id}`);
  };
  // <Img src={item.imageUrlList[0]} />

  return (
    <Wrapper>
      {modal ? <ItemEditModal auction_item_id={data.auction_item_id} /> : null}
      <AuctionImgContainer>
        {data.imageUrlList.length > 0 ? (
          <ItemImage images={data.imageUrlList} />
        ) : (
          <ItemImage images={img} />
        )}
        <BackButton onClick={handleBack} />
        <div onClick={() => setModal(!modal)}>
          <ItemDot />
        </div>
      </AuctionImgContainer>

      <UserInfoContainer>
        {data.members[0].imageUrlList.length ? (
          <UserImg src={data.members[0].imageUrlList} />
        ) : (
          <UserImg src={defaultUserImg} />
        )}
        <UserText>
          {data.members[0].nickName ? (
            <div>{data.members[0].nickName}</div>
          ) : (
            "유저 이름이 없음"
          )}
          {data.location ? (
            <div className="userLocation">{data.location}</div>
          ) : (
            <div className="userLocation">지역 정보 없음</div>
          )}
        </UserText>
      </UserInfoContainer>
      <UnderLine />
      <AuctionTitle>{data.name} </AuctionTitle>
      <AutcionInfo>
        <FormatDateTime dateTime={data.createdDate} />
      </AutcionInfo>
      <AuctionContent>{data.content}</AuctionContent>
      <AuctionSummary>{data.auctionSummary}</AuctionSummary>
      <UnderLine />
      <BiddingList>입찰 목록</BiddingList>
      {data.bidItems.length > 0 ? (
        <BiddingItemGrid>
          {data.bidItems.map((i) => (
            <BiddingItem
              key={i.bidItemId}
              onClick={() => handleToBiddingDetail(auctionItemId, i.bidItemId)}
            >
              {i.imageUrlList.length > 0 ? (
                <ItemImg src={i.imageUrlList[0]} />
              ) : (
                <ItemImg src={img2} />
              )}
              <ItemTitle>{i.bidItemName}</ItemTitle>
            </BiddingItem>
          ))}
        </BiddingItemGrid>
      ) : (
        <NothingMessage>아직 등록된 입찰 내역이 없습니다.</NothingMessage>
      )}
      <Footer 멤버아이디={data.memberId} />
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
  margin: 1.5rem 0 0.5rem 1rem;
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

const NothingMessage = styled.div`
  margin-top: -0.5rem;
  margin-left: 1rem;
  color: #5e5e5e;
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

export default AuctionDetail;

// import React from "react";
// import styled from "styled-components";
// import { IoArrowBackOutline } from "react-icons/io5";
// import ItemImage from "../components/UI/ItemImage/ItemImage";
// import { useNavigate } from "react-router-dom";
// import useGetAuctionItem from "../hooks/useGetAuctionItem";
// import Footer from "../components/UI/Footer/Footer";
// import Loading from "../components/UI/Loading/Loading";

// const AuctionDetail = () => {
//   const { data, isLoading, isError, error, auctionId } = useGetAuctionItem();
//   const navigate = useNavigate();

//   if (isLoading) {
//     return (
//       <div>
//         <Loading />
//       </div>
//     );
//   }

//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }

//   const handleBack = () => {
//     window.history.back();
//   };

//   const handleToBiddingDetail = (auctionId, id) => {
//     navigate(`/biddingdetail/${auctionId}/${id}`);
//   };

//   return (
//     <Wrapper>
//       <AuctionImgContainer>
//         <ItemImage images={data.img} />
//         <BackButton onClick={handleBack} />
//       </AuctionImgContainer>
//       <UserInfoContainer>
//         <UserImg src={data.userImg} />
//         <UserText>
//           <div>{data.userName}</div>
//           <div className="userLocation">{data.userLocation}</div>
//         </UserText>
//       </UserInfoContainer>
//       <UnderLine />
//       <AuctionTitle>{data.title} </AuctionTitle>
//       <AutcionInfo>{data.auctionTime}</AutcionInfo>
//       <AuctionContent>{data.content}</AuctionContent>
//       <AuctionSummary>{data.auctionSummary}</AuctionSummary>
//       <UnderLine />
//       <BiddingList>입찰 목록</BiddingList>
//       <BiddingItemGrid>
//         {data.biddings.map((i) => (
//           <BiddingItem
//             key={i.id}
//             onClick={() => handleToBiddingDetail(auctionId, i.id)}
//           >
//             <ItemImg src={i.img[0]} />
//             <ItemTitle>{i.itemTitle}</ItemTitle>
//           </BiddingItem>
//         ))}
//       </BiddingItemGrid>
//       <Footer />
//     </Wrapper>
//   );
// };

// // ============================================================================

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 6rem;
// `;

// const AuctionImgContainer = styled.div`
//   width: 100%;
//   position: relative;
//   padding-top: 100%;
// `;

// const BackButton = styled(IoArrowBackOutline)`
//   position: absolute;
//   top: 2.5%;
//   left: 2.5%;
//   font-size: 2rem;
//   z-index: 10;
//   color: #f0f0f0;
//   cursor: pointer;
// `;

// const UserInfoContainer = styled.div`
//   height: 5rem;
//   display: flex;
// `;

// const UserImg = styled.img`
//   width: 3rem;
//   height: 3rem;
//   margin: 1rem 0.5rem 1rem 1rem;
//   border: none;
//   border-radius: 50%;
//   object-fit: cover;
// `;

// const UserText = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   font-weight: bold;
//   margin-top: 1.5rem;
//   margin-bottom: 1.5rem;

//   .userLocation {
//     font-size: 0.75rem;
//     color: gray;
//   }
// `;

// const AuctionTitle = styled.div`
//   font-weight: bold;
//   font-size: 1.2rem;
//   margin: 1.5rem 0 1rem 1rem;
// `;

// const AutcionInfo = styled.div`
//   margin-left: 1rem;
//   font-size: 0.75rem;
//   font-weight: bold;
//   color: gray;
// `;

// const AuctionContent = styled.div`
//   margin: 1.5rem 1rem;
// `;

// const AuctionSummary = styled.div`
//   margin: 0 0 1.5rem 1rem;
//   font-size: 0.75rem;
//   font-weight: bold;
//   color: gray;
// `;

// const UnderLine = styled.div`
//   border: 0.5px solid #cccccc;
//   margin: 0 1rem;
// `;

// const BiddingList = styled.div`
//   font-weight: bold;
//   font-size: 1.2rem;
//   margin: 1.5rem 1rem;
// `;

// const BiddingItemGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-gap: 1rem;
//   margin: 0 1rem 1rem 1rem;
// `;

// const BiddingItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: -15%;
// `;

// const ItemImg = styled.img`
//   width: 100%;
//   height: 75%;
//   object-fit: cover;
//   border-radius: 5px;
// `;

// const ItemTitle = styled.div`
//   font-weight: bold;
//   margin-top: 1rem;
// `;

// export default AuctionDetail;
