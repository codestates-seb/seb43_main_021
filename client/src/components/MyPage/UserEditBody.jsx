import styled from "styled-components"
import { 
  changePNState,
  emailChangeState
} from '../../stores/atoms'
import { useRecoilState } from "recoil"
export default function UserEditBody(){
  const [onDisplay, setOnDisplay] = useRecoilState(changePNState)
  const [openEmail, setOpenEmail]= useRecoilState(emailChangeState) 

  const changeEmail = ()=>{  
    if(onDisplay===true){
      setOpenEmail(!openEmail)         
      setOnDisplay(!onDisplay)   
    }else{
      setOpenEmail(!openEmail)         
    }
  }
  const changePhoneNumber=()=>{
    if(openEmail===true){
      setOnDisplay(!onDisplay)   
      setOpenEmail(!openEmail)         
    }else{
      setOnDisplay(!onDisplay)         
    }   
  }
  return(
    <Wrapper>
      <Container>
        <Title>계정 정보</Title>
        <BottomContainer>
          이메일<StyledButton onClick={changeEmail}>변경</StyledButton>                                 
        </BottomContainer>
        <BottomContainer>
          휴대폰번호<StyledButton onClick={changePhoneNumber}>변경</StyledButton>
        </BottomContainer>
        <Phone>010 3020 4020</Phone>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding:1.75rem 1rem ;
  height: 13.75rem;  
  border-bottom: 1px solid #f6f6f8;
`

const Container = styled.div`  
  width: 100%;
  height: 100%;
`
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  font-size: 18px;
`
const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
`
const StyledButton = styled.button`    
  font-size: 19px;
  background: white;
  border: 0;
  color: #4636fc;
`
const Phone = styled.div`
  margin-top: 1rem;
  font-size: 15px;
  color: #8c9094;    
`