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
  background-color:none;
`;

const Box = styled.div`  
  border: 1px solid black;  
  height: 40vh;  
  background-color: #fe3b83;
  border-radius: 7%;
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
            <h3>111111111111111111111111111</h3>
          </Box>
          <Box>
            <h3>2222222222222222222222222222</h3>
          </Box>
          <Box>
            <h3>33333333333333333333333</h3>
          </Box>
          <Box>
            <h3>44444444444444444444444444</h3>
          </Box>
          <Box>
            <h3>5555555555555555555555555555</h3>
          </Box>
          <Box>
            <h3>66666666666666666666666666</h3>
          </Box>
        </Slider>
      </Container>
    );
  
}

export default SliderBox;