import React from 'react';
import styled from 'styled-components';
import {Thumbnail, Picture} from '../utils/Pictures';

// images
import hotel from '../../images/home/about/hotel.png';
import livingroom from '../../images/home/about/livingroom.png';
import room from '../../images/home/about/room.png';

const AboutSection = () => {
  return (
    <Container>
      <TopSection>
        <Info>
          <h2>Boutique Hotel and Art Gallery in Greenport</h2>
          <p>Mid century pop art meets contemporary chic. </p>
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
        <HotelImageContainer>
            <Picture picture={hotel} alt='hotel-image'/>
        </HotelImageContainer>
    </Container>
  );
};

export default AboutSection;

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 2rem;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 2fr));
  justify-content: center;
  grid-gap: 2rem;
  @media (max-width: 1024px) and (min-width: 599px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 180px);
  }
`;

const Info = styled.div`
`;

const HotelImageContainer = styled.div`
  width: 50vw;
  height: auto;
  margin-left: 20vw;
  @media (max-width: 1023px) {
    width: 100%;
    margin: 0;
  }
`;