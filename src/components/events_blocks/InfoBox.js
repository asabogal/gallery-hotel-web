import React from 'react';
import styled from 'styled-components';

const InfoBox = () => {
  return (
    <Container>
      <h2>From intimate and private events, to entire hotel takeovers </h2>
      <p>We have multiple spaces to choose from for next event. Our gorgeous Garden is the ideal space for a delightful brunch or an indulgent sunset rosé hour. The Gallery and Lounge are ideal for a stylish and intimate evening cocktail reception. Our Media room can be transformed into a meeting space for your next corporate meeting. You may choose single spaces, or a combination of them for up to 100 guests.</p>
      <p>Group reservations and wedding room blocks are available for partial or full hotel buyout. Contact us for more information.</p>
    </Container>
  );
};

export default InfoBox;

const Container = styled.div`
`;