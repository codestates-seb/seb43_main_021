import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import AddImage from "../components/CreateItem/AddImage";
import ItemBody from "../components/CreateItem/ItemBody";
import Location from "../components/CreateItem/Location";
import Period from "../components/CreateItem/Period";

const CreateAuction = () => {
  const navigate = useNavigate();

  const [auctionPeriod, setAuctionPeriod] = useState("");

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [showTitleWarning, setShowTitleWarning] = useState(false);
  const [showTextWarning, setShowTextWarning] = useState(false);
  const [showPeriodWarning, setShowPeriodWarning] = useState(false);

  const enterNumbersOnly = (event) => {
    let input = event.target.value;
    input = input.replace(/\D/g, "");

    if (input !== '') {
      let parsedInput = parseInt(input, 10);
      if (parsedInput < 1) {
        parsedInput = 1;
      } else if (parsedInput > 30) {
        parsedInput = 30;
      }
      setAuctionPeriod(parsedInput.toString());
      setShowPeriodWarning(false);
    } else {
      setAuctionPeriod('');
    }
  };

    /* if (input !== '') {
      const parsedInput = parseInt(input, 10);
      if (parsedInput >= 1 && parsedInput <= 30) {
        setAuctionPeriod(parsedInput.toString());
        setShowPeriodWarning(false);
      } else {
        setAuctionPeriod("");
      }
    } else {
      setAuctionPeriod('');
      }
  }; */

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setShowTitleWarning(false);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
    setShowTextWarning(false);
  };

  const handleCreateBtnClick = () => {
    if (title === "") {
      setShowTitleWarning(true);
    }

    if (text === "") {
      setShowTextWarning(true);
    }

    if (auctionPeriod === "") {
      setShowPeriodWarning(true);
    }

    if (title !== "" && text !== "" && auctionPeriod !== "") {
      // 서버로 데이터 전송하는 로직 공간

      navigate("/");
    }
  };

  return (
    <Wrapper>
      <Header>
        <BackButton onClick={() => navigate("/")} />
        <HeaderTitle>
          <h2>경매 등록하기</h2>
        </HeaderTitle>
        <CreateBtn onClick={handleCreateBtnClick}>
          <h2>완료</h2>
        </CreateBtn>{" "}
        {/* h2에 onClick={} 이벤트 넣기 */}
      </Header>
      <Container>
      <Body>
        <AddImage />
        <ItemBody title={title} text={text} showTitleWarning={showTitleWarning} showTextWarning={showTextWarning} handleTitleChange={handleTitleChange} handleTextChange={handleTextChange} />
        <Location />
        <Period auctionPeriod={auctionPeriod} enterNumbersOnly={enterNumbersOnly} showPeriodWarning={showPeriodWarning} />
      </Body>
      </Container>
    </Wrapper>
  );
};

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

const BackButton = styled(BsChevronLeft)`
  cursor: pointer;
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
  cursor: pointer;
  h2 {
    color: #ff7e36;
    font-size: 15px;
  }
`;

const Container = styled.div``;

const Body = styled.div`
  padding: 1rem;
`;
