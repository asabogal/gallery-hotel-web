import React from 'react';
import styled from 'styled-components';

const HotelRules = () => {
  return (
    <div>
      <Title>
        <h4>HOTEL RULES</h4>
      </Title>
      <TextContainer>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <ul>
          <li>Check-In: 3pm</li>
          <li>Check-Out: 11am</li>
          <li>Adults Only</li>
          <li>No Smoking</li>
          <li>No Pets</li>
        </ul>
      </TextContainer>
    </div>
  );
};

export default HotelRules;

const Title = styled.div`
  text-align: left;
  h4 {
    font-size: 16px;
    letter-spacing: 0;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
`;

const TextContainer = styled.div`
  display: grid;
  column-gap: 5vw;
  grid-template-columns: 2fr 1fr;
  font-size: 14px;
`;