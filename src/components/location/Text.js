import React from 'react';
import styled from 'styled-components';
import ArrivalCards from './ArrivalCards';
import SpotCards from './SpotCards';

const Text = () => {
  return (
    <Container>
      <h2>Arrival</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <ArrivalCards />
      <h2>Local Spots</h2>
      <p>Greenport is Long Island's North Fork premier destination. Restaurants, shops and other area attractions are walking distance from the hotel. The east coast's best wineries and local farms are just a short drive away. Local transportation, designated driver service, and winery tours available.</p>
      <h4>Recommended</h4>
      <SpotCards />
    </Container>
  );
};

export default Text;

const Container = styled.div`
  padding-top: 40px;
  @media (max-width: 599px) {
    flex-direction: column;
    text-align: center;
  }
  h4 {
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 400;
    letter-spacing: 0px;
  }
`;

