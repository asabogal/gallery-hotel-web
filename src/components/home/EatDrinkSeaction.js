import React from 'react';
import styled from 'styled-components';
import {TwoColCaptionImage} from '../utils/StyledLayouts';
import {Thumbnail} from '../utils/Pictures';
// images
import mojito from '../../images/home/restaurant/mojito.png';
import friedRice from '../../images/home/restaurant/friedrice.png';
import bar from '../../images/home/restaurant/bar.png';

const EatDrinkSection = () => {
  return (
    <TwoColCaptionImage height='90vh'>
      <TextContainer>
        <h2>Eat & Drink</h2>
        <p>Tropical Vibes and Eclectic Flavors. You'll fall in love with the food and ambiance of our little Oasis.</p>
      </TextContainer>
      <InfoImages>
        <Thumbnail 
          image={friedRice} 
          alt='rice plate'
          />
          <Thumbnail 
            image={mojito} 
            alt='mojito drink'
          />
      </InfoImages>
      <ImageContainer>
        <Thumbnail 
          image={bar} 
          alt='bar'
          link='/eatdrink'
          heading='Explore our Restaurant'
          info='Taste Reimagined'
          />
      </ImageContainer>
    </TwoColCaptionImage>
  );
};

export default EatDrinkSection;

const TextContainer = styled.div`
  align-self: flex-end;
`;

const InfoImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-self: center;
  grid-gap: 1rem;
`;

const ImageContainer = styled.div`
  height: auto;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  @media (max-width: 1099px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
`;
