import React, { useState } from "react";
import styled from "styled-components";
import { BsChevronLeft } from "react-icons/bs";
import AlarmItem from "../components/Alarm/AlarmItem";
import { useNavigate } from "react-router-dom";

const Alarm = () => {
  const [isAllDeleted, setIsAllDeleted] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const onClickDeleteAll = () => {
    setIsAllDeleted(true);
  };

  return (
    <Wrapper>
      <Header>
        <BackButton onClick={handleBack} />
        <HeaderTitle>
          <h2>알림</h2>
        </HeaderTitle>
        <DeleteAll onClick={onClickDeleteAll}>전체삭제</DeleteAll>
      </Header>
      <Container>
        <Body>
          {!isAllDeleted && <AlarmItem />}
        </Body>
      </Container>
    </Wrapper>
  );
};

export default Alarm;

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  padding: 2rem 1.5rem;
  height: 5.6rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  position: relative;
  border-color: var(--white3-color);
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

const BackButton = styled(BsChevronLeft)`
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  padding-left: 1.5rem;
  h2 {
    font-size: 20px;
    font-weight: bold;
  }
`;

const DeleteAll = styled.div`
  font-size: 15px;
  cursor: pointer;
`;

const Container = styled.div``;

const Body = styled.div`
  padding: 1rem;
`;