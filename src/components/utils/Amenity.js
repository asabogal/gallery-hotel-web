import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Amenity = ({heading, description, link}) => {
  return (
    <Container>
      <h2>{heading}</h2>
      <p>{description}</p>
      { link && 
       <Link to={link}>EXPLORE</Link>
      }
      
    </Container>
  );
};

export default Amenity;

const Container = styled.div`
  display: grid;
  border: 2px solid #61d1be;
  padding: 10px 40px;
  text-align: left;
  a {
    font-size: 14px;
    text-align: right;
    color: #61d1be;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;