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
        <Header>지역의 명소</Header>
        <Slider {...settings}>
          <Box url={'../../src/assets/img/sample01.jpg'} />          
          <Box url={'../../src/assets/img/sample02.jpg'} />
          <Box url={'../../src/assets/img/sample03.jpg'} />
          <Box url={'../../src/assets/img/sample04.jpg'} />
          <Box url={'../../src/assets/img/sample05.jpg'} />
          <Box url={'../../src/assets/img/sample06.jpg'} />
        </Slider>
      </Container>
    );
  
}

export default SliderBox;