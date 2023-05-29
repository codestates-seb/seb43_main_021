import React from "react";
import Lottie from "lottie-react";
import auction from "../../assets/lotties/auction.json";

import { styled } from "styled-components";

const interactivity = {
  mode: "scroll",

  actions: [
    {
      visibility: [0.1, 0.5], // 처음에 애니메이션 실행되도록 변경
      type: "seek",
      frames: [0, 120],
    },
    {
      visibility: [0.5, 1], // 처음에 애니메이션 실행되도록 변경
      type: "loop",
      frames: [20, 120],
    },
  ],
};

const Complete = () => {
  return (
    <Wrapper>
      <Container>
        <Lottie animationData={auction} interactivity={interactivity} />
      </Container>
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
const Container = styled.div`
  width: 130%;

  @media screen and (min-width: 768px) {
    width: 110%;
    margin-bottom: -30%;
  }
`;

export default Complete;
