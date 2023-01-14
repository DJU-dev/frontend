import styled from "styled-components";
import {Mobile, Desktop, Tablet} from "@/components/MediaQuery/MediaQuery.jsx";
import {useState, useEffect} from "react";
import PackageCube from 'react-3d-cube';

const DESKTOP_CUBE_SIZE = 6.5
const TABLET_CUBE_SIZE = 3
const MOBILE_CUBE_SIZE = 2.5

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

const ResponsiveBox = ({size}) => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        
            <BoxContainer size={windowSize.innerWidth / size}>
                <PackageCube size={windowSize.innerWidth / size} index="front" />
            </BoxContainer>
        
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
    position: relative;
    width: 100%;
    height: 65vh;    
    display: flex;
    justify-content: center;
    perspective: 1000px;
`

const BoxContainer = styled.div`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin-top: 100px;  
  z-index: 3;
`

export default Cube;