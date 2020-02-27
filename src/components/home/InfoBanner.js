import React from 'react';
import styled from 'styled-components';

const InfoBanner = () => {
  return (
    <Container>
      <div>
        <h2>Hotel</h2>
        <h1>631-477-4000</h1>
        <p>439 Main Street</p>
        <p>info@galleryhotelny.com</p>
      </div>
      <div>
        <h2>KonTiki</h2>
        <h1>631-477-4000</h1>
        <p>439 Main Street</p>
        <p>kontiki@galleryhotelny.com</p>
      </div>
    </Container>
  );
};

export default InfoBanner;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #002b5c;
  color: white;
  padding: 10px 0px;
  justify-content: center;
  div {
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-right: 40px;
  }
  h1 {
    font-size: 25px;
    font-weight: 300;
  }
  h1, h2, p {
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;