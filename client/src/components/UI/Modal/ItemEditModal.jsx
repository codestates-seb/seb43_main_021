import styled from "styled-components";

import { useRecoilState } from "recoil";
import { AuctionConfirm, reviseItem } from "../../../stores/atoms";
import { Button1 } from "../Button/Button1";
import { Button2 } from "../Button/Button2";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const ItemEditModal = ({ bidItemId, auction_item_id, data }) => {
  const [, setModal] = useRecoilState(AuctionConfirm);
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [reItem, setReItem] = useRecoilState(reviseItem);
  const param = useParams();

  const deleteAuction = async () => {
    if (bidItemId) {
      try {
        await axios.delete(
          `${process.env.REACT_APP_API_URL}/bid_items/${param.auctionItemId}/${bidItemId}`,
          {
            headers: {
              Authorization: `Bearer  ${accessToken}`,
            },
          }
        );
        setModal(false);
        alert("정상적으로 삭제되었습니다.");
        navigate("/main");
      } catch (error) {
        setModal(false);
        alert("삭제 실패하였습니다.");
        console.error(error);
      }
    } else {
      try {
        await axios.delete(
          `${process.env.REACT_APP_API_URL}/auction_items/${auction_item_id}`,
          {
            headers: {
              Authorization: `Bearer  ${accessToken}`,
            },
          }
        );
        setModal(false);
        alert("정상적으로 삭제되었습니다.");
        navigate("/main");
      } catch (error) {
        setModal(false);
        alert("삭제 실패하였습니다.");
        console.error(error);
      }
    }
  };

  const handleReviseItems = () => {
    if (bidItemId) {
      setReItem(data);
      setModal(false);
      navigate(`/createbidding/${param.auctionItemId}`);
    } else {
      setReItem(data);
      setModal(false);
      navigate("/createauction");
    }
  };

  return (
    <ModalWrapper>
      <ModalContainer>
        <div onClick={() => handleReviseItems()}>
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
  background-color: var(--blackCover-color);
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
`;

const ModalContainer = styled.div`
  display: flex;
  width: 17rem;
  height: 14rem;
  background-color: var(--white1-color);
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
