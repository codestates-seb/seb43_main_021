import React from "react";
import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi";
import { BsChatHeart } from "react-icons/bs";
import { TbHammer } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../../../stores/atoms";
import Line from "../Line/Line";

const Gnb = () => {
  // const [keepLoggedIn] = useRecoilState(loginState);
  const memberId = localStorage.getItem("memberId");

  return (
    <Wrapper>
      <Line />
      <Container>
        <CustomLink to="/">
          <NavItem>
            <HiOutlineHome className="icon" />홈
          </NavItem>
        </CustomLink>

        <CustomLink to="/main">
          <NavItem>
            <TbHammer className="icon" />
            경매
          </NavItem>
        </CustomLink>

        {memberId ? (
          <CustomLink to="/chat">
            <NavItem>
              <BsChatHeart className="icon" />
              채팅
            </NavItem>
          </CustomLink>
        ) : (
          <CustomLink to="/login">
            <NavItem>
              <BsChatHeart className="icon" />
              채팅
            </NavItem>
          </CustomLink>
        )}
        {memberId ? (
          <CustomLink to="/mypage">
            <NavItem>
              <BiUser className="icon" />
              마이 페이지
            </NavItem>
          </CustomLink>
        ) : (
          <CustomLink to="/login">
            <NavItem>
              <BiUser className="icon" />
              마이 페이지
            </NavItem>
          </CustomLink>
        )}
      </Container>
    </Wrapper>
  );
};

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  height: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  background-color: var(--white1-color);
  max-width: 1024px;

  .icon {
    font-size: 26px;
    margin-bottom: 5px;
  }
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
