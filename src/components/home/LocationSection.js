import React from 'react';
import styled from 'styled-components';
import {Picture} from '../utils/Pictures';
import vintagemap from '../../images/home/location/vintagemap.jpg';
import {Thumbnail} from '../utils/Pictures';
import beach from '../../images/home/location/beach.png';



const VintageMap = () => {
  return (
    <Container>
      <MapContainer>
        <Picture picture={vintagemap} alt='vintage-map'/>
      </MapContainer>
      <InfoContainer>
        <TextContainer>
          <h2>Your Destination</h2>
          <p>Discover local farms, restaurants, shops, and the North Fork's best wines..........
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </TextContainer>
        <ImageContainer>
          <Thumbnail 
            image={beach} 
            alt='garden-image'
            heading='Discover the area'
            info='Get to know the North Fork'
            link='/location'
            />
        </ImageContainer>
      </InfoContainer>
    </Container>
  );
};

export default VintageMap;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const MapContainer = styled.div`
  height: auto;
  margin: 0 auto;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
`;

const TextContainer = styled.div`
`;
const ImageContainer = styled.div`
  height: 40vh;
  align-self: center;
`;