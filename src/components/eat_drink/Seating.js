import React from 'react';
import styled from 'styled-components';
import {Picture, Thumbnail} from '../utils/Pictures';
// images
import garden from '../../images/eat_drink/garden.jpeg';
import oysters from '../../images/eat_drink/oysters.png';
import dinningRoom from '../../images/eat_drink/dinningroom.png';


const Seating = () => {
  return (
    <Container>
      <TopSection>
        <Info>
          <h2>Indoor and Outdoor Service</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Info>
        <Thumbnail 
          image={garden} 
          alt='arden-seating'
          heading='Garden Seating'
          info='Service from 5pm - 10pm'
          />   
        <Thumbnail 
          image={dinningRoom} 
          alt='dinning-room'
          heading='Dinning Room'
          info='Service from 6pm - 11pm'
          />
        </TopSection>
        <ImageContainer>
        <Thumbnail 
          image={oysters} 
          alt='oysters'
          contain='contain'
          />
          </ImageContainer>
    </Container>
  );
};

export default Seating;

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 90vh;
  grid-gap: 2rem;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 2fr));
  justify-content: center;
  grid-gap: 2rem;
`;

const Info = styled.div`
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  /* margin-left: 20vw; */
`;