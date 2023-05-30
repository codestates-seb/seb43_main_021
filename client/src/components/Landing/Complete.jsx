import React from "react";
import Lottie from "lottie-react";
import auction from "../../assets/lotties/auction.json";

import { styled } from "styled-components";

const interactivity = {
  mode: "scroll",

  actions: [
    {
      visibility: [0, 0.25], // 처음에 애니메이션 실행되도록 변경
      type: "stop",
      frames: [1],
    },
    {
      visibility: [0.47, 0.55], // 처음에 애니메이션 실행되도록 변경
      type: "loop",
      frames: [0, 120],
    },
    {
      visibility: [0.25, 0.6], // 처음에 애니메이션 실행되도록 변경
      type: "seek",
      frames: [0, 120],
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
  width: 140%;
  margin-bottom: -10%;

  @media screen and (min-width: 768px) {
    width: 125%;
    margin-top: -8%;

    margin-bottom: -25%;
  }
`;

export default Complete;
