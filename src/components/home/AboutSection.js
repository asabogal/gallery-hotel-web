import React from 'react';
import styled from 'styled-components';
import {Thumbnail} from '../utils/Pictures';

// images
import hotel from '../../images/home/about/hotel.png';
import livingroom from '../../images/home/about/livingroom.png';
// import lounge from '../../images/home/about/lounge.png';
import room from '../../images/home/about/room.png';

const AboutSection = () => {
  return (
    <Container>
      <TopSection>
        <Info>
          <h2>Boutique Hotel and Art Gallery in Greenport</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Info>
        <Thumbnail 
          image={livingroom} 
          alt='lobby-picture'
          heading='Amenities'
          info='Discover our fabulous spaces'
          link='/amenities'
          />   
        <Thumbnail 
          image={room} 
          alt='room-picture'
          heading='Our Rooms'
          info='Expore our stylish rooms'
          link='/rooms'
          />
        </TopSection>
    </Container>
  );
};

export default AboutSection;

const Container = styled.div`
  grid-template-rows: auto auto;
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