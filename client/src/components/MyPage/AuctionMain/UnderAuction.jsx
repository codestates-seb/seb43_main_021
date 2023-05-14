import styled from 'styled-components'

export default function UnderAuction(){
  return (
    <Wrapper>
      <AuctionDisplay>
        <ContentArea>판매중인 게시글이 없어요.</ContentArea>
      </AuctionDisplay>
    </Wrapper>
  )
}
const Wrapper = styled.div`
`
const AuctionDisplay = styled.div`
  width: 100%;
  height: 39rem;
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f3f7;  
`
const ContentArea =  styled.div`
  font-size: 20px;
  color: #d1d3d7;
`