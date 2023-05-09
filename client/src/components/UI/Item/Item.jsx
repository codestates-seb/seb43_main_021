import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";

const dummyData = [
  {
    id: 1,
    title: "샤넬 백 교환해용!",
    period: "2023.05.01 ~ 2023.05.15",
    bidding: 5,
    auctionState: true,
    heart: 5,
  },
  {
    id: 2,
    title: "루이비통 운동화",
    period: "2023.05.01 ~ 2023.05.15",
    bidding: 5,
    auctionState: false,
    heart: 3,
  },
  {
    id: 3,
    title: "냉동 피자 하와이안",
    period: "2023.05.01 ~ 2023.05.8",
    bidding: 1,
    auctionState: false,
    heart: 2,
  },
];

const Item = () => {
  return (
    <div>
      {dummyData.map((item) => (
        <>
          <Container key={item.id}>
            <ItemLeft>
              <Img />
              <Text>
                <Title>{item.title}</Title>
                <Period>{item.period}</Period>
                <Bidding>경매입찰 {item.bidding}건</Bidding>
              </Text>
            </ItemLeft>
            <ItemRight>
              <AuctionState>
                {item.auctionState ? "거래 완료!" : "입찰 중"}
              </AuctionState>
              <AiOutlineHeart className="icon" />
              {item.heart}
            </ItemRight>
          </Container>
          <Line />
        </>
      ))}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemLeft = styled.div`
  display: flex;
`;

const Img = styled.div`
  border: 0.5px solid black;
  height: 6.5rem;
  width: 6.5rem;
  margin: 1rem;
`;

const Text = styled.div``;

const Title = styled.div`
  margin-top: 1.25rem;
  font-weight: bold;
`;

const Period = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: gray;
`;

const Bidding = styled.div`
  margin-top: 0.5rem;
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
  color: red;
  font-weight: bold;
`;

const Line = styled.div`
  border: 0.5px solid #cccccc;
`;

export default Item;
