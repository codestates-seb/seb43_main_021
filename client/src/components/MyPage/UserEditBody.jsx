import styled from "styled-components"
import { VscAccount } from "react-icons/vsc";
export default function UserEditBody({nickname}){

  return(
    <Wrapper>
      <ProfileContainer><VscAccount/></ProfileContainer>
      <NickNameContainer>
        닉네임
      </NickNameContainer>
      <NickNameInput placeholder="nickname" defaultValue={nickname}></NickNameInput>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.75rem 0;
  >svg{
    width: 6.75rem;
    height: 6.75rem;
  }
  @media only screen and (min-width:768px){    
    margin: 3rem 0;
    svg{
      width: 9rem;
      height: 9rem;
    }
  }
`
const NickNameContainer = styled.div`
  font-size: 18px;
  margin: 0 0 1rem 1rem;
  font-weight: bold;

`
const NickNameInput = styled.input`
  margin-left: 1rem;
  margin-right: 1rem;
  width: 97%;
  height: 3.5rem; 
  font-size: 22px;
  padding-left: 1rem;
  ::placeholder {
    margin-left: 1rem;
    font-size: 22px;
    
  }
`;