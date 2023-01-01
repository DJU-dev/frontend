import styled, {keyframes} from "styled-components";
import {Mobile, Desktop, Tablet} from "@/components/MediaQuery/MediaQuery.jsx";


const DESKTOP_CUBE_SIZE = ['16vw', '8vw']
const TABLET_CUBE_SIZE = ['30vw', '15vw']
const MOBILE_CUBE_SIZE = ['40vw', '20vw']

const ResponsiveBox = ({size}) => {
    return (
        <Box size={size[0]}>
            <Front className="card" size={size[1]}>Front</Front>
            <Back className="card" size={size[1]}>Back</Back>
            <Left className="card" size={size[1]}>Left</Left>
            <Right className="card" size={size[1]}>Right</Right>
            <Top className="card" size={size[1]}>Top</Top>
            <Bottom className="card" size={size[1]}>Bottom</Bottom>
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
        text-align: center;
        padding: 5vw;
        color: yellow;
        background: black;
        border: 2px solid yellow;
        font-size: 32px;
        box-sizing: border-box;
        position: absolute;
        transition: all 1s;
    }
  
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