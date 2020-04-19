import React from 'react';
import styled from 'styled-components';

const ImageSlider = ({images}) => {

  const renderImages = () => {
    return images.map((image, index) => {
      return (
        <Slide key={index}>
          <img src={image}></img>
        </Slide>
      )
    })
  }

  return (
    <Slider>
      {
        renderImages()
      }
    </Slider>
  );
};

export default ImageSlider;

const Slider = styled.div`
  border: 2px solid #61d1be;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 40px auto;
`;

const Slide = styled.div`
  border: 1px solid blue;
  min-width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;