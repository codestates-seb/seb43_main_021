import styled from "styled-components";
import { useRecoilState } from "recoil";
import { modalState, moveModalState } from "../../../stores/atoms";
import { Button2 } from "../Button/Button2";
import { Button1 } from "../Button/Button1";

export const Modal = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [goPage, setGoPage] = useRecoilState(moveModalState);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const moveModalHandler = () => {
    setIsOpen(!isOpen);
    setGoPage(!goPage);
  };
  return (
    <ModalWrapper>
      <ModalContainer>
        회원탈퇴
        <ContainerContnet>회원탈퇴 하시겠습니까?</ContainerContnet>
        <ButtonArea>
          <Cancellation onClick={openModalHandler}>
            <Button2 name={"취소"} />
          </Cancellation>
          <Permit onClick={moveModalHandler}>
            <Button1 name={"확인"} />
          </Permit>
        </ButtonArea>
      </ModalContainer>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  max-width: 1024px;
`;

const ModalContainer = styled.div`
  display: flex;
  width: 338px;
  height: 170px;
  background-color: white;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  padding: 1.75rem 1rem;
  font-size: 20px;
  font-weight: bold;
`;

const ContainerContnet = styled.div`
  padding-top: 1rem;
  padding-bottom: 1.25rem;
  font-size: 17px;
  font-weight: 400;
`;
const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Cancellation = styled.div`
  > div {
    width: 148px;
    height: 46px;
  }
`;
const Permit = styled.div`
  > div {
    width: 148px;
    height: 46px;
  }
`;
