import styled from 'styled-components';
// import useGetBiddingItem from '../../hooks/useGetBiddingItem';
// import Item from '../UI/Item/Item';

export default function BiddingItem(){
  // const { data, isLoading, isError, error } = useGetBiddingItem();
  // if (isLoading) {
  //   return <div>홈 로딩 중</div>;
  // }

  // if (isError) {
  //   return <div>Error: {error.message}</div>;
  // }
  // const biddingItems = data.filter((item)=>item.biddings[0])
  return (
    <Wrapper>      
      {/* {biddingItems.length === 0 ? (
          <BiddingDisplay>
          <ContentArea>경매중인 게시글이 없어요.</ContentArea>
          </BiddingDisplay>
        ) : (
          <BiddingItemDisplay>
            <Item item={biddingItems} />            
          </BiddingItemDisplay>
        )}     */}
    </Wrapper>
  )
}
const Wrapper = styled.div``

// const BiddingDisplay = styled.div`
//   width: 100%;
//   height: 39rem;
//   margin-top: 0.75rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #f2f3f7;    
//   @media only screen and (min-width:768px){
//     margin-top: 1.75rem;
//     height: 65rem;
//   }
// `
// const BiddingItemDisplay = styled.div`
//   margin-top: 0.75rem;
//   background-color: white;
//   @media only screen and (min-width: 768px) {
//     margin-top: 2rem;    
//   }
// `
// const ContentArea =  styled.div`
//   font-size: 20px;
//   color: #d1d3d7;
//   @media only screen and (min-width:768px){
//     font-size: 25px;
//   }
// `