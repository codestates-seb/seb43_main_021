import { atom } from "recoil";

//modal on/off기능
export const modalState = atom({
  key: "modalState",
  default: false,
});
