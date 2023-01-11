import styled from "styled-components";
import useStore from "@/utils/store";

const Background = styled.div`
  position: fixed;
  top: 5rem;
  right: 2rem;
  width: 25vw;
  height: 70vh;
  border-radius: 1vh; 
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 23;
`;

const Window = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3); 
`;

function Mprofile(){    
    const { isModal,toggleIsModal} = useStore();
    return(
        <div>
            {isModal?null:
            <Background/>}
        </div>
    )
}

export default Mprofile;