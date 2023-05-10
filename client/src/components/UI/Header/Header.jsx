import React from "react";
import styled from "styled-components";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = ({ title }) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
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
