import React from "react";
import { styled } from "styled-components";
import Gnb from "../components/UI/Gnb/Gnb";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/logo/logo1.png";
import logo3 from "../assets/logo/logo3.png";

import ItemLottie from "../components/Landing/ItemLottie";
import Tresh from "../components/Landing/Tresh";
import Complete from "../components/Landing/Complete";
import Bidding from "../components/Landing/Bidding";

///// 로그인 / 회원가입 버튼 가져와서 구현하기

const Landing = () => {
  const navigate = useNavigate();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Flexible>
      <Wrapper>
        <TitelContainer>
          <LogoContainer>
            <Logo4 src={logo1} onClick={() => scrollTop()} />
          </LogoContainer>
        </TitelContainer>
        <LandingContent>
          <Title>
            <H2>안 쓰는 물건, 버리지 말고</H2>
            <H1>'니꺼내꺼' 하자!</H1>
          </Title>
        </LandingContent>
        <ItemLottieContainer>
          <ItemLottie />
        </ItemLottieContainer>
        <H3Container>
          <H3>더 이상 가치 있는 물건들이 버려지지 않도록,</H3>
          <H3>'니꺼내꺼'는 경매로 서로의 가치를 교환합니다.</H3>
        </H3Container>

        <TreshContainer>
          <Tresh />
        </TreshContainer>
        <H4Container>
          <H4>이제 당신의 가치를 경매하세요!</H4>
        </H4Container>
        <Bidding />
        <MainLogoContainer>
          <Logo3 src={logo3} />
          <Complete />
        </MainLogoContainer>

        <LoginBtn>
          <Button
            onClick={() => {
              navigate("/main");
            }}
            color="blue"
          >
            둘러보기
          </Button>

          <Button
            onClick={() => {
              window.open("https://github.com/codestates-seb/seb43_main_021");
            }}
          >
            만든 사람들
          </Button>
        </LoginBtn>
        <BottomText></BottomText>
        <GnbContainer>
          <Gnb />
        </GnbContainer>
      </Wrapper>
    </Flexible>
  );
};

const Flexible = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white1-color);
`;
const Wrapper = styled.div`
  width: 416px;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  background-color: var(--white1-color);
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-bottom: 0;
  }
`;

const TitelContainer = styled.div`
  max-width: 416px;
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-between;
  background-color: var(--white1-color);
`;
const LogoContainer = styled.div`
  margin: 0.5rem;
  width: 110px;
  /* height: 200px; */
`;

const Logo4 = styled.img`
  /* max-width: 250px; */
  /* max-height: 100px; */
  width: 100%;
  height: auto;
  cursor: pointer;
  z-index: 10;
`;

const Logo3 = styled.img`
  width: 100%;
  height: auto;
  /* margin-bottom: -10%; */

  @media screen and (min-width: 768px) {
    width: 75%;
  }
`;

const LandingContent = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  margin-top: 36%;

  @media screen and (min-width: 768px) {
    margin-top: 19%;
  }
`;

const ItemLottieContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 3rem;
  @media screen and (min-width: 768px) {
    font-size: 4.5rem;
  }
`;
const H2 = styled.h2`
  font-weight: 400;
  margin-bottom: 0.5rem;
  font-size: 2rem;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const H3 = styled.h3`
  font-weight: 400;
  font-size: 1.2rem;

  @media screen and (min-width: 768px) {
    font-size: 1.7rem;
  }
`;

const H3Container = styled.div`
  margin: -5% 2rem 3.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;

const H4Container = styled.div``;

const H4 = styled.h3`
  font-weight: 500;
  font-size: 1.5rem;

  @media screen and (min-width: 768px) {
    font-size: 2.3rem;
  }
`;

const TreshContainer = styled.div`
  width: 100%;
  margin-top: -15%;
  margin-bottom: 20%;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin-top: -10%;
    margin-bottom: 15%;
  }
`;

const MainLogoContainer = styled.div`
  margin-top: 30%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 75%;
  }
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
    props.color === "blue" ? "var(--purple1-color);" : "var(--purple2-color);"};
  color: var(--white1-color);
  border: none;
  width: 20rem;
  height: 2.8rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: ${(props) => (props.color === "blue" ? "0.5rem" : "")};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 26rem;
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
  margin-bottom: 10%;
`;

const GnbContainer = styled.div`
  bottom: 0;
  width: 100%;
  position: fixed;
  z-index: 10;
  max-width: 1024px;
`;

export default Landing;
