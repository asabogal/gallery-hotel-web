import React from 'react';
import styled from 'styled-components';

const Map = () => {
  return (
    <div>
      <MapFrame className="google-map" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.3776436396333!2d-72.36227024889462!3d41.104442779189384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e89f347ae10345%3A0xeed7f69119a63ec!2s437+Main+St%2C+Greenport%2C+NY+11944!5e0!3m2!1sen!2sus!4v1564625044310!5m2!1sen!2sus" 
        frameborder="0" style={{border:"0"}} allowfullscreen>
      </MapFrame>
    </div>
  );
};

export default Map;

const MapFrame = styled.iframe`
  height: 100%;
  width: 100%;
`;