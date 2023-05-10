import styled from "styled-components"
import { Link } from 'react-router-dom';
export default function UserEditBody(){
  
  return(
    <Wrapper>
      <Container>
        <Title>계정 정보</Title>
        <BottomContainer>
          이메일<EmailLink to='/email'>등록</EmailLink>                                 
        </BottomContainer>
        <BottomContainer>
          휴대폰번호<PhoneNumberLink to='/phonenumber'>변경</PhoneNumberLink>
        </BottomContainer>
        <Phone>010 3020 4020</Phone>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin:1.75rem 1rem ;
  height: 13.75rem;
  
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
const EmailLink = styled(Link)`
  text-decoration: none;
  padding-right: 2rem;
  font-size: 19px;
`
const PhoneNumberLink = styled(Link)`
  text-decoration: none;
  padding-right: 2rem;
  font-size: 19px;
`
const Phone = styled.div`
  margin-top: 1rem;
  font-size: 15px;
  color: #8c9094;
`