import styled from "styled-components";

export const Button1 = ({ name }) => {
  return <Container>{name}</Container>;
};

export default Button1;

const Container = styled.div`
  background-color: #4636fc;
  width: 148px;
  height: 46px;
  color: white;
  font-size: 14px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #3b29fb;
  }
`;
