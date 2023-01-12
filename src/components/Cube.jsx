import styled, {keyframes} from 'styled-components';
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
        console.log(windowSize);
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        
            <BoxContainer size={windowSize.innerWidth / size}>
                <PackageCube size={windowSize.innerWidth / size} index="front">
                <Img url={"../../src/assets/img/sample01.jpg"}/>
                <Img url={'../../src/assets/img/sample02.jpg'}/>
                <Img url={'../../src/assets/img/sample03.jpg'}/>
                <Img url={'../../src/assets/img/sample04.jpg'}/>
                <Img url={'../../src/assets/img/sample05.jpg'}/>
                <Img url={'../../src/assets/img/sample06.jpg'}/>
                </PackageCube>
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

const animate = keyframes`    
    0%{
        transform: translateY(1%);
    }
    50%{
        transform: translateY(-0%);
    } 
    100%{
        transform: translateY(1%);
    }            
`;

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 65vh;    
    display: flex;
    justify-content: center;
    perspective: 1000px;
    animation: ${animate} 4s linear infinite;
    z-index:1;
    &:hover {
       pointer-events: none; 
    }
`

const BoxContainer = styled.div`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin-top: 100px;  
  z-index: 3;
`

const Img = styled.img` 
  display: flex; 
  border-radius: 0.3rem;  
  z-index: 2;
  background: url(${props=>props.url}) center center / cover;
  opacity: 0.85;
  cursor: pointer;
  box-shadow: 0px 0px 3rem;
  &:hover {
       pointer-events: auto; 
    }
`;

export default Cube;