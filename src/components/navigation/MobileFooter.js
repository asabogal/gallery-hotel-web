import React from 'react';
import styled from 'styled-components';
import {Button} from '../utils/Buttons'

const MobileFooter = () => {
  return (
    <Container>
      <Button width='100vw' background='#61d1be'>Book Now</Button>
    </Container>
  );
};

export default MobileFooter;

const Container = styled.section`
  position: fixed;
  bottom: 0%;
  width: 100vw;
`;