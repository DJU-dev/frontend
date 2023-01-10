import styled from "styled-components";

const Container = styled.div`    
    position: relative;
    margin-top: 10rem;
    width: 100%;
    height: 13rem;
    border: 1px solid white;
    border-radius: 2rem 2rem 0 0;
    background: linear-gradient(40deg,#FF9898,#8054FF);
`;

const P = styled.p`
  color: wheat;
  font-size: 60px; 
`;

function Footer(){
    return (        
        <Container>
            <P>Hello World</P>            
        </Container>
        
    )
}

export default Footer;