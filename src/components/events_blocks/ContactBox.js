import React from 'react';
import styled from 'styled-components';
import {Button} from '../utils/Buttons';
import {Link} from 'react-router-dom';

const ContactBox = () => {
  return (
    <Container>
      <TextContainer>
        <h4>CONTACT</h4>
        <p>Ale Bolt</p>
        <p>General Manager</p>
        <p>admin@galleryhotelny.com</p>
        <p>631-477-4000</p>
      </TextContainer>
      <RequestContainer>
      <h3>REQUEST A PROPOSAL</h3>
      <Link to='/contact'>
        <Button >Contact Us</Button>
      </Link>
    </RequestContainer>
    </Container>
  );
};

export default ContactBox;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  border: 2px solid #93e9d9;
  padding: 10px 20px;
  text-align: left;
  background-color: white;
  margin-top: 40px;
  h4, h3 {
    font-size: 1.0rem;
  }
  h3 {
    font-weight: 500;
  }
  p {
    font-size: 14px;
    margin: 5px;
  }
`;

const TextContainer = styled.div`
  text-align: center;
`;

const RequestContainer = styled.div`
  text-align: center;
  button {
    margin-top: 10px;
  }
`;