import styled from "styled-components";
import { BsChevronLeft } from "react-icons/bs";

const CreateAuction = () => {
  return (
    <Header>
        <BsChevronLeft />
    </Header>
  )
}

export default CreateAuction;

const Header = styled.div`
    padding: 1.2rem 1.6rem;
    height: 5.6rem;
    box-sizing: border-box;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    position: relative;
`