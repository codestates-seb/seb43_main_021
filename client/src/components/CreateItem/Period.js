import React from "react";
import styled from "styled-components";

const Period = ({ auctionPeriod, enterNumbersOnly, showPeriodWarning }) => {

    return (
        <AuctionPeriod>
            <h2>경매 기간</h2>
            <h4>※ 경매 기간은 최소 1일부터 30일까지 설정할 수 있어요.</h4>
            <PeriodData>
                <PeriodInput>
                    <input type="text" value={auctionPeriod} onChange={enterNumbersOnly} />
                </PeriodInput>
                <h2>일</h2>
            </PeriodData>
            {showPeriodWarning && <Warning>경매 기간을 입력해주세요.</Warning>}
        </AuctionPeriod>
    )
}

export default Period;

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