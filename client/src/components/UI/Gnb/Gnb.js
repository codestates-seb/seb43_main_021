import React from "react";
import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi";
import { BsSearch, BsChatHeart } from "react-icons/bs";
import { TbHammer } from "react-icons/tb";
import { BiUser } from "react-icons/bi";

const Gnb = () => {
  return (
    <Wrapper>
      <Line />
      <Container>
        <NavItem>
          <HiOutlineHome className="icon" />홈
        </NavItem>
        <NavItem>
          <BsSearch className="icon" />
          검색
        </NavItem>
        <NavItem>
          <TbHammer className="icon" />
          경매 등록
        </NavItem>
        <NavItem>
          <BsChatHeart className="icon" />
          채팅
        </NavItem>
        <NavItem>
          <BiUser className="icon" />
          마이 페이지
        </NavItem>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  height: 4rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  background-color: white;
  max-width: 1024px;

  .icon {
    font-size: 26px;
    margin-bottom: 5px;
  }
`;

const Line = styled.div`
  border: 0.5px solid #cccccc;
  max-width: 1024px;
`;
const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 0.8rem;

  /* line-height: 25px; */
`;

export default Gnb;
