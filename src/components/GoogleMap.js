import React from 'react';
import styled from 'styled-components';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

const Map = () => {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{lat: 41.104491, lng: -72.360118}}/>
  );
};

const MapGoogle = withScriptjs(withGoogleMap(Map));

// const GoolgeMap = () => {
//   return (
//     <Container>
//       <GoogleMap 
//         googleMapUrl={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `400px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//         />
//     </Container>
//   )
// };

export default MapGoogle;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
