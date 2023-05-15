import styled from "styled-components"
import { auctionState } from '../../stores/atoms';
import {useRecoilState} from "recoil"
import { FiChevronLeft } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';
export default function MyAuction(){
  const [auction, setAuction] = useRecoilState(auctionState)
  const auctionHandler = ()=>{
    setAuction(true)
  }
  const auctionCompletedHandler =()=>{
    setAuction(false)
  }
  return (
    <Wrapper>
      <TopContainer>
        <Title><CustomLink to="/mypage"><FiChevronLeft/></CustomLink>경매내역</Title>
        <MainTitle>나의 경매내역
          <WritingButton>
            <StyledLink to="/createauction">글쓰기</StyledLink></WritingButton>
          <VscAccount/>          
        </MainTitle>
        <BottomSeletor>          
            <FirstButton isSelected={auction} onClick={auctionHandler}>경매중</FirstButton>
            <LastButton isSelected={auction} onClick={auctionCompletedHandler}>경매완료</LastButton>                   
        </BottomSeletor>
      </TopContainer>    
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
const TopContainer =styled.div`
  height: 16.5rem;      
`
const Title = styled.div`
  display: flex;  
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 2.5rem;  
  padding: 2.5rem 1rem 0 1.5rem;
  svg{
    width: 25px;
    height: 25px;
    margin-right: 1.25rem;    
  }
`
const CustomLink = styled(Link)`  
  color: inherit;
`
const MainTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;

  button{
    margin-top: 2.75rem;
    margin-left: 0.25rem;
    position: absolute;
  }
  svg{
    width:78px;
    height: 78px;
    margin-bottom: 3.5rem;
  }  
  @media only screen and (min-width:768px){
    font-size: 28px;    
  }
`

const WritingButton = styled.button`
  font-size: 15px;
  font-weight: bold;
  width: 5.25rem;
  height: 2.5rem;
  border: 0;
  border-radius: 5px;
  @media only screen and (min-width:768px){
    width: 8rem;
    height: 3rem;
    font-size: 18px;    
  }
`
const StyledLink  = styled(Link)`
  color: black;
  text-decoration: none;
`
const BottomSeletor = styled.button`
  width: 100%;
  height: 2rem;
  display: flex;
  border: 0;
  background: white;
  @media only screen and (min-width:768px){
    height: 3rem;
    
  }
`
const FirstButton = styled.div`
  width: 50%;  
  height: 100%;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;  
  border-bottom: ${props => props.isSelected ? '2px solid black' : 'none'};  
  @media only screen and (min-width:768px){
    font-size: 20px;
  }
`
const LastButton = styled.div`
  width: 50%;
  height: 100%;
  font-weight: bold;
  font-size: 15px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-bottom: ${props => !props.isSelected ? '2px solid black' : 'none'};
  @media only screen and (min-width:768px){
    font-size: 20px;

  }
`