import styled from "styled-components"
import { FiChevronLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
export default function UserEditHeader({submit,title,  handleSubmit}){  
  
  return (
    <Wrapper>
      <Title><CustomLink to="/mypage"><FiChevronLeft/></CustomLink>{title} </Title>   
      <ClearButton onClick={handleSubmit} to="/mypage" >{submit}</ClearButton>
    </Wrapper>
      
  )
}


const Wrapper = styled.div`
  width: 100%;
  height: 5.5rem;  
  display: flex;
  justify-content: space-between;
  font-size: 23px;
  font-weight: 700;  
  border-bottom: 1px solid #f6f6f8;
`;
const Title = styled.div`
  padding-top: 2.5rem;
  display: flex;      
  svg{
    width: 25px;
    height: 25px;
    margin-right: 1.25rem;
    margin-left: 1.75rem;
  }  
`;

const ClearButton = styled(Link)`
  border: 0;
  background: white;
  font-size: 18px;
  display: flex;
  align-items: center;    
  padding-top: 1rem; 
  padding-right: 1rem;
  font-weight: bold;  
  text-decoration: none;
  color: black;
  cursor: pointer;
`
const CustomLink = styled(Link)`  
  color: inherit;  
`;