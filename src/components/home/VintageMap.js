import React from 'react';
import styled from 'styled-components';
import {Picture} from '../utils/Pictures';
import vintagemap from '../../images/home/maps/vintagemap.jpg';

const VintageMap = () => {
  return (
    <MapContainer>
      <Picture picture={vintagemap} alt='vintage-map'/>
    </MapContainer>
  );
};

export default VintageMap;

const MapContainer = styled.div`
  width: 100%;
  max-height: 60vh;
  height: auto;
  /* margin: 0 auto; */
`;