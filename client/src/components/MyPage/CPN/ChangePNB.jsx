import styled from "styled-components"


export default function ChangePNB(){
  const dummydata =[
    {
      phoneFrontNum:` ${1234} ${1234}`,      
    }
  ]
  return (
    <Wrapper>
      <TopTitle>새로운 휴대폰 번호를 입력해주세요</TopTitle>
      <SubTitle>현재 등록된 휴대폰 번호는 010{`${dummydata[0].phoneFrontNum}`}이에요</SubTitle>      
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid black;
  margin: 0 1rem;  
`
const TopTitle = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 20px;
  font-weight: bold;
`
const SubTitle = styled.div`
  margin-bottom: 2rem;
  font-size: 15px;
  color: #8b8c90;
`