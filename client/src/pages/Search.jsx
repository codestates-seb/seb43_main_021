import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiChevronLeft } from "react-icons/fi";
import Gnb from "../components/UI/Gnb/Gnb";
import { useNavigate } from "react-router-dom";

const searchDummy = ["맥북", "노트북", "나이키 조던1 스캇", "에어팟", "선크림"];

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const localData = () => {
      const storedData = localStorage.getItem("searchData");
      if (!storedData || storedData === []) {
        localStorage.setItem("searchData", JSON.stringify(searchDummy));
        setSearchData(searchDummy);
      } else {
        setSearchData(JSON.parse(storedData));
      }
    };
    localData();
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  const handelInputChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      search();
      searchData.unshift(searchWord);
      localStorage.setItem("searchData", JSON.stringify(searchData));
      setSearchWord("");
    }
  };
  const search = () => {
    navigate(`/search`);
  };

  const deleteSearch = (deleteWord) => {
    setSearchData((prevData) => {
      const deleteData = prevData.filter((word) => word !== deleteWord);
      localStorage.setItem("searchData", JSON.stringify(deleteData));
      return deleteData;
    });
  };

  const deleteAllData = () => {
    setSearchData([]);
    localStorage.setItem("searchData", JSON.stringify([]));
  };

  return (
    <>
      <SearchHeader>
        <BackButton onClick={handleBack} />
        <SearchInput
          type="text"
          placeholder="중곡동 근처에서 검색"
          value={searchWord}
          onChange={handelInputChange}
          onKeyDown={handleEnterPress}
        ></SearchInput>
      </SearchHeader>
      <SearchBody>
        <RecentSearch>최근 검색어</RecentSearch>
        <DeleteAllSearch onClick={deleteAllData}>모두 지우기</DeleteAllSearch>
      </SearchBody>
      <SearchWrapper>
        {searchData.map((word, index) => (
          <SearchContainer key={index}>
            <SearchWords>
              <SearchWord>{word}</SearchWord>
              <SearchWordDelete onClick={() => deleteSearch(word)}>
                X
              </SearchWordDelete>
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
