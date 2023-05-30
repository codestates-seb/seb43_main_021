import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { styled } from "styled-components";
const ItemDot = () => {
  return (
    <Wrapper>
      <Container>
        <Dots />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1024px;
  width: 100%;
`;

const Container = styled.div`
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 2.5%;
  right: 2.5%;
  width: 2rem;
  height: 2rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dots = styled(BsThreeDotsVertical)`
  color: var(--white3-color);
  font-size: 1.8rem;
`;

export default ItemDot;
