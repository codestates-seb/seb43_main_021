import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosCamera } from "react-icons/io";
import { SlClose } from "react-icons/sl"
import { BsChevronLeft } from "react-icons/bs";

const CreateAuction = () => {

  const navigate = useNavigate();

  const [imageSrcList, setImeageSrcList] = useState([]); // 이미지 등록
  const [isImageUploaded, setIsImageUploaded] = useState(false); // 색상을 바꾸기 위한 상태 추가
  const [auctionPeriod, setAuctionPeriod] = useState('');

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [showTitleWarning, setShowTitleWarning] = useState(false);
  const [showTextWarning, setShowTextWarning] = useState(false);
  const [showPeriodWarning, setShowPeriodWarning] = useState(false);

  const onUpload = (event) => {
    if (imageSrcList.length >= 10) {
      return;
    }
    const files = event.target.files;
    const newImageSrcList = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newImageSrcList.push(URL.createObjectURL(file));
    }

    setImeageSrcList((prevList) => [...prevList, ...newImageSrcList]);
    setIsImageUploaded(true);
  };

  const onDeleteImage = (index) => {
    setImeageSrcList((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 1);
      return newList;
    });
  };

  const enterNumbersOnly = (event) => {
    let input = event.target.value;
    input = input.replace(/\D/g, '');

    if (input !== '') {
      const parsedInput = parseInt(input, 10);
      if (parsedInput >= 1 && parsedInput <= 30) {
        setAuctionPeriod(parsedInput.toString());
        setShowPeriodWarning(false);
      } else {
        setAuctionPeriod('');
      }
    } else {
      setAuctionPeriod('');
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

  const handleCreateBtnClick = () => {
    if (title === '') {
      setShowTitleWarning(true);
    }
  
    if (text === '') {
      setShowTextWarning(true);
    }
  
    if (auctionPeriod === '') {
      setShowPeriodWarning(true);
    }
  
    if (title !== '' && text !== '' && auctionPeriod !== '') {
    }
  };

  return (
    <Wrapper>
      <Header>
        <BackButton onClick={() => navigate('/')} />
        <HeaderTitle>
          <h2>경매 등록하기</h2>
        </HeaderTitle>
        <CreateBtn onClick={handleCreateBtnClick}><h2>완료</h2></CreateBtn> {/* h2에 onClick={} 이벤트 넣기 */}
      </Header>
      <Container>
      <Body>
        <AddImages>
          <div>
            <label htmlFor="file">
              <IoIosCamera />
              <h5>
                <span style={{color: isImageUploaded && imageSrcList.length> 0 ? 'red' : 'inherit'}}>{imageSrcList.length}</span>/10</h5>
            </label>
            <input type="file" id="file" onChange={onUpload} multiple accept="image/*" disabled={imageSrcList.length >= 10} />
          </div>
          <ImageList className="image-preview">
            {imageSrcList.map((src, index) => (
              <ImageWrapper key={index}>
                <img src={src} alt={"이미지 미리보기"} />
                <DeleteButton onClick={() => onDeleteImage(index)}>
                  <SlClose />
                </DeleteButton>
              </ImageWrapper>
          ))}
          </ImageList>
        </AddImages>
        <Title>
          <input placeholder="제목" value={title} onChange={handleTitleChange} />
          {showTitleWarning && <Warning>제목을 입력해주세요.</Warning>}
        </Title>
        <TextArea>
          <textarea placeholder="경매 등록할 게시글의 내용을 입력해주세요." value={text} onChange={handleTextChange} />
          {showTextWarning && <Warning>게시글 내용을 입력해주세요.</Warning>}
        </TextArea>
        <AuctionPeriod>
          <h2>경매 기간</h2>
          <h4>※ 경매 기간은 최소 1일부터 30일까지 설정할 수 있어요.</h4>
          <PeriodData>
            <PeriodInput>
              <input type="text" value={auctionPeriod} onChange={enterNumbersOnly} />
              {showPeriodWarning && <Warning>경매 기간을 입력해주세요.</Warning>}
            </PeriodInput>
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

const Container = styled.div`
`;

const Body = styled.div`
  padding: 1rem;
`;

const AddImages = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 1.5rem 0;
  border-bottom: 1px solid #F3F3F3;

  > div {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 4.8rem;
    height: 4.8rem;
    background: #F2F3F7;
    border-radius: 5%;
    cursor: pointer;

    > svg {
        width: 24px;
        height: 24px;
      }
  }

  input[type="file"] {
      display: none;
  }

  img {
      width: 4.8rem;
      height: 4.7rem;
      margin-left: 1rem;
      border-radius: 5%;
  }
`;

const ImageList = styled.div`
  display: flex;
  overflow-x: auto;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: red;
  font-weight: bold;
  cursor: pointer;
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
  align-items: flex-end;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  h2 {
    font-size: 20px;
    margin: 0;
    padding-right: 0.5rem;
  }
`;

const PeriodInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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

const Warning = styled.div`
  color: red;
  font-size: 13px;
  text-align: center;
  margin-top: 0.5rem;
`;