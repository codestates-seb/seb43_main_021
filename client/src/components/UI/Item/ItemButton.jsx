import styled from "styled-components";

export const ItemButton = () => {
  return <Container>확인</Container>;
};

export default ItemButton;

const Container = styled.div`
  background-color: #4636fc;
  width: 85px;
  height: 39px;
  color: white;
  font-size: 14px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
