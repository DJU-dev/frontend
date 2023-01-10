import styled from 'styled-components';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  position: relative;
  top:65vh;
  background-color:tomato;
`;

const UnevenSetsInfinite = () => {
  const settings = {    
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 2,
      slidesToShow: 4
    }

    return (
      <Container>
        <h2>Uneven sets (infinite)</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </Container>
    );
  
}

export default UnevenSetsInfinite;