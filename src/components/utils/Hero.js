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
`;