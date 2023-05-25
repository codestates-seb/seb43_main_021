import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { modalState, loginState } from "../../../stores/atoms";
import { Button2 } from "../Button/Button2";
import { Button1 } from "../Button/Button1";
import axios from "axios";
export const Modal = () => {
  const navigate = useNavigate();  

  const [, setLogin] = useRecoilState(loginState);
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const memberId=localStorage.getItem("memberId");   
  
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const onClickDeleteUser = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("memberId");


    axios
          .delete(`${process.env.REACT_APP_API_URL}/member/profile/${memberId}`, {    
          })
          .then((res) => {
            alert('회원이 탈퇴되었습니다.');
            setLogin(false)
            setIsOpen(!isOpen);   
            navigate('/');
          })
          .catch((error) => {
            console.log(error);
          });
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
          <Permit onClick={onClickDeleteUser}>
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
  background-color: var(--blackCover-color);
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
  background-color: var(--white1-color);
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
