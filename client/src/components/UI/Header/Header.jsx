import React from "react";
import styled from "styled-components";
import { BiBell } from "react-icons/bi";

const Header = ({ title }) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Notice>
          <BiBell />
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
  margin-bottom: 1rem;
  margin-right: 1.5rem;
`;

const Line = styled.div`
  border: 0.5px solid #cccccc;
  width: 100%;
`;
