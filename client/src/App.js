import Images from "./components/UI/Item/Images";
import styled from "styled-components";

const App = () => {
  return (
    <ItemContainer>
      <ItemBox>
      <Images />
      <ItemDesc>
        <h2>LG 제습기 팝니다.</h2>
        <div>250,000원</div>
        <p>제주 제주시 연동</p>
      </ItemDesc>
      </ItemBox>
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
width: calc(25% - 44px);
margin-right: 44px;
margin-bottom: 56px;
`;

const ItemBox = styled.div`
text-decoration: none;
color: #212529;
`;

const ItemDesc = styled.div`
margin-top: 12px;

div {
 font-size: 15px;
 font-weight: 700;
 line-height: 1.5;
 margin-bottom: 4px;
}

p {
  font-size: 16px;
  letter-spacing: -0.02px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  line-height: 1.5;
  font-weight: normal;
}
`;

export default App;
