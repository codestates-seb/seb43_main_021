import styled from "styled-components"
import { FiChevronLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
export default function UserEditHeader({title}){
  return (
    <Wrapper>
      <Title><CustomLink to="/mypage"><FiChevronLeft/></CustomLink>{title}</Title>   
    </Wrapper>
      
  )
}


const Wrapper = styled.div`
  height: 5.5rem;  
  display: flex;
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

const CustomLink = styled(Link)`  
  color: inherit;
`;