import React from "react";
import styled from "styled-components";

const Header = ({ title }) => {
  return (
    <>
      <Wrapper>
        <Title>{title}</Title>                  
      </Wrapper>
      <Line />
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 5.5rem;  
  display: flex;
  font-size: 23px;
  font-weight: 700;
`;
const Title = styled.div`
  margin-top: auto;
  margin-bottom: 1rem;
  margin-left: 1.5rem;
`;
const Line = styled.div`
  border: 0.5px solid #cccccc;
  width: 100%;
`;
