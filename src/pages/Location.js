import React from 'react';
import styled from 'styled-components';
import Text from '../components/location/Text';
import Map from '../components/location/Map';

const Location = () => {
  return (
    <Container>
      <Text/>
      <Map/>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;