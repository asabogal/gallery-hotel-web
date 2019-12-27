import React from 'react';
import styled from 'styled-components';
import logo from '../../images/gh_logo.svg'
import {Picture} from '../utils/Pictures'

const Header = () => {
  return (
    <Container>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Rooms</li>
      </nav>
      <div style={{padding: '10px 0px 10px 0px'}}>
        <Picture logo={logo} height='85px' width='200px'/>
      </div>
      <nav>
        <li>Contact Us</li>
        <li>Reserve a Room</li>
      </nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
  background: none;
  :hover {
    background-color: white;
  }
  nav {
    display: flex;
  }
  li {
    list-style: none;
    text-decoration: none;
    padding: 30px;
  }
`;