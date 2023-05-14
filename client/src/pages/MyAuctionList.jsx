import styled from "styled-components"
import MyAuction from '../components/MyPage/MyAuction'
import { auctionState } from '../stores/atoms'
import { useRecoilState } from 'recoil'
import UnderAuction from '../components/MyPage/AuctionMain/UnderAuction'
import AuctionCompleted from '../components/MyPage/AuctionMain/AuctionCompleted'
export default function MyAuctionList() {
  const [auction,] = useRecoilState(auctionState)
  return (
    <Wrapper>
      <MyAuction/>
        {auction&&<UnderAuction/>}
        {!auction&&<AuctionCompleted/>}
    </Wrapper>
  )  
};

const Wrapper = styled.div`
  width: 100%;    
  height: 100%;
`