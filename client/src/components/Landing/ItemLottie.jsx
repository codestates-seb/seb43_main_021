import React from "react";
import { useLottie } from "lottie-react";
import items from "../../assets/lotties/items.json";
import { styled } from "styled-components";

const ItemLottie = () => {
  const options1 = {
    animationData: items,
    loop: true,
    autoplay: true,
  };

  const { View: Lottie1 } = useLottie(options1);

  return (
    <div>
      <Wrapper>{Lottie1}</Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default ItemLottie;
