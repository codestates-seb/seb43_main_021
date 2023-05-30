import styled from 'styled-components';
import Item from '../UI/Item/Item';
// import { useParams } from 'react-router-dom';
// import { useQuery } from 'react-query';
// import axios from 'axios';
import useGetItemList from '../../hooks/useGetItemList';
import Loading from '../UI/Loading/Loading';
export default function BiddingItem(){
  const memberId=localStorage.getItem("memberId"); 
  const { data, isLoading, isError, error } = useGetItemList();
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  
  const biddingItems = data
    ? data.filter((item) => item.auctionStatus === 'AUCTION_BIDDING'&&item.members[0].memberId.toString()!==memberId&& item.bidItems.length > 0 && item.bidItems.some((bidItem) => bidItem.member.memberId.toString() === memberId))
    : [];    

  // data.filter((item) => item.biddings)
  // console.log(data.members[0].memberId.toString!==memberId)
  return (
    <Wrapper>      
      {biddingItems.length === 0 ? (
          <BiddingDisplay>
          <ContentArea>입찰중인 게시글이 없어요.</ContentArea>
          </BiddingDisplay>
        ) : (
          <BiddingItemDisplay>
            <Item item={biddingItems} />            
          </BiddingItemDisplay>
        )}    
    </Wrapper>
  )
}
const Wrapper = styled.div``

const BiddingDisplay = styled.div`
  width: 100%;
  height: 39rem;
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f3f7;    
  @media only screen and (min-width:768px){    
    height: 65rem;
  }
`
const BiddingItemDisplay = styled.div`
  margin-top: 0.75rem;
  background-color: white;
`
const ContentArea =  styled.div`
  font-size: 20px;
  color: #d1d3d7;
  @media only screen and (min-width:768px){
    font-size: 25px;
  }
`