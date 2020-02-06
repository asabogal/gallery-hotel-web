import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../../images/gh_logo.svg';
import {Picture} from '../utils/Pictures';
import {Button} from '../utils/Buttons';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: false
    };
  }

  render() {
    return (
      <Container>
        <nav>
          <Link to='/about'><li>About</li></Link>
          <Link to='/rooms'><li>Our Rooms</li></Link>
          <Link to='/amenities'><li>Amenities</li></Link>
        </nav>
        <div style={{padding: '10px 0px 10px 0px'}}>
          <Picture link='/' logo={logo} height='85px' width='200px'/>
        </div>
        <nav>
          <Link to='/events'><li>Room Blocks & Events</li></Link>
          <Link to='/contact'><li>Contact Us</li></Link>
          <a href='https://clients.innroad.com/gallery/property.aspx' style={{paddingLeft: '40px'}}><Button>RESERVE A ROOM</Button></a>
        </nav>
      </Container>
    );
  }
};

export default Header;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  background-color: rgb(245, 247, 250);
  font-size: 15px;
  font-weight: 500;
  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  div {
    justify-self: center;
  }
  li {
    list-style: none;
    text-decoration: none;
    padding-bottom: 5px;
    :hover {
      border-bottom: 1px solid #002b5c;
    }
  }
  a {
    text-decoration: none;
    color: #002b5c;
  }
`;