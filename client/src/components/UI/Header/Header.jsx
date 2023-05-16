import React from "react";
import styled from "styled-components";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FiChevronLeft } from "react-icons/fi";

const Header = ({ title, chatTitle }) => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Container>
        {chatTitle ? <BackButton onClick={handleBack} /> : null}
        <Title>{title}</Title>
        <ChatTitle>{chatTitle}</ChatTitle>

        <Notice>
          <CustomLink to="/search">
            <Search />
          </CustomLink>
          <Bell />
        </Notice>
      </Container>
      <Line />
    </>
  );
};

export default Header;

const Container = styled.div`
  height: 5.5rem;
  /* background-color: navy; */
  display: flex;
  justify-content: space-between;
  font-size: 23px;
  font-weight: 700;
`;

const Title = styled.div`
  margin-top: auto;
  margin-bottom: 1rem;
  margin-left: 1.5rem;
`;

const ChatTitle = styled.div`
  margin: auto auto 1rem auto;
`;

const BackButton = styled(FiChevronLeft)`
  margin: auto 1rem 1rem;
  width: 2.25rem;
  height: 2.25rem;
  cursor: pointer;
`;

const Notice = styled.div`
  margin-top: auto;
  margin-bottom: 0.6rem;
  margin-right: 1.5rem;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Line = styled.div`
  border: 0.5px solid #cccccc;
  width: 100%;
`;

const Search = styled(BsSearch)`
  font-size: 1.6rem;
  margin-right: 0.8rem;
  margin-bottom: 3px;
`;

const Bell = styled(FiBell)`
  font-size: 1.9rem;
`;
