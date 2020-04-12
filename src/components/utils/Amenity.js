import React from 'react';
import styled from 'styled-components';

const Amenity = (props) => {
  return (
    <Container>
      <h2>{props.heading}</h2>
      <p>{props.description}</p>
    </Container>
  );
};

export default Amenity;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  border: 2px solid #b8e7df;
  padding: 10px 40px;
  text-align: left;
`;