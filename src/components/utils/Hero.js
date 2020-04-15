import React from 'react';
import styled from 'styled-components';

const Hero = ({image, height, content}) => {
  return (
    <Container image={image} height={height}>
      {content}
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100vw;
  height: ${(props => props.height || '90vh')};
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