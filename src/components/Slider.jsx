import styled from 'styled-components';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  position: relative;
  top:70vh;
  left:10vw;  
  width: 80vw;
  background-color:tomato;
`;

const Box = styled.div`  
  border: 1px solid black;  
  height: 50vh;  
  background-color: #fe3b83;
`;

const SliderBox = () => {
  const settings = {    
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToScroll: 2,
      slidesToShow: 3,
      autoplay: true,
      arrow: true,
      centerMode: true,
      focusOnSelect: true, // 클릭하면 해당 인덱스가 중앙으로      
    }

    return (
      <Container>
        <Slider {...settings}>
          <Box>
            <h3>1</h3>
          </Box>
          <Box>
            <h3>2</h3>
          </Box>
          <Box>
            <h3>3</h3>
          </Box>
          <Box>
            <h3>4</h3>
          </Box>
          <Box>
            <h3>5</h3>
          </Box>
          <Box>
            <h3>6</h3>
          </Box>
        </Slider>
      </Container>
    );
  
}

export default SliderBox;