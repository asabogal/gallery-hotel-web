import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Hero = ({images, height, contentTop, contentBottom}) => {
  const [x, setX] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setX(0);
  }, [images])

  const renderImages = (images) => {
    return images.map((image, index) => {
      return (
        <Slide key={index} image={image} style={{transform: `translateX(${x}%)`}}>
        <div>
          {contentTop}
        </div>
        <div>
          {contentBottom}
        </div>
        
        <LeftButton onClick={moveLeft}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          size='2x'
          color='white'
        />
      </LeftButton>
      <RightButton onClick={moveRight}>
      <FontAwesomeIcon
        icon={faChevronRight}
        size='2x'
        color='white'
      />
      </RightButton>
        </Slide>
      )
    })
  };

  const moveLeft = () => {
    x === 0 ? setX(-100 * (images.length - 1)) : setX(x + 100);
  };

  const moveRight = () => {
    x === -100 * (images.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <Slider>
      {console.log(images)}
      {renderImages(images)}
      
    </Slider>    
  )
};

export default Hero;

const Slider = styled.div`
  display: flex;
  overflow: hidden;
  height: auto;
  align-items: center;
`;

const Slide = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  align-items: flex-end;
  min-width: 100%;
  width: 100%;
  min-height: 100%;
  transition: 0.5s;
  overflow: hidden;
  position: relative;
  height: ${(props => props.height || '85vh')};
  background: url(${props => props.image}) no-repeat;
  background-position: center center;
  background-size: cover;
  @media (max-width: 1100px) {
    max-height: 60vh;
  }
  @media (max-width: 921px) {
    max-height: 65vh;
  }
  @media (max-width: 768px) {
    max-height: 60vh;
  }
  @media (max-width: 676px) {
    max-height: 50vh;
  }
  @media (max-width: 566px) {
    max-height: 40vh;
  }
  @media (max-width: 450px) {
    max-height: 32vh;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  width: 5vw;
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