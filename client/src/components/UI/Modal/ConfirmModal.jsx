import styled from "styled-components";
import ItemButton2 from "../Item/ItemButton2";
import ItemButton from "../Item/ItemButton";
import { useRecoilState } from "recoil";
import { AuctionConfirm } from "../../../stores/atoms";

export const ConfirmModal = ({ member, content, auctionComplete }) => {
  const [modal, setModal] = useRecoilState(AuctionConfirm);
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
        {member.slice(0, 19) + (member.length > 19 ? "..." : "")}님의 물품으로
        낙찰하시겠습니까?
        {content ? <ContainerContent></ContainerContent> : null}
        <ButtonArea>
          <div onClick={() => setModal(false)}>
            <ItemButton2 />
          </div>
          <div
            onClick={() => {
              auctionComplete();
              setModal(false);
            }}
          >
            <ItemButton />
          </div>
        </ButtonArea>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default ConfirmModal;

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
  width: 338px;
  height: 170px;
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
const ButtonArea = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;
