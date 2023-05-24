import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { RiHeartLine } from "react-icons/ri";
import useGetAuctionItem from "../../../hooks/useGetAuctionItem";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { data } = useGetAuctionItem();
  const [auction, setAuction] = useState("");
  const { bidItemId } = useParams();
  const navigate = useNavigate();
  const myMemberId = localStorage.getItem("memberId");
  const auctionMemberId = data.members[0].memberId.toString();

  useEffect(() => {
    setAuction(data?.auctionEnd);
  }, [data, setAuction]);

  const submitFavorite = () => {};

  const handleButton = () => {
    if (bidItemId) {
      console.log("입찰 아이템이며 경매자이기 때문에 채팅하기!");
    } else {
      navigate("/createbidding");
    }
  };

  return (
    <>
      <Wrapper>
        <FooterLine />
        <FooterContainer>
          <Favorite onClick={submitFavorite} />
          <DivisionLine />
          <AuctionEnd>
            <div>경매 마감일</div>
            <div style={{ color: "gray" }}>{auction}</div>
          </AuctionEnd>
          {bidItemId ? (
            auctionMemberId === myMemberId ? (
              <BiddingButton onClick={handleButton}>채팅하기</BiddingButton>
            ) : null
          ) : auctionMemberId === myMemberId ? null : (
            <BiddingButton onClick={handleButton}>입찰하기</BiddingButton>
          )}

          {/* <BiddingButton onClick={handleButton}>
            {biddingId ? "채팅하기" : 멤버아이디 ? null : "입찰하기"}
          </BiddingButton> */}
        </FooterContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
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

export default Footer;
