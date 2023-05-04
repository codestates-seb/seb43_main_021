import myImage from '../../../assets/image2.jpg';
import styled from 'styled-components'


// 이미지 alt에 등록한 물품 제목 넣기 ex) alt={title}
const Images = () => {
    return (
        <ImageContainer>
            <img src={myImage} alt='물품 이미지' />
        </ImageContainer>
    );
};

const ImageContainer = styled.div`
    width: 100%;
    position: relative;
    padding-top: 100%;
    overflow: hidden;
    border-radius: 12px;
    background-color: #F8F9FA;
    box-shadow: inset 0px 0px 1px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        height: auto;
        border-radius: 12px;
        border: 1px solid transparent;
    }
`;

export default Images;