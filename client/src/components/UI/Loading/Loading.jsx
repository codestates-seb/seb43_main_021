import React from "react";
import Lottie from "lottie-react";
import loading from "../../../assets/lotties/loading.json";
import { styled } from "styled-components";
const Loading = () => {
  return (
    <Wrapper>
      <Container>
        <Lottie animationData={loading} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 70%;
`;
export default Loading;
