import styled from "styled-components";
import useGetItemList from "../../../hooks/useGetItemList";
import Item from "../../UI/Item/Item";
import { Link } from "react-router-dom";
import Loading from "../../UI/Loading/Loading";
export default function UnderAuction() {
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

  const completedAuctions = data
    ? data.filter((item) => !item.auctionState)    
    : [];
    console.log(completedAuctions.auctionState)
  return (
    <Wrapper>
      {completedAuctions.length === 0 ? (
        <AuctionDisplay>
          <ContentArea>경매중인 게시글이 없어요.</ContentArea>
        </AuctionDisplay>
      ) : (
        <AuctionItemDisplay>
          <Item item={completedAuctions} />
          <LinkContainer>
            <CustomLink to="/createauction"></CustomLink>
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
  background-color: var(--white2-color);
  @media only screen and (min-width: 768px) {
    margin-top: 1.75rem;
    height: 65rem;
  }
  @media only screen and (min-height: 897px) {
    height: 65rem;
  }
`;
const AuctionItemDisplay = styled.div`
  margin-top: 0.75rem;
  background-color: var(--white1-color);
  @media only screen and (min-width: 768px) {
    margin-top: 2rem;
  }
`;

const ContentArea = styled.div`
  font-size: 20px;
  color: var(--white4-color);
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
