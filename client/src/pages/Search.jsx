import React from "react";
import styled from "styled-components";
import { FiChevronLeft } from "react-icons/fi";
import Gnb from "../components/UI/Gnb/Gnb";

const dummyData = [
  {
    searchWord: "맥북",
  },
  {
    searchWord: "노트북",
  },
  {
    searchWord: "나이키 조던1 스캇",
  },
  {
    searchWord: "에어팟",
  },
  {
    searchWord: "선크림",
  },
];

const Search = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <SearchHeader>
        <BackButton onClick={handleBack} />
        <SearchInput placeholder="중곡동 근처에서 검색"></SearchInput>
      </SearchHeader>
      <SearchBody>
        <RecentSearch>최근 검색어</RecentSearch>
        <DeleteAllSearch>모두 지우기</DeleteAllSearch>
      </SearchBody>
      <SearchWrapper>
        {dummyData.map((word) => (
          <SearchContainer key={word.searchWord}>
            <SearchWords>
              <SearchWord>{word.searchWord}</SearchWord>
              <SearchWordDelete>X</SearchWordDelete>
            </SearchWords>
            <SearchLine />
          </SearchContainer>
        ))}
      </SearchWrapper>
      <Footer>
        <Gnb />
      </Footer>
    </>
  );
};

const SearchHeader = styled.div`
  height: 5.5rem;
  display: flex;
  font-size: 23px;
  font-weight: 700;
`;

const BackButton = styled(FiChevronLeft)`
  margin: auto 1rem 1rem;
  width: 2.25rem;
  height: 2.25rem;
  cursor: pointer;
`;

const SearchInput = styled.input`
  padding: 1rem;
  height: 2.25rem;
  width: 100%;
  margin: auto 1.5rem 1rem 0;
  border-radius: 8px;
  border: none;
  background-color: #ebebeb;
`;

const SearchBody = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RecentSearch = styled.div`
  margin: 1rem;
`;
const DeleteAllSearch = styled.div`
  margin: 1rem;
  cursor: pointer;
`;

const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 0 1rem;

  @media screen and (min-width: 650px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    margin: 0 1rem;
  }
`;

const SearchContainer = styled.div``;

const SearchWords = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchWord = styled.div`
  margin: 1rem 0;
  cursor: pointer;
`;
const SearchWordDelete = styled.div`
  margin: 1rem 0;
  cursor: pointer;
  padding-left: 5px;
`;
const SearchLine = styled.div`
  border: 0.5px solid #cccccc;
`;

const Footer = styled.div`
  bottom: 0;
  width: 100%;
  position: fixed;
  z-index: 10;
`;

export default Search;
