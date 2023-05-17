import styled from "styled-components"
import { ItemButton } from '../../UI/Item/ItemButton'
import { ItemButton2 } from '../../UI/Item/ItemButton2'
import { emailChangeState } from '../../../stores/atoms'
import { useRecoilState } from "recoil"
export default function ChangeEmail(){
  const [, setOpenEmail]= useRecoilState(emailChangeState) 
  const changeEmail = ()=>{
    setOpenEmail(false)
  }
  const dummydata=[
    {
      userEmail:'wnen@naver.com'
    }
  ]
  return (
    <Wrapper>
      <TopTitle>새로운 이메일을 입력해주세요</TopTitle>
      <SubTitle>현재 등록된 이메일은 {`${dummydata[0].userEmail}`}이에요</SubTitle>      
      <PNInput placeholder='이메일 주소'/>
      <WarningM>
        꼭 확인해주세요!<FontZone>기존에 본인인증한 명의자 정보와 일치하지 않으면 땅땅마켓을 사용할 수 없어요.</FontZone>
      </WarningM>      
      <PNCButton>
        <StyledButton2 onClick={changeEmail}>
          <ItemButton2/>  
        </StyledButton2>
        <StyledButton>
          <ItemButton/>  
        </StyledButton>
      </PNCButton>              
    </Wrapper>
  )
}

const Wrapper = styled.div`  
  margin: 0 1rem;      
  @media only screen and (min-width:768px){    
    margin-left: 2rem;
  }
`
const TopTitle = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 20px;
  font-weight: bold;
  @media only screen and (min-width:768px){
    margin-bottom: 2rem;
    font-size: 22px;
    white-space: nowrap;
  }
`
const SubTitle = styled.div`
  margin-bottom: 2rem;
  font-size: 15px;
  color: #8b8c90;
  @media only screen and (min-width:768px){
    font-size: 17px;
    white-space: nowrap;
  }
`
const PNInput = styled.input`
  width: 23.5rem;
  height: 3.5rem;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  padding-left: 1rem;  
  margin-bottom: 1.75rem;
  @media only screen and (min-width:768px){
    
    height: 3.5rem;
  }
`
const WarningM = styled.div`
  width: 23.5rem;
  height: 7.75rem;
  background: #f2f3f7;
  border-radius: 10px;
  padding-left: 1rem;
  padding-top: 1rem;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
`

const FontZone = styled.div`
  font-weight: 400;
  padding-bottom: 3rem;
`

const PNCButton = styled.div`
  height: 4rem;
  width: 100%;
  border: 0;      
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10.75rem;
  background-color: white;
  >div{
    width: 11rem;
    height: 3rem;
    cursor: pointer;    
  }
  button{
    margin-right: 2rem;
  }  
`
const  StyledButton2 = styled.button`
  background-color: #F2F3F7;  
  color: black;
  border-radius: 10px;  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11rem;
  height: 3rem;
  cursor: pointer;    
  border: 0;  
`;
const StyledButton = styled.button`
  background-color: #4636FC;  
  color: black;  
  border-radius: 10px;  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11rem;
  height: 3rem;
  cursor: pointer;    
  border: 0;  
`