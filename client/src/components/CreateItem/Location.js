import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

const Location = ({
  titleList,
  showLocationWarning,
  setShowLocationWarning,
  selectLocation,
  setSelectLocation,
}) => {
  const [select, setSelect] = useState(false);

  const onClickLocationSelect = (location) => {
    setSelectLocation(location);
    setSelect(false);
    if (location !== "지역 설정") {
      setShowLocationWarning(false);
    }
  };

  return (
    <Container>
      <Header>
        <LeftContent>
          <h2>지역 설정</h2>
        </LeftContent>
        <RightContent>
          <Locations onClick={select ? () => setSelect(!select) : null} />
          {titleList ? (
            <>
              <Title>{selectLocation}</Title>
              <SelectTitle onClick={() => setSelect(!select)} />
            </>
          ) : (
            <Title>{selectLocation}</Title>
          )}
        </RightContent>
        {select ? (
          <SelectBox>
            {titleList.map((item, index) => (
              <Li key={index} onClick={() => onClickLocationSelect(item)}>
                {item}
              </Li>
            ))}
          </SelectBox>
        ) : null}
      </Header>
      {showLocationWarning && selectLocation === "지역 설정" && (
        <Warning>지역을 설정해 주세요.</Warning>
      )}
    </Container>
  );
};

export default Location;

const Container = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-color: var(--white3-color);
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  position: relative;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
`;

const LeftContent = styled.div`
  flex: 1;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

const Locations = styled.div`
  font-size: 10px;
`;

const Title = styled.div`
  margin-left: 1rem;
  padding-right: 1rem;
`;

const SelectTitle = styled(FiChevronDown)`
  cursor: pointer;
  font-size: 2rem;
`;

const SelectBox = styled.ul`
  position: absolute;
  top: 30px;
  right: 35px;
  border: 0.5px solid gray;
  background-color: var(--white1-color);
  width: 6rem;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
`;

const Li = styled.li`
  list-style: none;
  font-weight: 400;
  padding: 3px 0;
  cursor: pointer;
  &:hover {
    background-color: var(--white5-color);
  }
`;

const Warning = styled.div`
  color: var(--red1-color);
  font-size: 13px;
  margin-top: 0.5rem;
  text-align: right;
  h2 {
    margin: 0;
    padding: 0;
  }
`;
