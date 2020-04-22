import React from 'react';
import styled from 'styled-components';
import {Thumbnail} from '../utils/Pictures';
// images
import lounge from '../../images/home/experience/lounge.png';
import garden from '../../images/home/experience/garden.png';

const ExperienceSection = () => {
  return (
    <Container>
      <ImageContainer>
        <Thumbnail 
          image={lounge} 
          alt='lounge-image'
          heading='Lounge'
          info='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          link='/amenities/gallery'
          />
      </ImageContainer>
      <InfoContainer>
        <TextContainer>
          <h2>Style and Comfort</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </TextContainer>
        <ImageContainer>
          <Thumbnail 
            image={garden} 
            alt='garden-image'
            heading='Garden'
            info='Sit back, relax, enjoy a glass of rosé'
            link='/amenities/garden'
            />
        </ImageContainer>
      </InfoContainer>
    </Container>
  );
};

export default ExperienceSection;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

const ImageContainer = styled.div`
  align-self: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
`;

const TextContainer = styled.div`
`;