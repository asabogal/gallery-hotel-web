import React from 'react';
import styled from 'styled-components';
import {GoogleMap} from 'react-google-maps';

const Map = () => {
  return (
    <Container>
      <GoogleMap/>
    </Container>
  );
};

export default Map;

const Container = styled.div`
`;