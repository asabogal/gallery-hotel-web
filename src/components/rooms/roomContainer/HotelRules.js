import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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
          <li><Link to='/policies'>Hotel Policies</Link></li>
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
`;

const TextContainer = styled.div`
  display: grid;
  column-gap: 5vw;
  grid-template-columns: 2fr 1fr;
  font-size: 14px;
  p {
    font-size: 14px;
    font-weight: 200;
  }
  li {
    font-weight: 200;
  }
  a {
    text-decoration: none;
    color: inherit;
    :hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  } 
  @media (min-width: 600px) and (max-width: 992px) {
    grid-template-columns: 2fr 1fr ;
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  } 
`;