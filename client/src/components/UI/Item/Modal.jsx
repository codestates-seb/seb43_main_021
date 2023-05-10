import styled from 'styled-components'
import { useRecoilState} from "recoil"
import { modalState } from '../../../stores/atoms'
import { ItemButton } from './ItemButton'
import { ItemButton2 } from './ItemButton2'
export const Modal= ({title, content})=>{
  const [isOpen,setIsOpen] = useRecoilState(modalState)
  const openModalHandler = ()=>{
    setIsOpen(!isOpen)    
  }
  return (
    <ModalWrapper>
        <ModalContainer>
          {title}
          <ContainerContnet>
            {content}
          </ContainerContnet>
          <ButtonArea>
            <Cancellation onClick={openModalHandler}>
              <ItemButton2/> 
            </Cancellation>
            <Permit>
              <ItemButton/>           
            </Permit>
          </ButtonArea>
        </ModalContainer>             
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`    
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
  position: fixed;  
  z-index: 2;
`

const ModalContainer = styled.div`
  display:flex;
  width: 338px;
  height: 170px;  
  border:1px solid black;  
  background-color: white;  
  flex-direction: column;
  border-radius: 10px;
  position:relative;  
  padding: 1.75rem 1rem;
  font-size: 20px;
  font-weight: bold;    
  
`;

const ContainerContnet= styled.div`
  padding-top: 1rem;
  padding-bottom: 1.25rem;
  font-size: 17px;
  font-weight: 400;
`
const ButtonArea = styled.div`
    display: flex;
    justify-content: space-between;            
`
const Cancellation = styled.div`
  >div{
    width: 148px;
    height: 46px;
  }
`;
const Permit = styled.div`
  >div{
    width: 148px;
    height: 46px;
  }
`;