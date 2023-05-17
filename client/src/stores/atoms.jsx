import { atom } from "recoil";

//modal on/off기능
export const modalState = atom({
  key: "modalState",
  default: false,
});
// 회원탈퇴 페이지에서 확인을 누르면 탈퇴페이지로 이동
export const moveModalState = atom({
  key: "moveModalState",
  default: false,
});

//LogOutModal on/off기능
export const LogOutModalState = atom({
  key: "LogOutModalState",
  default: false,
});
// PhoneNumber Change on/off기능
export const changePNState = atom({
  key:"changePNState",
  default:false,
})
// Email Change on/off기능
export const emailChangeState = atom({
  key:"emailChangeState",
  default:false,
})
// 경매내역이 경매중일때와 경매완료일때
export const auctionState = atom({
  key:"auctionState",
  default:true,
})


export const socketState = atom({
  key: "socketState",
  default: null,
});
