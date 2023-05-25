import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import noImage from "../../../assets/images/noimage.png";
import FormatDateTime from "../../../utils/FormatDateTime";
import PeriodDateTime from "../../../utils/PeriodDateTime";

const Item = ({ item }) => {
  const navigate = useNavigate();
  const handleToAuctionDetail = (id) => {
    navigate(`/AuctionDetail/${id}`);
  };
  // {member.slice(0, 19) + (member.length > 19 ? "..." : "")}님의 물품으로

  return (
    <div>
      {item.map((item) => (
        <React.Fragment key={item.auctionItemId}>
          <Container onClick={() => handleToAuctionDetail(item.auctionItemId)}>
            <ItemLeft>
              {item.imageUrlList[0] ? (
                <Img src={item.imageUrlList[0]} />
              ) : (
                <Img src={noImage} />
              )}
              <Text>
                <Title>
                  {item.name.slice(0, 40) +
                    (item.name.length > 41 ? "..." : "")}
                </Title>
                <Period>
                  <PeriodDateTime
                    period={item.period}
                    createdDate={item.createdDate}
                  />
                  까지
                </Period>
                <Bidding>경매입찰 {item.bidItems.length}건</Bidding>
                <FormatDateTime dateTime={item.createdDate} />
              </Text>
            </ItemLeft>
            <ItemRight>
              <AuctionState>
                {item.auctionState ? "거래 완료!" : "입찰 중"}
              </AuctionState>
              <AiOutlineHeart className="icon" />
              {/* {item.heart} */}
            </ItemRight>
          </Container>
          <Line />
        </React.Fragment>
      ))}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const ItemLeft = styled.div`
  display: flex;
`;

const Img = styled.img`
  border: 0.5px solid black;
  height: 6.5rem;
  width: 6.5rem;
  margin: 1rem;
  object-fit: cover;
`;

const Text = styled.div``;

const Title = styled.div`
  margin-top: 1.25rem;
  font-weight: bold;
`;

const Period = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--gray1-color);
`;

const Bidding = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  font-weight: bold;
`;

const ItemRight = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: 1rem;
  margin-right: 1rem;
  .icon {
    margin-left: 0.25rem;
  }
`;

const AuctionState = styled.div`
  color: var(--red1-color);
  font-weight: bold;
`;

const Line = styled.div`
  border: 0.5px solid var(--white5-color);
`;

export default Item;
