import React, { useEffect } from "react";
import Lottie, { useLottie } from "lottie-react";
import items from "../../assets/lotties/items.json";

const ItemLottie = () => {
  const interactivity = {
    mode: "scroll",

    actions: [
      {
        visibility: [0.4, 0.6], // 처음에 애니메이션 실행되도록 변경
        type: "seek",
        frames: [0, 180],
      },
      // {
      //   visibility: [0.3, 0.45],
      //   type: "seek",
      //   frames: [180, 135],
      // },
      // {
      //   visibility: [0.45, 1.0], // 스크롤을 내릴 때 점점 사라지도록 변경
      //   type: "seek",
      //   frames: [135, 90],
      // },
    ],
  };
  const options1 = {
    animationData: items,
    loop: true,
    autoplay: true,
  };

  const { View: Lottie1 } = useLottie(options1);

  return (
    <div>
      {Lottie1}
      {/* <Lottie animationData={items} interactivity={interactivity} /> */}
    </div>
  );
};

export default ItemLottie;
