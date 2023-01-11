import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

function Mprofile(){
    return(
        <div>
            <Background></Background>
        </div>
    )
}

export default Mprofile;