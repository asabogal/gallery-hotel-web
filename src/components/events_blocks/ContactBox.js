import React from 'react';
import styled from 'styled-components';
import {Button} from '../utils/Buttons';
import {Link} from 'react-router-dom';

const ContactBox = () => {
  return (
    <Container>
      <TextContainer>
        <h4>CONTACT</h4>
        <ul>
          <li><p>Ale Bolt</p></li>
          <li><p>General Manager</p></li>
          <li><p>admin@galleryhotelny.com</p></li>
          <li><p>631-477-4000</p></li>
        </ul>
      </TextContainer>
      <RequestContainer>
      <h3>REQUEST A PROPOSAL</h3>
      <Link to='/contact'>
        <Button>Contact Us</Button>
      </Link>
    </RequestContainer>
    </Container>
  );
};

export default ContactBox;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 50px;
  justify-self: center;
  align-self: center;
  border: 2px solid #93e9d9;
  padding: 10px 20px;
  text-align: left;
  width: 100%;
  background-color: white;
  margin: 0 auto;
  h4, h3 {
    font-size: 1.0rem;
    margin: 0;
  }
  li {
    list-style: none;
    color: inherit;
    margin-left: -20px;
    font-size: 14px;
  }
`;

const TextContainer = styled.div`
  margin: 0 auto;
`;

const RequestContainer = styled.div`
  justify-self: center;
  align-self: center;
  margin: 0 auto;
  text-align: center;
  button {
    margin-top: 10px;
  }
`;