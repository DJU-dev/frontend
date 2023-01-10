import styled from 'styled-components';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  position: relative;
  top:70vh;
  left:25vw;  
  width: 50vw;
  background-color:tomato;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;

  width: 3vw;
  height: 10vh;
  margin: 10px;
  padding: 10px;
  background-color: #fe3b83;
`;

const SliderBox = () => {
  const settings = {    
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToScroll: 2,
      slidesToShow: 4,
      autoplay: true,
      arrow: true,
  
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