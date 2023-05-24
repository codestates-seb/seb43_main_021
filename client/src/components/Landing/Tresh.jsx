import React from "react";
import Lottie from "lottie-react";
import tresh from "../../assets/lotties/tresh.json";
import x from "../../assets/lotties/x_circle.json";
import { styled } from "styled-components";

const interactivity1 = {
  mode: "scroll",

  actions: [
    {
      visibility: [0.2, 0.35], // 처음에 애니메이션 실행되도록 변경
      type: "seek",
      frames: [0, 65],
    },
    {
      visibility: [0.35, 0.5], // 처음에 애니메이션 실행되도록 변경
      type: "seek",
      frames: [65, 170],
    },
    {
      visibility: [0.55, 0.7],
      type: "stop",
      frames: [0, 0],
    },
    // {
    //   visibility: [0.45, 1.0], // 스크롤을 내릴 때 점점 사라지도록 변경
    //   type: "seek",
    //   frames: [135, 90],
    // },
  ],
};

const interactivity2 = {
  mode: "scroll",

  actions: [
    {
      visibility: [0.0, 0.4], // 처음에 애니메이션 실행되도록 변경
      type: "seek",
      frames: [0, 0],
    },
    {
      visibility: [0.58, 0.68], // 처음에 애니메이션 실행되도록 변경
      type: "seek",
      frames: [0, 90],
    },

    // {
    //   visibility: [0.45, 1.0], // 스크롤을 내릴 때 점점 사라지도록 변경
    //   type: "seek",
    //   frames: [135, 90],
    // },
  ],
};

// const interactivity3 = {
//   mode: "scroll",

//   actions: [
//     {
//       visibility: [0.7, 0.85], // 처음에 애니메이션 실행되도록 변경
//       type: "stop",
//       frames: [390],
//     },
//     {
//       visibility: [0, 0.9], // 처음에 애니메이션 실행되도록 변경
//       type: "seek",
//       frames: [100, 355],
//     },
//   ],
// };

const Tresh = () => {
  return (
    <Wrapper>
      <TreshContainer>
        <Lottie animationData={tresh} interactivity={interactivity1} />
      </TreshContainer>
      <XCircle>
        <Lottie animationData={x} interactivity={interactivity2} />
      </XCircle>
      {/* <BidContainer>
        <Lottie animationData={bid} interactivity={interactivity3} />
      </BidContainer> */}
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
const TreshContainer = styled.div`
  width: 80%;
`;
const XCircle = styled.div`
  width: 40%;
  margin-top: -70%;
`;

// const BidContainer = styled.div``;

export default Tresh;
