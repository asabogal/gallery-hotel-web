import React from 'react';
import styled from 'styled-components';
import {Thumbnail} from '../utils/Pictures';
import {TwoColCaptionImage} from '../utils/StyledLayouts';
 // images
import lounge from '../../images/home/experience/lounge.png';
import garden from '../../images/home/experience/garden.png';

const ExperienceSection = () => {
  return (
    <TwoColCaptionImage>
      <MainImage>
        <Thumbnail 
          image={lounge} 
          alt='lounge-image'
          heading='Lounge'
          info='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          link='/amenities/gallery'
          />
      </MainImage>
      <TextContainer>
        <h2>Experience Style & Comfort</h2>
        <p>Mid century pop art meets contemporary chic. Our hotel features multiple, beautifully curated common spaces for you to explore and enjoy.</p>
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
    </TwoColCaptionImage>
  );
};

export default ExperienceSection;

const MainImage = styled.div`
  height: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  @media (max-width: 1099px) {
    width: 80%;
    margin: 0 auto;
    grid-row: 2 / 3;
    height: 70vh;
  }
  @media (max-width: 599px) {
    grid-row: 2 / 3;
    height: 50vh;
  }
`;

const TextContainer = styled.div`
  align-self: flex-end;
`;

const ImageContainer = styled.div`
`;