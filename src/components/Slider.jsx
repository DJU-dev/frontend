import styled from 'styled-components';
import React, { Component } from "react";
import Slider from "react-slick";
import {useState, useEffect} from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import sample01 from "../../src/assets/img/sample01.jpg";

const Container = styled.div`
  position: relative;
  top:70vh;
  left:10vw;  
  width: 80vw;
  background-color:none;
`;

const Box = styled.div`  
  border: 1px solid black;  
  height: 18rem;  
  width: 100%;
  background-color: #fe3b83;
  border-radius: 1rem;
  z-index: 1;
  background: url(${props=>props.url}) center center / cover;

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

const Header = styled.p`
  text-align: center;
  color: white;
  font-size: 40px;
  padding-bottom: 3rem;

`;

const Phrase1 = styled.p`
  position: relative;
  color: #a0dbff;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 900;
  margin-top: 14rem;
  margin-left: 1rem;
`;

const Phrase2 = styled.p`
  position: relative;
  color: white;
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 900;
  margin-left: 1rem;
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
  console.log(windowSize);
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