import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 5rem;
  right: 2rem;
  width: 25vw;
  height: 70vh;
  border-radius: 1vh; 
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1000;
`;

function Mprofile(){
    return(
        <div>
            <Background>

            </Background>
        </div>
    )
}

export default Mprofile;