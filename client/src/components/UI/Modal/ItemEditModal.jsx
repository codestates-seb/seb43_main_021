import styled from "styled-components";

import { useRecoilState } from "recoil";
import { AuctionConfirm } from "../../../stores/atoms";
import { Button1 } from "../Button/Button1";
import { Button2 } from "../Button/Button2";
import axios from "axios";

export const ItemEditModal = ({ auction_item_id }) => {
  const [, setModal] = useRecoilState(AuctionConfirm);

  const deleteAuction = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/auction_items/${auction_item_id}`
      );
      setModal(false);
      alert("정상적으로 삭제되었습니다.");
    } catch (error) {
      setModal(false);
      alert("삭제 실패하였습니다.");
      console.error(error);
    }
  };

  return (
    <ModalWrapper>
      <ModalContainer>
        <div onClick={() => setModal(false)}>
          <Button2 name={"수정하기"} />
        </div>
        <div onClick={() => deleteAuction()}>
          <Button2 name={"삭제하기"} />
        </div>
        <div
          className="cancel"
          onClick={() => {
            // auctionComplete();
            setModal(false);
          }}
        >
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
  height: 14rem;
  background-color: white;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  padding: 1.75rem 1rem 1rem 1rem;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;

  div {
    width: 14rem;
  }

  .cancel {
    margin-top: 1rem;
  }
`;
