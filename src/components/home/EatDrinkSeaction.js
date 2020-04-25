import React from 'react';
import styled from 'styled-components';
import {Thumbnail} from '../utils/Pictures';
import {Button} from '../utils/Buttons';
import {Link} from 'react-router-dom';
// images
import signatureDrink from '../../images/home/restaurant/signaturedrink.png';
import friedRice from '../../images/home/restaurant/friedrice.png';
import bar from '../../images/home/restaurant/bar.png';

const EatDrinkSection = () => {
  return (
    <Container>
      <InfoContainer>
        <TextContainer>
          <h2>Eat & Drink</h2>
          <p>Tropical Vibes, Eclectic Flavors,..........  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </TextContainer>
        <InfoImages>
          <Thumbnail 
            image={friedRice} 
            alt='rice-image'
            />
            <Thumbnail 
              image={signatureDrink} 
              alt='drink-image'
            />
        </InfoImages>
      </InfoContainer>
      <ImageContainer>
        <Thumbnail 
          image={bar} 
          alt='bar'
          link='/eatdrink'
          heading='Explore our Restaurant'
          info='Taste Reimagined'
          />
      </ImageContainer>
    </Container>
  );
};

export default EatDrinkSection;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: auto; */
  grid-gap: 2rem;
  height: 50%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  height: 30%;
  button {
    margin-top: 40px;
  }
`;

const TextContainer = styled.div`
`;

const InfoImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* justify-content: center; */
  grid-gap: 1rem;
`;

const ImageContainer = styled.div`
  /* max-height: 80%; */
  height: auto;
`;
