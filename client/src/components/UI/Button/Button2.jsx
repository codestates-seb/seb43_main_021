import styled from "styled-components";

export const Button2 = ({ name }) => {
  return <Container>{name}</Container>;
};

export default Button2;

const Container = styled.div`
  background-color: #f2f3f7;
  width: 148px;
  height: 46px;
  color: black;
  font-size: 14px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0bc;
  }
`;
