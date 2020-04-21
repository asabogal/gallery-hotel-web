import React from 'react';
import styled from 'styled-components';
import SignupForm from '../utils/SignupForm';
import SocialBar from '../utils/SocialBar';
import {Link} from 'react-router-dom';
// media library
import Media from 'react-media';
// logo
import logo from '../../images/gh_logo.svg';

const Footer = () => {
  return (
    <Container>
      <InfoWrapper>
        <LogoContainer>
          <img src={logo} alt='hotel-logo'></img>
        </LogoContainer>
        <div>
          <a href="mailto:info@galleryhotelny.com"><h4>info@galleryhotelny.com</h4></a>
          <a href="tel: +1-631-477-4000"><h4>631-477-4000</h4></a>
        </div>
        <div>
          <h5>439 Main Street</h5>
          <h5>Greenport, NY 11944</h5>
        </div>
      </InfoWrapper>
      <LinksWrapper>
        <ul>
          <li>
            <Link to='/location'>Location</Link>
          </li>
          <li>
            <Link to='/rooms'>Rooms</Link>
          </li>
          <li>
            <Link to='/amenities'>Amenities</Link>
          </li>
          <li>
            <Link to='/eatdrink'>Eat and Drink</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/events'>Events & Blocks</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/policies'>Policies</Link>
          </li>
          <li>
            <Link to='/reserve'>Reserve a Room</Link>
          </li>
        </ul>
      </LinksWrapper>
      <FormWrapper>
        <SignupForm/>
      </FormWrapper>
      <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>
              {matches.small && <SocialBar size='lg' direction='row'/>}
              {matches.medium && <SocialBar size='lg' direction='row'/>}
              {matches.large && <SocialBar size='lg' direction='column'/>}
            </>
          )}
        </Media>
        
  
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  align-items: center;
  background-color: rgba(222, 226, 238, 0.6);
  border: 1px solid #4b698b;
  height: auto;
  justify-items: center;
  padding: 20px 40px;
  h4 {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    margin-block-start: 3px;
    margin-block-end: 3px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h5 {
    font-size: 14px;
    font-weight: 300;
    margin-block-start: 3px;
    margin-block-end: 3px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  a {
    text-decoration: none;
    color: inherit;
    :hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1023px) {
    grid-template-columns: 2fr 2fr;
    grid-template-rows: auto auto;
    row-gap: 5vh;
  }
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    row-gap: 5vh;
    text-align: center;
    img {
      display: none;
    }
  }
`;

const InfoWrapper = styled.div`
  justify-self: center;
  display: grid;
  grid-template-rows: repeat(3, auto);
  row-gap: 12px;
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

const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    padding-top: 12px;
    font-weight: 300;
    font-size: 14px;
  }
`;

const FormWrapper = styled.div`
  width: 60%;
`;

