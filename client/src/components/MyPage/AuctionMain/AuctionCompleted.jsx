import styled from 'styled-components';
import useGetItemList from '../../../hooks/useGetItemList';
import Item from '../../UI/Item/Item';
import { Link } from 'react-router-dom';


export default function AuctionCompleted() {
  const { data, isLoading, isError, error } = useGetItemList();
  if (isLoading) {
    return <div>test 로딩 중</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const completedAuctions =data? data.filter((item) => item.auctionState):[];
  console.log(data)
  return (
    <Wrapper>
        {completedAuctions.length === 0 ? (
          <AuctionDisplay>
          <ContentArea>거래 완료된 게시글이 없어요.</ContentArea>
          </AuctionDisplay>
        ) : (
          <AuctionItemDisplay>
            <Item item={completedAuctions} />
            <LinkContainer>
              <CustomLink to='/createauction'>                
              </CustomLink>
            </LinkContainer>
          </AuctionItemDisplay>
        )}    
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const AuctionDisplay = styled.div`
  width: 100%;
  height: 39rem;
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f3f7;
  @media only screen and (min-width: 768px) {
    margin-top: 1.75rem;
    height: 65rem;
  }
  @media only screen and (min-height: 897px){
    height: 65rem;
  }
`;
const AuctionItemDisplay = styled.div`
  margin-top: 0.75rem;
  background-color: white;
  @media only screen and (min-width: 768px) {
    margin-top: 2rem;    
  }
`

const ContentArea = styled.div`
  font-size: 20px;
  color: #d1d3d7;
  @media only screen and (min-width: 768px) {
    font-size: 25px;
  }
`;



const LinkContainer = styled.div`
  position: fixed;
  bottom: 90px;
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: flex-end;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;