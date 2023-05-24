import styled from "styled-components";

import { useRecoilState } from "recoil";
import { AuctionConfirm } from "../../../stores/atoms";
import { Button1 } from "../Button/Button1";
import { Button2 } from "../Button/Button2";

export const ItemEditModal = () => {
  const [, setModal] = useRecoilState(AuctionConfirm);
  // const truncateText = (text, maxLength) => {
  //   if (text.length < maxLength) {
  //     return text;
  //   }
  //   return text.substring(0, maxLength - 3) + "...";
  // };

  // {board.content.slice(0, 200) +
  //   (board.content.length > 200 ? '...' : '')}
  // {truncateText(member, 20)}님의 물품으로 낙찰하시겠습니까?

  return (
    <ModalWrapper>
      <ModalContainer>
        <div onClick={() => setModal(false)}>
          <Button2 name={"수정하기"} />
        </div>
        <div
          onClick={() => {
            // auctionComplete();
            setModal(false);
          }}
        >
          <div onClick={() => setModal(false)}>
            <Button2 name={"삭제하기"} />
          </div>
          <div
            onClick={() => {
              // auctionComplete();
              setModal(false);
            }}
          ></div>
          <Button1 name={"취소"} />
        </div>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default ItemEditModal;

const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
`;

const ModalContainer = styled.div`
  display: flex;
  width: 17rem;
  height: 15rem;
  background-color: white;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  padding: 1.75rem 1rem 1rem 1rem;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const ContainerContent = styled.div`
  padding-top: 1rem;
  padding-bottom: 1.25rem;
  font-size: 17px;
  font-weight: 400;
`;
