import img2 from "./images/img2.jpg";
import dayjs from "dayjs";
import ChatTime from "../utils/ChatTime";

const now = dayjs();

export const chatRoom = {
  chatRoom_id: 0,
  auction_member_id: 0,
  bid_member_id: 0,
  auction_item_id: 0,
  createdate: "05-19",
  lastmodifieddate: "05-19",
  chat_room_status: true,
  alarm_id: 0,
};

export const chatContent = {
  chatContent_id: 0,
  chat_contents: "",
  member_id: 0,
  createdate: 0,
  chat_image_URL: "",
  chatRoom_id: 0,
};

export const chatContent1 = [
  {
    chatContent_id: "a",
    member_id: 0,
    img: img2,
    content:
      "안녕하세요~! 물건 관심 있어서 연락 드렸습니다 ㅎㅎㅎ 거래 가능할까요??",
    createdate: <ChatTime now={now.subtract(115, "minute").toString()} />,
  },
  {
    chatContent_id: "b",
    member_id: 1,
    img: img2,
    content: "냅 가능합니다!! 혹시 구입하신지 얼마나 되셨나요~??",
    createdate: <ChatTime now={now.subtract(98, "minute").toString()} />,
  },
  {
    chatContent_id: "c",
    member_id: 0,
    img: img2,
    content:
      "재작년 쯤 구매했습니다! 구입 해놓고 보관만 하느라 실사용 횟수는 거의 없습니다..ㅎㅎ 혹시 거래하시면 어디서 거래할 수 있을까요??? 저는 건대 쪽입니다~!",
    createdate: <ChatTime now={now.subtract(74, "minute").toString()} />,
  },
  {
    chatContent_id: "d",
    member_id: 1,
    img: img2,
    content:
      "저는 중랑구 쪽입니다 ㅎㅎㅎ 내일 모레 쯤 건대 갈 예정인데 그 때 거래할까요??? 저녁 8시 쯤에 갈 것 같습니다!!",
    createdate: <ChatTime now={now.subtract(70, "minute").toString()} />,
  },
  // {
  //   chatContent_id: "e",
  //   member_id: "admin",
  // },
  {
    chatContent_id: "e",
    member_id: 0,
    img: img2,
    content:
      "오오🥰🥰 너무 좋죠!! 저도 아마 저녁 시간 이후에 가능할 것 같습니다!",
    createdate: <ChatTime now={now.subtract(35, "minute").toString()} />,
  },
  {
    chatContent_id: 5,
    member_id: 1,
    img: img2,
    content:
      "넵!! 저는 8시 이후부터 계속 건대에 있을거라서 연락 주시면 찾아뵙겠습니당👍🏻👍🏻",
    createdate: <ChatTime now={now.subtract(23, "minute").toString()} />,
  },
];
