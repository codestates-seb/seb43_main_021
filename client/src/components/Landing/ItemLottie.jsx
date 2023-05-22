import React from "react";
import { useLottie } from "lottie-react";
import items from "../../assets/lotties/items.json";

const ItemLottie = () => {
  const options1 = {
    animationData: items,
    loop: true,
    autoplay: true,
  };

  const { View: Lottie1 } = useLottie(options1);

  return <div>{Lottie1}</div>;
};

export default ItemLottie;
