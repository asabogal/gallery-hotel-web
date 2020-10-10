import React from 'react';
import styled from 'styled-components';
import {Thumbnail} from '../utils/Pictures';
// images
import dumplings from '../../images/eat_drink/dumplings.png';
import drink from '../../images/eat_drink/drink1.png';

const InfoSection = () => {
  return (
    <Container>
      <TextContainer>
        <h2>Taste Reimagined</h2>
        <p>KonTiki is one of the North Fork’s most intriguing restaurants and bars. Chef Cheo brings an unique blend of Asian and Latin American cuisines, while our full bar offers the best in exotic and tropical flavors.</p>
        <p>KonTiki offers seasonal service from Memorial Day Weekend through October 31st.</p>
      </TextContainer>
      <ImageContainer>
        <Thumbnail 
          image={dumplings} 
          alt='dumplings'
          heading='Dinner Menu'
          info='Discover our eclectic cousine'
          link='/eatdrink/drinks'
        />
      </ImageContainer>
      <InfoImage>
          <Thumbnail 
            image={drink} 
            alt='drink-image' 
            heading='Drink Menu'
            info='Take a look at our decadent drinks'
            link='/eatdrink/drinks'
          />
      </InfoImage>
    </Container>
  );
};

export default InfoSection;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 2rem;
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 2fr;
    grid-row-gap: 2rem;
  }
`;

const InfoImage = styled.div`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  height: auto;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  grid-area: 1 / 2 / 3 / 3;
  @media (max-width: 599px) {
    height: 100%;
  width: 100%;
    grid-area: 2 / 1 / 3 / 2;
  }
`;