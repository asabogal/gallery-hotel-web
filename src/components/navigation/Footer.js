import React from 'react';
import styled from 'styled-components';
import SignupForm from '../utils/SignupForm';
import SocialBar from '../utils/SocialBar';
import {Link} from 'react-router-dom';

import logo from '../../images/gh_logo.svg';

const Footer = () => {
  return (
    <Container>
      <InfoWrapper>
        <LogoContainer>
          <img src={logo} alt='hotel-logo'></img>
        </LogoContainer>
        <div>
          <h4>info@galleryhotelny.com</h4>
          <h4>+1 631-477-4000</h4>
        </div>
        <div>
          <h5>439 Main Street</h5>
          <h5>Greenport, NY 11944</h5>
        </div>
      </InfoWrapper>
      <LinksWrapper>
        <ul>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/location'>Location</Link>
          </li>
          <li>
            <Link to='/rooms'>Rooms</Link>
          </li>
          <li>
            <Link to='/amenities'>Amenities</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/eat'>Eat and Drink</Link>
          </li>
          <li>
            <Link to='/events'>Events and Room Blocks</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/reserve'>Reserve a Room</Link>
          </li>
        </ul>
      </LinksWrapper>
      <SignupForm/>
      <SocialBar size='lg' direction='column'/>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(222, 226, 238, 0.6);
  border: 1px solid #4b698b;
  height: auto;
  padding: 40px 10vw;
  h4 {
    font-size: 14px;
    font-weight: 800;
    margin-block-start: 3px;
    margin-block-end: 3px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h5 {
    font-size: 14px;
    font-weight: 200;
    margin-block-start: 3px;
    margin-block-end: 3px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

const LogoContainer = styled.div`
  justify-self: center;
  height: auto;
  width: 150px;
  margin-right: 20px;
  img {
    width: 100%;
    height: auto;
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  row-gap: 12px;
`;

const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  li {
    list-style: none;
    padding-top: 12px;
  }
  a {
    text-decoration: none;
    color: inherit;
    :hover {
      text-decoration: underline;
    }
  }
`;