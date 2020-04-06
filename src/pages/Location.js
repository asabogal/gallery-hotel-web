import React from 'react';
import styled from 'styled-components';
import Text from '../components/location/Text';
import GoogleMap from '../components/GoogleMap';

const Location = () => {
  return (
    <Container>
      <Text/>
      <GoogleMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        withSpots={true}
        />
    </Container>
  );
};

export default Location;

const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin: 40px;
`;
