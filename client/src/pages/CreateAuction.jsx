import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import AddImage from "../components/CreateItem/AddImage";
import ItemBody from "../components/CreateItem/ItemBody";
import Location from "../components/CreateItem/Location";
import Period from "../components/CreateItem/Period";
import axios from "axios";
import { useRecoilState } from "recoil";
import { reviseItem } from "../stores/atoms";

const CreateAuction = () => {
  const navigate = useNavigate();

  const [selectLocation, setSelectLocation] = useState("지역 설정");
  const [auctionPeriod, setAuctionPeriod] = useState("");

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [showTitleWarning, setShowTitleWarning] = useState(false);
  const [showTextWarning, setShowTextWarning] = useState(false);
  const [showPeriodWarning, setShowPeriodWarning] = useState(false);
  const [showLocationWarning, setShowLocationWarning] = useState(false);
  const [imageSrcList, setImageSrcList] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const memberId = localStorage.getItem("memberId");
  const [reItem, setReItem] = useRecoilState(reviseItem);

  useEffect(() => {
    if (!memberId) {
      alert("로그인 후 경매를 등록할 수 있습니다.");
      navigate("/login");
    } else if (reItem.length !== 0) {
      setTitle(reItem.name);
      setText(reItem.content);
      setAuctionPeriod(reItem.period);
      setSelectLocation(reItem.location);
    }
  }, [memberId, navigate]);

  const enterNumbersOnly = (event) => {
    let input = event.target.value;
    input = input.replace(/\D/g, "");

    if (input !== "") {
      let parsedInput = parseInt(input, 10);
      if (parsedInput < 1) {
        parsedInput = 1;
      } else if (parsedInput > 30) {
        parsedInput = 30;
      }
      setAuctionPeriod(parsedInput.toString());
      setShowPeriodWarning(false);
    } else {
      setAuctionPeriod("");
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setShowTitleWarning(false);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
    setShowTextWarning(false);
  };

  const titleList = [
    "지역 설정",
    "강동구",
    "노원구",
    "중랑구",
    "광진구",
    "마포구",
  ];

  const LocationChange = (location) => {
    setSelectLocation(location);
    if (location !== "지역 설정") {
      setShowLocationWarning(false);
    }
  };

  const handleCreateBtnClick = async () => {
    if (title === "") {
      setShowTitleWarning(true);
    }

    if (text === "") {
      setShowTextWarning(true);
    }

    if (auctionPeriod === "") {
      setShowPeriodWarning(true);
    }

    if (selectLocation === "지역 설정") {
      setShowLocationWarning(true);
    }

    if (titleList[0] === selectLocation) {
      setShowLocationWarning(true);
    } else {
      setShowLocationWarning(false);
    }

    if (
      title !== "" &&
      text !== "" &&
      auctionPeriod !== "" &&
      selectLocation !== "지역 설정"
    ) {
      try {
        const data = {
          name: title,
          period: parseInt(auctionPeriod),
          content: text,
          location: selectLocation,
          imageUrlList: imageSrcList,
        };

        axios
          .post(`${process.env.REACT_APP_API_URL}/auction_items`, data, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((res) => {
            navigate("/main");
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleReviseBtnClick = async () => {
    if (title === "") {
      setShowTitleWarning(true);
    }

    if (text === "") {
      setShowTextWarning(true);
    }

    if (auctionPeriod === "") {
      setShowPeriodWarning(true);
    }

    if (selectLocation === "지역 설정") {
      setShowLocationWarning(true);
    }

    if (titleList[0] === selectLocation) {
      setShowLocationWarning(true);
    } else {
      setShowLocationWarning(false);
    }

    if (
      title !== "" &&
      text !== "" &&
      auctionPeriod !== "" &&
      selectLocation !== "지역 설정"
    ) {
      try {
        const data = {
          name: title,
          period: parseInt(auctionPeriod),
          content: text,
          location: selectLocation,
          imageUrlList: imageSrcList,
        };

        axios
          .patch(
            `${process.env.REACT_APP_API_URL}/auction_items/${reItem.auctionItemId}`,
            data,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((res) => {
            navigate("/main");
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Wrapper>
      <Header>
        <BackButton onClick={() => navigate("/main")} />
        <HeaderTitle>
          <h2>경매 등록하기</h2>
        </HeaderTitle>
      </Header>
      <Container>
        <Body>
          <AddImage
            imageSrcList={imageSrcList}
            setImageSrcList={setImageSrcList}
          />
          <ItemBody
            title={title}
            text={text}
            showTitleWarning={showTitleWarning}
            showTextWarning={showTextWarning}
            handleTitleChange={handleTitleChange}
            handleTextChange={handleTextChange}
          />
          <Location
            titleList={titleList}
            showLocationWarning={showLocationWarning}
            selectLocation={selectLocation}
            setSelectLocation={LocationChange}
            setShowLocationWarning={setShowLocationWarning}
          />
          <Period
            auctionPeriod={auctionPeriod}
            enterNumbersOnly={enterNumbersOnly}
            showPeriodWarning={showPeriodWarning}
          />
        </Body>
      </Container>
      <CreateBtn>
        {reItem.length === 0 ? (
          <button onClick={handleCreateBtnClick}>등록하기</button>
        ) : (
          <button onClick={handleReviseBtnClick}>수정하기</button>
        )}
      </CreateBtn>
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
  justify-content: left;
  width: 100%;
  margin: 0 auto;
  position: relative;
  border-color: var(--white3-color);
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  button {
    background-color: var(--purple1-color);
    color: var(--white1-color);
    border: none;
    width: 20rem;
    height: 2.8rem;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Container = styled.div``;

const Body = styled.div`
  padding: 1rem;
`;
