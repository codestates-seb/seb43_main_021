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

// 경매내역이 경매중일때와 경매완료일때
export const auctionState = atom({
  key:"auctionState",
  default:true,
})

// 내 프로필 수정의 프로필 사진 등록
export const selectedImageState = atom({
  key:"selectedImageState",
  default:null,
})
// profileNickname Input
export const profileNicknameState = atom({
  key:"profileNicknameState",
  default:"",
})
// 로그인 상태
export const loginState = atom({
  key:"loginState",
  default:true
})

// 회원탈퇴 상태
export const withdrawalState = atom({
  key:"withdrawalState",
  default:false,
})
export const socketState = atom({
  key: "socketState",
  default: null,
});

export const AuctionConfirm = atom({
  key: "AuctionConfirm",
  default: null,
});
