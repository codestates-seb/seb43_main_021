import styled from "styled-components";
import { useRecoilState } from "recoil";
import { LogOutModalState, loginState } from "../../stores/atoms";
import { useNavigate } from "react-router-dom";
import { Button2 } from "../UI/Button/Button2";
import { Button1 } from "../UI/Button/Button1";

export const LogOutModal = () => {
  const navigate = useNavigate();

  const [logOutClick, setLogOutClick] = useRecoilState(LogOutModalState);
  const [, setLogOutClicks] = useRecoilState(loginState);
  const logOutModalHandler = () => {
    setLogOutClick(!logOutClick);
  };
  const logoutHandler = () => {
    setLogOutClicks(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("memberId");

    setLogOutClick(!logOutClick);
    navigate("/");
  };
  return (
    <ModalWrapper>
      <ModalContainer>
        로그아웃
        <ContainerContnet>로그아웃 하시겠습니까?</ContainerContnet>
        <ButtonArea>
          <Cancellation onClick={logOutModalHandler}>
            <Button2 name={"취소"} />
          </Cancellation>
          <Permit onClick={logoutHandler}>
            <Button1 name={"확인"} />
          </Permit>
        </ButtonArea>
      </ModalContainer>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  height: 100%;
  background-color: var(--blackCover-color);
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
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
