import React from 'react';
import styled from 'styled-components';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

const Map = () => {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{lat: 41.104491, lng: -72.360118}}/>
  );
};

const MapGoogle = withScriptjs(withGoogleMap(Map));

export default MapGoogle;