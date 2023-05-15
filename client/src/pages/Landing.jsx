import React from "react";
import { styled } from "styled-components";
import Gnb from "../components/UI/Gnb/Gnb";
import ItemImage from "../components/UI/ItemImage/ItemImage";
import img20 from "../assets/images/img20.png";
import { useNavigate } from "react-router-dom";
import img21 from "../assets/images/img21.png";
import img22 from "../assets/images/img22.png";

///// 로그인 / 회원가입 버튼 가져와서 구현하기

const Landing = () => {
  const navigate = useNavigate();
  const img = [img20, img21, img22];

  return (
    <Wrapper>
      <TitelContainer>이고 원래 니꼬내꼬자나</TitelContainer>
      <ImageContainer>
        <LandingImage>
          <ItemImage images={img} />
        </LandingImage>
      </ImageContainer>

      <LoginBtn>
        <Button
          onClick={() => {
            navigate("/login");
          }}
          color="blue"
        >
          로그인
        </Button>

        <Button>게스트 로그인</Button>
      </LoginBtn>
      <BottomText>
        <Text
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </Text>
        <Line />
        <Text
          onClick={() => {
            navigate("/main");
          }}
        >
          둘러보기
        </Text>
      </BottomText>
      <GnbContainer>
        <Gnb />
      </GnbContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15%;
`;

const TitelContainer = styled.div`
  margin: 6% 0;
  width: 100%;
  text-align: center;
  font-size: 7lvw;
`;

const LandingImage = styled.div`
  width: 100%;
  position: relative;
  padding-top: 125%;
`;

const ImageContainer = styled.div`
  margin: 0 1rem;
`;

const LoginBtn = styled.div`
  padding-top: 2rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.color === "blue" ? "#5170fd" : "#4636fc"};
  color: #ffffff;
  border: none;
  width: 22rem;
  height: 2.8rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: ${(props) => (props.color === "blue" ? "0.5rem" : "")};

  @media screen and (min-width: 768px) {
    width: 32rem;
    font-size: 1.2rem;
    font-size: 1.2rem;
  }
`;

const BottomText = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

const Text = styled.div`
  color: #6d6d6d;
  padding: 0 20px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 0 30px;
    font-size: 1.2rem;
  }
`;

const Line = styled.div`
  border-right: 1px solid #cccccc;
  height: 30px;
`;

const GnbContainer = styled.div`
  bottom: 0;
  width: 100%;
  position: fixed;
  z-index: 10;
`;

export default Landing;
