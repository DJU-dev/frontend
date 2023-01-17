import styled, {keyframes} from 'styled-components';
import React, { Component } from "react";
import Slider from "react-slick";
import {useState, useEffect} from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const animate1 = keyframes`    
    0%{
        transform: translate(-50%,-50%) rotate(360deg);
    }
    100%{
        transform: translate(-50%,-50%) rotate(0deg);
    }            
`;


const Container = styled.div`
  position: relative;
  top: 40rem;  
  left: 15rem;
  width: 80vw;
  margin-bottom: 50rem;
  padding: 2rem 2.5rem;
  overflow: hidden;
  z-index: 3;
  border-radius: 10px;
  background-color:black;
  box-shadow:  0px 0px 20px rgba(255, 255, 255, 0.1);  
  
  ::before{
          content: '';
          position:absolute;
          top:50%;
          left:50%;
          width:110rem;
          height:110rem;
          transform: translate(-50%, -50%);
          background: linear-gradient(transparent,rgba(255, 128, 232, 0.5) 40%,rgba(190, 100, 255, 0.5) 60%,transparent);
          animation: ${animate1} 3s linear infinite;          
          border-radius: 10px;
          z-index: -2;
        }
  ::after{
            content:'';
            border-radius: 10px;
            position:absolute;
            inset: 0.2rem;
            z-index: -1;
            background-color: black;   
        }     
`;

const Box = styled.div` 
  position: relative;
  display: flex;
  border: 1px solid black;  
  height: 100%;  
  width: 100%;  
  cursor: pointer;
  border-radius: 1rem;
  flex-wrap: wrap;
  z-index: 1;
  transition: 1s;
  background: url(${props=>props.url}) center center / cover;

  &:hover{    
    border-radius: 10rem;
    transition: 0.5s;
  }

  @media screen and (min-width:300px){
      height: 10rem;            
    }
  @media screen and (min-width:600px){
    height: 12rem;            
  }
  @media screen and (min-width:900px){
    height: 13rem;            
  }
  @media screen and (min-width:1900px){
    height: 20rem;            
  }
  @media screen and (min-width:3600px){
    height: 40rem;            
  }
`;

const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const animate = keyframes`    
    0%{
        transform: translateY(-20%);
    }
    100%{
        transform: translateY(0%); 
    }            
`;

const Header = styled.p`
  text-align: center;
  color: white;
  font-size: 40px;
  font-weight: 800;
  padding-bottom: 3rem;
  animation: ${fadein} 4s,${animate} 3s;  
`;

const Phrase1 = styled.p`
  position: relative;
  display: flex;
  color: #a0dbff;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 900;
  margin-top: 14rem;
  margin-left: 1rem;

  @media screen and (max-width:1800px){
    font-size: 1rem;
    margin-top: 4rem;
  }
  @media screen and (min-width:2400px){
    font-size: 2.5rem; 
    margin-top: 12rem;
  }
  @media screen and (min-width:3600px){
    
    margin-top: 30rem;
  }
`;

const Phrase2 = styled.p`
  position: relative;
  display: flex;
  color: white;
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 900;
  margin-left: 1rem;

  @media screen and (max-width:1800px){
    font-size: 1.5rem;  
  }

  @media screen and (min-width:2400px){
    font-size: 3rem;  
  }
  
`;

/* 현재 윈도우 사이즈 적용  */
const getWindowSize = () => {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

const ResponsiveCarousel = ({size}) => {
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
    return windowSize.innerWidth;
}

/* 캐러셀 적용 */

const SliderBox = () => {
  var WidthSize = window.innerWidth;
  const settings = {    
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToScroll: 2,
      slidesToShow: ResponsiveCarousel(WidthSize)< 600 ? 2 : 3,
      autoplay: true,
      arrow: true,
      centerMode: true,
      focusOnSelect: true, // 클릭하면 해당 인덱스가 중앙으로      
    }

    return (
      <Container>
        <Header>Embark on an interactive and sensory experiment</Header>
        <Slider {...settings}>
          <Box url={'../../src/assets/img/sample01.jpg'}>
            <Phrase1>Around the world</Phrase1>
            <Phrase2>Vineyards from the skies</Phrase2>
          </Box>          
          <Box url={'../../src/assets/img/sample02.jpg'}>
            <Phrase1>Around the world</Phrase1>
            <Phrase2>Wine Planets</Phrase2>
          </Box>
          <Box url={'../../src/assets/img/sample03.jpg'}>
            <Phrase1>Through the ages</Phrase1>
            <Phrase2>Winegrowers and terroirs</Phrase2>
          </Box>
          <Box url={'../../src/assets/img/sample04.jpg'}>
            <Phrase1>Through the ages</Phrase1>
            <Phrase2>The Gallery of Civilisations</Phrase2>
          </Box>
          <Box url={'../../src/assets/img/sample05.jpg'}>
            <Phrase1>Lifestyle</Phrase1>
            <Phrase2>The Buffet of the Five Senses</Phrase2>
          </Box>
          <Box url={'../../src/assets/img/sample06.jpg'}>
            <Phrase1>Lifestyle</Phrase1>
            <Phrase2>A Matter of Taste</Phrase2>
          </Box>
        </Slider>        
      </Container>
    );
  
}

export default SliderBox;