import React from 'react';
import styled from 'styled-components';


// icons
import gps from '../../images/location/gps.svg';
import phone from '../../images/location/phone.svg';

const Text = () => {
  return (
    <Container>
      <h1>Location</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h1>Arrival</h1>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <InfoBox>
        <br></br>
        <h3>Find Us Here</h3>
        <li>
         <a href="https://goo.gl/maps/1VRrR5PhMrXCVvKm7" target="_blank" rel="noopener noreferrer"><img src={gps} alt='gps-icon'/>439 Main Street - Greenport, NY</a>
        </li>
        <li>
          <a href="tel: +1-631-477-4000"><img src={phone} alt='phone-icon'/>631-477-4000</a>
        </li> 
      </InfoBox>
    </Container>
  );
};

export default Text;

const Container = styled.div`
`;

const InfoBox = styled.ul`
  list-style: none;
  li {
    margin: 10px;
  }
  img {
    padding-right: 5px;
  }
  a {
    color: #002b5c;
    text-decoration: none;
  }

`;

