import myImage from '../../../assets/image2.jpg';
import styled from 'styled-components'

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
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        box-sizing: border-box;
        border-radius: 12px;
        border: 1px solid transparent;
        object-fit: contain;
    }
`;

export default Images;