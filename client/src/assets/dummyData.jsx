import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.jpeg";
import img6 from "./images/img6.jpeg";
import img7 from "./images/img7.jpeg";
import img8 from "./images/img8.jpeg";
import img9 from "./images/img9.jpeg";
import img10 from "./images/img10.png";
import img17 from "./images/img17.jpeg";
import img19 from "./images/img19.jpeg";
import img15 from "./images/img15.png";

export const dummyImages = [img1, img2, img3];

export const dummyBiddings = [
  {
    id: 0,
    img: [img4, img6],
    userImg: img7,
    userName: "중고장인",
    userLocation: "성수동",
    itemTitle: "아이앱 티셔츠 그레이멜란지",
    itemTime: "20분 전",
    itemContent:
      "구매 후 두 번 입고 세탁한 뒤에 1년 동안 보관만 했습니다. 새 것 같은 컨디션이에여",
  },
  {
    id: 1,
    img: [img6],
    userImg: img8,
    userName: "아차산노래꾼",
    userLocation: "아차산",
    itemTitle: "애플워치 6 스테인리스 실버",
    itemContent: "실사용 2년 정도고 잔기스 외에는 문제없습니다~~",
  },
  {
    id: 2,
    img: [img5],
    userImg: img9,
    userName: "코코볼",
    userLocation: "면목동",
    itemTitle: "맥북 에어m1",
    itemContent:
      "액정이 고장나서 화면은 안나오지만 기능은 정상 작동합니다! 크렘쉘 모드로 사용하시면 돼요 ㅎㅎㅎ",
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

export const dummyItemList = [
  {
    id: 0,
    title: "나이키 에어조던1 스캇 팬텀블랙 265",
    period: "2023.05.01 ~ 2023.05.15",
    bidding: 5,
    auctionState: true,
    heart: 5,
    img: [img1, img2, img3],
  },
  {
    id: 1,
    title: "조던1 다크 모카",
    period: "2023.05.01 ~ 2023.05.15",
    bidding: 5,
    auctionState: false,
    heart: 3,
    img: [img10],
  },
  {
    id: 2,
    title: "마샬 스톡웰1",
    period: "2023.05.01 ~ 2023.05.8",
    bidding: 1,
    auctionState: false,
    heart: 2,
    img: [img17],
  },
];

export const dummyItem = [
  {
    id: 0,
    title: "나이키 에어조던1 스캇 팬텀블랙 265",
    img: [img1, img2, img3, img10],
    userName: "당근단군",
    userLocation: "군자동",
    userImg: img2,
    auctionTime: "50분 전",
    content:
      "나이키 공홈에서 당첨된 나이키 에어조던1 스캇입니다!\n사진 찍기 위하여 보자기만 걷어봤고 그 외에는 시착도 안 했습니다.\n건대입구에서 직거래 희망합니다!",
    auctionSummary: "입찰 3 ・ 관심 1 ・ 조회 146",
    auctionEnd: "2023년 5월 15일 오후 5시 26분",
    biddings: [
      {
        id: 0,
        img: [img4, img6],
        userImg: img7,
        userName: "중고장인",
        userLocation: "성수동",
        itemTitle: "뉴 아이앱 티셔츠 그레이멜란지",
        itemTime: "20분 전",
        itemContent:
          "구매 후 두 번 입고 세탁한 뒤에 1년 동안 보관만 했습니다. 새 것 같은 컨디션이에여",
      },
      {
        id: 1,
        img: [img6],
        userImg: img8,
        userName: "아차산노래꾼",
        userLocation: "아차산",
        itemTitle: "뉴 애플워치 6 스테인리스 실버",
        itemContent: "실사용 2년 정도고 잔기스 외에는 문제없습니다~~",
      },
      {
        id: 2,
        img: [img5],
        userImg: img9,
        userName: "코코볼",
        userLocation: "면목동",
        itemTitle: "뉴 맥북 에어m1",
        itemContent:
          "액정이 고장나서 화면은 안나오지만 기능은 정상 작동합니다! 크렘쉘 모드로 사용하시면 돼요 ㅎㅎㅎ",
      },
    ],
  },
  {
    id: 1,
    title: "조던1 다크 모카",
    img: [img10],
    userName: "출출",
    userLocation: "익선동",
    userImg: img10,
    auctionTime: "25분 전",
    content:
      "나이키 공홈에서 당첨된 나이키 에어조던1 다크 모카입니다!\n사진 찍기 위하여 보자기만 걷어봤고 그 외에는 시착도 안 했습니다.\n건대입구에서 직거래 희망합니다!",
    auctionSummary: "입찰 2 ・ 관심 6 ・ 조회 16",
    auctionEnd: "2023년 5월 15일 오후 5시 26분",
    biddings: [
      {
        id: 0,
        img: [img19],
        userImg: img7,
        userName: "초딩",
        userLocation: "옥수동",
        itemTitle: "두 조각 먹은 피자",
        itemTime: "20분 전",
        itemContent: "두 조각 먹고 얼려놨습니다 파파존스라서 맛있습니다",
      },
      {
        id: 1,
        img: [img6],
        userImg: img8,
        userName: "아차산노래꾼",
        userLocation: "아차산",
        itemTitle: "애플워치 6 스테인리스 실버",
        itemContent: "실사용 2년 정도고 잔기스 외에는 문제없습니다~~",
      },
    ],
  },
  {
    id: 2,
    title: "마샬 스톡웰1",
    img: [img17],
    userName: "딩당동",
    userLocation: "마북동",
    userImg: img2,
    auctionTime: "50분 전",
    content:
      "독일에서 직구한 마샬 스톡웰1입니다. 안에 케이스도 함께 동봉 되어있습니다~~",
    auctionSummary: "입찰 3 ・ 관심 1 ・ 조회 146",
    auctionEnd: "2023년 5월 15일 오후 5시 26분",
    biddings: [
      {
        id: 0,
        img: [img15, img15],
        userImg: img7,
        userName: "동구동구",
        userLocation: "신월동",
        itemTitle: "지오지아 슬림핏 정장",
        itemTime: "10분 전",
        itemContent: "구매 후 두 번 입고 드라이클리닝 후 보관 중입니당",
      },
      {
        id: 1,
        img: [img6],
        userImg: img8,
        userName: "아차산노래꾼",
        userLocation: "아차산",
        itemTitle: "애플워치 6 스테인리스 실버",
        itemContent: "실사용 2년 정도고 잔기스 외에는 문제없습니다~~",
      },
    ],
  },
];

export const dummyData = [
  {
    memberId: "user01",
    password: "1q2w3e4r",
    nickName: "baba",
    email: "yoyo@naver.com",
    phone_number: "010-1111-8888",
  },
  {
    memberId: "user02",
    password: "qazwsx",
    nickName: "dummyUser",
    email: "dummyuser@example.com",
    phone_number: "010-1234-5678"
  },
];


export const dummyChatRoom = [
  {
    chatRoom_id: 0,
    auction_member_id: 0,
    bid_member_id: 0,
    auction_item_id: 0,
    createdate: "2023-05-15",
    lastmodifieddate: "2023-05-17",
    chat_room_status: true,
    alarm_id: 0,
  },
];

export const dummyChatContent = [
  {
    chatContent_id: 0,
    chat_contents: "안녕하세요~!",
    member_id: 0,
    createdate: "2023-05-15",
    chat_image_URL: null,
    chatRoom_id: 0,
  },
];
