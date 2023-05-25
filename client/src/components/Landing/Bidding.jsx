import React from "react";
import Lottie from "lottie-react";
import bid from "../../assets/lotties/bid.json";
import { styled } from "styled-components";

const interactivity = {
  mode: "scroll",

  actions: [
    {
      visibility: [0.7, 0.86], // 처음에 애니메이션 실행되도록 변경
      type: "stop",
      frames: [390],
    },
    {
      visibility: [0, 0.9], // 처음에 애니메이션 실행되도록 변경
      type: "seek",
      frames: [90, 355],
    },
  ],
};

const Bidding = () => {
  return (
    <Wrapper>
      <BidContainer>
        <Lottie animationData={bid} interactivity={interactivity} />
      </BidContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BidContainer = styled.div``;

export default Bidding;
