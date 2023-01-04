import styled, {keyframes} from "styled-components";
import {Mobile, Desktop, Tablet} from "@/components/MediaQuery/MediaQuery.jsx";


const DESKTOP_CUBE_SIZE = ['16vw', '8vw']
const TABLET_CUBE_SIZE = ['30vw', '15vw']
const MOBILE_CUBE_SIZE = ['40vw', '20vw']

const ResponsiveBox = ({size}) => {
    return (
        <Box size={size[0]}>
            <Front className="card" size={size[1]}>
                <CubeImage src={"https://images.unsplash.com/photo-1672699067334-00ec47152b50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} />
            </Front>
            <Back className="card" size={size[1]}>
                <CubeImage src={"https://images.unsplash.com/photo-1672741511537-4ccaa5096b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"} />
            </Back>
            <Left className="card" size={size[1]}>
                <CubeImage src={"https://images.unsplash.com/photo-1672745093214-3fb65f2be5a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"} />
            </Left>
            <Right className="card" size={size[1]}>
                <CubeImage src={"https://images.unsplash.com/photo-1672655134101-25d8277f7901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"} />
            </Right>
            <Top className="card" size={size[1]}>
                <CubeImage src={"https://plus.unsplash.com/premium_photo-1669658981960-ad1ef6d51571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"} />
            </Top>
            <Bottom className="card" size={size[1]}>
                <CubeImage src={"https://images.unsplash.com/photo-1672679434929-3518f74d4a6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"} />
            </Bottom>
        </Box>
    )
}

const Cube = () => {
    return (
        <Container>
            <Desktop>
                <ResponsiveBox size={DESKTOP_CUBE_SIZE} />
            </Desktop>
            <Tablet>
                <ResponsiveBox size={TABLET_CUBE_SIZE} />
            </Tablet>
            <Mobile>
                <ResponsiveBox size={MOBILE_CUBE_SIZE} />
            </Mobile>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    perspective: 1000px;
  
    background: black;
`

const animate = keyframes`
    0% {
        transform: rotateX(45deg) rotateY(-45deg);
    }
    25% {
        transform: rotateX(-45deg) rotateY(-45deg);
    }
    50% {
        transform: rotateX(45deg) rotateY(45deg);
    }
    75% {
        transform: rotateX(-45deg) rotateY(45deg);
    }
    100% {
        transform: rotateX(45deg) rotateY(-45deg);
    }
`

const Box = styled.div`
  margin-top: 200px;
  height: ${props => props.size || '14vw'};
  width: ${props => props.size || '14vw'};
  transform-style: preserve-3d;
  animation: ${animate} 30s infinite;
  .card {
    height: ${props => props.size || '14vw'};
    width: ${props => props.size || '14vw'};
    border: 5px solid white;
    box-sizing: border-box;
    position: absolute;
  }
  .card::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #ffbc00, #ff0058);
    filter: blur(10px);
    z-index: -1;
  }
`

const CubeImage = styled.img`
  width: 100%;
  height: 100%;
`
const Front = styled.div`
    transform: translateZ(${props => props.size || '7vw'});
`

const Back = styled.div`
    transform: translateZ(${props => props.size || '-7vw'});
`

const Left = styled.div`
    right: ${props => props.size || '7vw'};
    transform: rotateY(-90deg);
`

const Right = styled.div`
    left: ${props => props.size || '7vw'};
    transform: rotateY(90deg);
`

const Top = styled.div`
    bottom: ${props => props.size || '7vw'};
    transform: rotateX(90deg);
`

const Bottom = styled.div`
    top: ${props => props.size || '7vw'};
    transform: rotateX(-90deg);
`

export default Cube;