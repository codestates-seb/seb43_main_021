import React, { useState } from "react";
import styled from "styled-components";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FiChevronLeft, FiChevronDown } from "react-icons/fi";

const Header = ({ title, titleList, chatTitle }) => {
  const [select, setSelect] = useState(false);
  const [selectLocation, setSelectLocation] = useState("전체");

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Container onClick={select ? () => setSelect(!select) : null}>
        {chatTitle ? <BackButton onClick={handleBack} /> : null}
        {titleList ? <Title>{selectLocation}</Title> : <Title>{title}</Title>}
        {titleList ? <SelectTitle onClick={() => setSelect(!select)} /> : null}
        {select ? (
          <SelectBox>
            {titleList.map((item, index) => (
              <Li
                key={index}
                onClick={() => {
                  setSelectLocation(item);
                  setSelect(!select);
                }}
              >
                {item}
              </Li>
            ))}
          </SelectBox>
        ) : null}
        <ChatTitle>{chatTitle}</ChatTitle>

        <Notice>
          <CustomLink to="/search">
            <Search />
          </CustomLink>
          <Bell />
        </Notice>
      </Container>
      <Line />
    </>
  );
};

export default Header;

const Container = styled.div`
  height: 5.5rem;
  /* background-color: navy; */
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 23px;
  font-weight: 700;
  position: relative;
`;

const Title = styled.div`
  margin-bottom: 1rem;
  margin-left: 1.5rem;
`;

const SelectTitle = styled(FiChevronDown)`
  cursor: pointer;
  font-size: 2rem;
  margin-bottom: 0.9rem;
`;

const SelectBox = styled.ul`
  position: absolute;
  top: 80px;
  left: 20px;
  border: 0.5px solid gray;
  background-color: white;
  padding: 0.5rem 0 0.5rem 0.5rem;
  width: 6rem;
  border-radius: 5px;
  font-size: 1.2rem;
`;
const Li = styled.li`
  list-style: none;
  font-weight: 400;
  padding: 3px 0;
  cursor: pointer;
`;

const ChatTitle = styled.div`
  margin: 0 auto 1rem auto;
`;

const BackButton = styled(FiChevronLeft)`
  margin: 0 1rem 1rem;
  font-size: 2.25rem;
  cursor: pointer;
`;

const Notice = styled.div`
  margin-bottom: 0.6rem;
  margin-right: 1.5rem;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Line = styled.div`
  border: 0.5px solid #cccccc;
  width: 100%;
`;

const Search = styled(BsSearch)`
  font-size: 1.6rem;
  margin-right: 0.8rem;
  margin-bottom: 3px;
`;

const Bell = styled(FiBell)`
  font-size: 1.9rem;
`;
