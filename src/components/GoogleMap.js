import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';
import {mapStyle} from '../data/mapData/MapStyle';
import hotel from '../images/location/hotel.svg';


const Map = () => {
  return (
    <GoogleMap 
      defaultZoom={14} 
      defaultCenter={{lat: 41.104491, lng: -72.360118}}
      defaultOptions={{styles: mapStyle}}
    >
      <Marker 
        position={{lat: 41.104491, lng: -72.360118}}
        icon={hotel}
      />
    </GoogleMap>
  );
};

const MapGoogle = withScriptjs(withGoogleMap(Map));

export default MapGoogle;