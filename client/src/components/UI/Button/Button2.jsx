import styled from "styled-components";

export const Button2 = ({ name }) => {
  return <Container>{name}</Container>;
};

export default Button2;

const Container = styled.div`
  background-color: var(--white2-color);
  width: 148px;
  height: 46px;
  color: var(--black1-color);
  font-size: 14px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--gray2-hover-color);
  }
`;
