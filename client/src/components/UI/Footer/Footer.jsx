import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { RiHeartLine } from "react-icons/ri";
import useGetAuctionItem from "../../../hooks/useGetAuctionItem";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PeriodDateTime from "../../../utils/PeriodDateTime";
import { useRecoilState } from "recoil";
import { reviseItem } from "../../../stores/atoms";

const Footer = ({ bidItemStatus }) => {
  const { data } = useGetAuctionItem();
  const [auction, setAuction] = useState("");
  const { auctionItemId, bidItemId } = useParams();
  const navigate = useNavigate();
  const myMemberId = localStorage.getItem("memberId");
  const auctionMemberId = data.members[0].memberId.toString();
  const accessToken = localStorage.getItem("accessToken");
  const [reItem, setReItem] = useRecoilState(reviseItem);

  console.log("auctionItemId, bidItemId", auctionItemId, bidItemId);
  console.log("푸터", auctionMemberId, myMemberId);

  useEffect(() => {
    setAuction(data?.auctionEnd);
  }, [data, setAuction]);

  const submitFavorite = () => {};

  const handleSelectItem = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/auction_items/${auctionItemId}/${bidItemId}/select`,
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
    } catch (error) {
      alert(error);
    }
  };

  const handleCB = () => {
    if (myMemberId) {
      navigate(`/createbidding/${auctionItemId}`);
    } else {
      alert("로그인 후 입찰할 수 있습니다.");
      navigate("/login");
    }
  };

  return (
    <>
      {data ? (
        <Wrapper>
          <FooterLine />
          <FooterContainer>
            <Favorite onClick={submitFavorite} />
            <DivisionLine />
            <AuctionEnd>
              {data.auctionStatus === "AUCTION_BIDDING" ? (
                <>
                  <div>경매 마감일</div>
                  <div style={{ color: "var(--gray1-color)" }}>
                    <PeriodDateTime
                      createdDate={data.createdDate}
                      period={data.period}
                    />
                  </div>
                </>
              ) : (
                "경매 종료"
              )}
            </AuctionEnd>

            {bidItemId ? (
              <>
                {bidItemStatus === null || "AUCTION_BIDDING" ? (
                  <>
                    {bidItemId ? (
                      auctionMemberId === myMemberId ? (
                        <BiddingButton onClick={handleSelectItem}>
                          낙찰하기
                        </BiddingButton>
                      ) : null
                    ) : null}
                  </>
                ) : bidItemStatus === "AUCTION_SUCCESSFUL" ? (
                  <div>낙찰 완료</div>
                ) : (
                  <div>기간만료</div>
                )}
              </>
            ) : auctionMemberId === myMemberId ? null : data.auctionStatus ===
              "AUCTION_BIDDING" ? (
              <BiddingButton onClick={() => handleCB()}>입찰하기</BiddingButton>
            ) : null}
          </FooterContainer>
        </Wrapper>
      ) : null}
    </>
  );
};

const Wrapper = styled.div`
  height: 5rem;
  width: 100%;
  max-width: 1024px;
  bottom: 0;
  position: fixed;
  background-color: var(--white1-color);
  z-index: 100;
`;

const FooterLine = styled.div`
  border: 0.5px solid var(--white5-color);
`;

const FooterContainer = styled.div`
  display: flex;
  height: 4.5rem;
`;

const Favorite = styled(RiHeartLine)`
  font-size: 1.5rem;
  color: var(--gray1-color);
  margin-left: 1rem;
  margin-top: 1.5rem;
  cursor: pointer;
`;

const DivisionLine = styled.div`
  border: 0.5px solid var(--white5-color);
  width: 0;
  height: 2.5rem;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const AuctionEnd = styled.div`
  margin-left: 1rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BiddingButton = styled.button`
  background-color: var(--purple2-color);
  color: var(--white1-color);
  border: none;
  width: 5.5rem;
  height: 2.5rem;
  font-weight: bold;
  border-radius: 5px;
  margin: 1rem 1rem 1rem auto;
  cursor: pointer;

  &:hover {
    background-color: var(--purple1-color);
  }
`;

export default Footer;
