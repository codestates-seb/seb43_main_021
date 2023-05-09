import styled from "styled-components"

export default function UserEditHeader({title}){
  return (
    <Wrapper>
      <Title>{title}</Title>   
    </Wrapper>
      
  )
}


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

