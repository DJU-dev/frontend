import styled, { keyframes } from "styled-components";
import {useStore} from "@/utils/store";

const fadein = keyframes`    
    0%{
        opacity: 0.3;
        transform: translateY(-3%);
    }
    50%{
        transform: translateY(1%); 
    }
    100%{
        opacity: 1;
        transform: translateY(0%); 
    }            
`;

const Background = styled.div`
  position: fixed;
  /* 위치 */
  top: 5rem;
  right: 2rem;
  width: 25rem;
  height: 30rem;

  /* 배경 */
  border-radius: 1vh; 
  background: rgb(255,152,152);  
  backdrop-filter: blur(1rem); 
  box-shadow: 2px 7px 5px 3px rgba(0,0,0,0.5);
  background: linear-gradient(153deg, rgba(255,152,152,0.86) 0%, rgba(128,84,255,0.85) 100%);
  opacity: 0.95; 
  animation: ${fadein} 0.5s ease-in;
  z-index: 20;

  /* 자식 요소 */
  display: flex;

  
`;

const X = styled.div`
    position: absolute;
    margin-top: 0.5rem;
    right: 0.5rem;

    height: 1rem;    
    width: 1rem;
    border:none;
    border-radius:50%;
    background-color: #6b6b6b;    
    cursor: pointer;
    z-index:3;  
`;

const HeadBox = styled.div`
    position: relative;
    margin: 0 0.5rem;
    margin-top: 0.5rem;
    
    width: 100%;
    height: 10rem;
`;

const Profile = styled.div`  
  //position: absolute;  
  border: 0.18rem solid black;
  width: 7rem;
  height: 7rem;
  
  margin-left: 1rem;
  cursor: pointer;
  border-radius: 50%;
  background: url(${props=>props.url}) center center / cover;
  background-size: 130%; 
`;

function Mprofile(){    
    const { isModal,toggleIsModal} = useStore();
    return(
        <div>
            {isModal ? null:
            <Background isModal={isModal}>
                <X onClick={toggleIsModal}/>
                <HeadBox>
                    <Profile url={'../../src/assets/img/icon/profile01.png'}/>
                </HeadBox>
            </Background>
            }
        </div>
    )
}

export default Mprofile;