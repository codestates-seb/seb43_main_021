import React, { useState } from "react";
import styled from "styled-components";
import { RiAuctionFill } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { profileNicknameState } from "../../stores/atoms";

const AlarmItem = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [userNickname, setUserNickname] = useRecoilState(profileNicknameState);

  const onClickDelete = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }

  return (
    <Container>
      <AlarmMessage>
        <div>
          <label>
            <RiAuctionFill />
          </label>
        </div>
        <MessageContent>
          {userNickname}님! 니꺼내꺼 회원가입을 진심으로 환영합니다!
        </MessageContent>
        <DeletedBtn>
          <button onClick={onClickDelete}>X</button>
        </DeletedBtn>
      </AlarmMessage>
    </Container>
  );
};

export default AlarmItem;

const Container = styled.div`
  width: 100%;
`;

const AlarmMessage = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 1.5rem 0;

  > div {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    background: var(--orange1-color);
    border-radius: 50%;

    > svg {
      width: 20px;
      height: 20px;
      color: var(--white1-color);
    }
  }
`;

const MessageContent = styled.h4`
  padding-left: 1rem;
  width: 100%;
`;

const DeletedBtn = styled.div`
  button {
    border: none;
    cursor: pointer;
    background-color: var(--white1-color);
    font-size: 16px;
    font-weight: bold;
  }
`;