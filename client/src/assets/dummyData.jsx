import img1 from "./img1.jpeg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

export const dummyImages = [img1, img2, img3];

export const dummyBiddings = [
  {
    id: 1,
    img: img1,
    itemTitle: "나이키 조던1 스캇 265",
  },
  {
    id: 2,
    img: img2,
    itemTitle: "투애니원 앨범",
  },
  {
    id: 3,
    img: img3,
    itemTitle: "찌개 책자",
  },
];

export const dummyAuctions = {
  userName: "당근단군",
  userLocation: "군자동",
  userImg: img2,
  auctionTitle: "나이키 에어조던1 스캇 팬텀블랙 265",
  auctionTime: "50분 전",
  content:
    "나이키 공홈에서 당첨된 나이키 에어조던1 스캇입니다!\n사진 찍기 위하여 보자기만 걷어봤고 그 외에는 시착도 안 했습니다.\n건대입구에서 직거래 희망합니다!",
  auctionSummary: "입찰 3 ・ 관심 1 ・ 조회 146",
  auctionEnd: "2023년 5월 15일 오후 5시 26분",
};

export const dummyItem = [
  {
    id: 1,
    title: "샤넬 백 교환해용!",
    period: "2023.05.01 ~ 2023.05.15",
    bidding: 5,
    auctionState: true,
    heart: 5,
    img: img1,
  },
  {
    id: 2,
    title: "루이비통 운동화",
    period: "2023.05.01 ~ 2023.05.15",
    bidding: 5,
    auctionState: false,
    heart: 3,
    img: img2,
  },
  {
    id: 3,
    title: "냉동 피자 하와이안",
    period: "2023.05.01 ~ 2023.05.8",
    bidding: 1,
    auctionState: false,
    heart: 2,
    img: img3,
  },
];
