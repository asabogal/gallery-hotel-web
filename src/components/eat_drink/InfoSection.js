import React from 'react';
import styled from 'styled-components';
import {Thumbnail} from '../utils/Pictures';
// images
import dumplings from '../../images/eat_drink/dumplings.png';
import drink from '../../images/eat_drink/drink1.png';

const InfoSection = () => {
  return (
    <Container>
      <Info>
        <TextContainer>
          <h2>Taste Reimagined</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </TextContainer>
      </Info>
      <InfoImage>
          <Thumbnail 
            image={drink} 
            alt='drink-image' 
            heading='Drink Menu'
            info='Take a look at our decadent drinks'
            link='/eatdrink/drinks'
          />
        </InfoImage>
      <ImageContainer>
        <Thumbnail 
          image={dumplings} 
          alt='dumplings'
          heading='Dinner Menu'
          info='Discover our eclectic cousine'
          link='/eatdrink/drinks'
        />
      </ImageContainer>
      
    </Container>
  );
};

export default InfoSection;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30% 70%;
  grid-column-gap: 2rem;
`;

const Info = styled.div`
  grid-template-rows: 1fr 1fr 1fr;
  align-self: center;
`;

const InfoImage = styled.div`
  width: 100%;
  height: 100%;
  grid-area: 2 / 1 / 3 / 2;
`;

const TextContainer = styled.div`

`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const ImageContainer = styled.div`
  grid-area:  1 / 2 / 3 / 3;
`;