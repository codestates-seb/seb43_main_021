import styled from "styled-components"
import UserEditHeader from '../components/UI/Header/UserEditHeader'
export default function MyAuctionList() {
  return (
    <Wrapper>
      <Container>
        <UserEditHeader title={'경매내역'}/>
      </Container>
    </Wrapper>
  )  
};

const Wrapper = styled.div`
  width: 100%;  
`

const Container = styled.div`
  height: 16.5rem;
`