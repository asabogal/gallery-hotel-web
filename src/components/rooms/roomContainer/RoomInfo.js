import React from 'react';
import styled from 'styled-components';

const RoomInfo = ({roomType, sleeps, maxSleeps, description}) => {
  return (
    <Container>
      <Titles>
        <h4>{roomType}</h4><h4>&bull;</h4><h4>SLEEPS {sleeps}</h4>        
      </Titles>
      <Description>
        <p>{description}</p>
      </Description>
    </Container>
  );
};

export default RoomInfo;

const Container = styled.div`
  border-bottom: 1px solid lightgray; 
  p {
    font-size: 14px;
  }
`;

const Titles = styled.div`
  display: flex;
  h4 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0;
    padding-right: 1vw;
  }
`;

const Description = styled.div`
`;