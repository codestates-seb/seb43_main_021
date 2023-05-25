import styled from "styled-components";

export const Button1 = ({ name }) => {
  return <Container>{name}</Container>;
};

export default Button1;

const Container = styled.div`
  background-color: var(--purple2-color);
  width: 148px;
  height: 46px;
  color: var(--white1-color);
  font-size: 14px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--purple3-color);
  }
`;
