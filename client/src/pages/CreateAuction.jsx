import React from "react";
import styled from "styled-components";
import { IoIosCamera } from "react-icons/io";
import { BsChevronLeft } from "react-icons/bs";

const CreateAuction = () => {
  return (
    <Wrapper>
      <Header>
        <BsChevronLeft /> {/* onClick={() => navigate{"/Home"}} 이벤트 넣기 */}
        <HeaderTitle>
          <h2>경매 등록하기</h2>
        </HeaderTitle>
        <CreateBtn><h2>완료</h2></CreateBtn> {/* h2에 onClick={} 이벤트 넣기 */}
      </Header>
      <Container>
      <Body>
        <AddImages>
          <label>
            <IoIosCamera className="icon" />
          </label>
          <input type="file" id="file" />
          {/* 이미지 등록시 저장되는 곳 */}
          {/* <img src={imgs} alt="이미지 미리보기" */}
        </AddImages>
        <Title>
          <input placeholder="제목" />
        </Title>
        <TextArea>
          <textarea placeholder="경매 등록할 게시글의 내용을 입력해주세요." />
        </TextArea>
        <AuctionPeriod>
          <h2>경매 기간</h2>
          <h4>※ 경매 기간은 최소 1일부터 30일까지 설정할 수 있어요.</h4>
          <PeriodData>
            <TensData>
            <input type="number" min="0" max="3"></input>
            </TensData>
            <UnitsData>
            <input type="number" min="0" max="9"></input>
            </UnitsData>
            <h2>일</h2>
          </PeriodData>
        </AuctionPeriod>
      </Body>
      </Container>
    </Wrapper>
  )
}

export default CreateAuction;

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
    padding: 2rem 1.5rem;
    height: 5.6rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    position: relative;
    border-color: hsl(210, 8%, 90%);
    border-bottom-style: solid;
    border-bottom-width: 1px;
`;

const HeaderTitle = styled.div`
  padding-left: 1.5rem;
  h2 {
    font-size: 15px;
    font-weight: bold;
  }
`;

const CreateBtn = styled.div`
  margin-left: auto;
  h2 {
    color: #ff7e36;
    font-size: 15px;
  }
`;

const Container = styled.div`

`;

const Body = styled.div`
  padding: 1rem;
`;

const AddImages = styled.div`
  padding: 0.5rem 1rem 1.5rem 0;
  border-bottom: 1px solid #F3F3F3;

  .icon {
    font-size: 35px;
  }

  label {
    cursor: pointer;
  }

  input[type="file"] {
    display: none;
  }
`;

  const Title = styled.div`
  padding: 2rem 0rem;
  border-bottom: 1px solid #F3F3F3;
  outline: none;
  input {
    border: none;
    outline: none;
  }

  input::placeholder {
    color: #D2D2D4;
  }
  `;

  const TextArea = styled.div`
  padding: 2.2rem 0 1.5rem 0;
  border-bottom: 1px solid #F3F3F3;

  textarea {
    width: 100%;
    height: 12rem;
    box-sizing: border-box;
    border: 2px solid #000000;
    border-radius: 5px;
    font-size: 16px;
    resize: none;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
  }

  textarea::placeholder {
    color: #D2D2D4;
  }
  `;

  const AuctionPeriod = styled.div`
    h2 {
      padding-top: 1.2rem;
      padding-bottom: 0.8rem;
    }
    h4 {
      padding-left: 1rem;
      color: #D2D2D4;
    }
  `;

  const PeriodData = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    h2 {
      padding-top: 3rem;
      font-size: 40px;
    }
  `;

  const TensData = styled.div`
    padding-top: 3rem;
    padding-right: 1rem;

    input {
      border-bottom: teal 1px solid;
      border-right: medium none;
      border-left: medium none;
      border-top: medium none;
      outline: none;
      text-align: center;
      width: 4.4rem;
      height: 4rem;
      font-size: 50px;
    }
  `;

  const UnitsData = styled.div`
    padding-top: 3rem;
    padding-right: 1rem;
    input {
      border-bottom: teal 1px solid;
      border-right: medium none;
      border-left: medium none;
      border-top: medium none;
      outline: none;
      text-align: center;
      width: 4.4rem;
      height: 4rem;
      font-size: 50px;
    }
  `;