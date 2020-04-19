import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


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
      {renderImages()}
      <LeftButton>
        <FontAwesomeIcon
          icon={faChevronLeft}
          size='2x'
          color='white'
        />
      </LeftButton>
      <RightButton>
      <FontAwesomeIcon
        icon={faChevronRight}
        size='2x'
        color='white'
      />
      </RightButton>
    </Slider>
  )
};

export default ImageSlider;

const Slider = styled.div`
  border: 2px solid #61d1be;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 40px auto;
  position: relative;
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

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  width: 5%;
  height: 100%;
  border: none;
  cursor: pointer;
  :hover {
    background-color: rgba(0,0,0,0.4);
  }
`;

const LeftButton = styled(Button)`
  left: 0;
`;

const RightButton = styled(Button)`
  right: 0;
`;