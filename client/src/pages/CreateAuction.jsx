import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import AddImage from "../components/CreateItem/AddImage";
import ItemBody from "../components/CreateItem/ItemBody";
import Location from "../components/CreateItem/Location";
import Period from "../components/CreateItem/Period";
import axios from "axios";

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

    // 이미지용 코드
    /*const uploadImages = async () => {
      const imageUrls = [];

      try {
        const formData = new FormData();

        for (let i = 0; i < imageSrcList.length; i++) {
          const imageFile = imageSrcList[i];
          console.log("이미지 파일:", imageFile);
          formData.append("multipartFile", imageFile);
        }
  
        await axios.post (
          `${process.env.REACT_APP_API_URL}/images/upload/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        ).then (res =>{
          imageUrls.push(res.data.imageUrl);

        });  
      } catch (error) {
        console.log("이미지 업로드 실패:", error);
      }

      return imageUrls;
    }; */

    if (
      title !== "" &&
      text !== "" &&
      auctionPeriod !== "" &&
      selectLocation !== "지역 설정"
    ) {
      try {
        //const imageUrls = await uploadImages();

        const data = {
          name: title,
          period: parseInt(auctionPeriod),
          content: text,
          location: selectLocation,
          imageUrlList: imageSrcList, // imageUrls, imageSrcList
        };

        console.log("전송 데이터:", data);

        axios
          .post(`${process.env.REACT_APP_API_URL}/auction_items`, data, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((res) => {
            console.log("전송 성공:", res.data);
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
        <button onClick={handleCreateBtnClick}>등록하기</button>
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
