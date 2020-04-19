import React from 'react';
import styled from 'styled-components';
import {Button} from '../utils/Buttons'
import {Link} from 'react-router-dom';

const MobileFooter = () => {
  return (
    <Container>
      <Link to='/reserve'>
        <Button width='100vw' background='#93e9d9' color='#0c284f'>BOOK NOW</Button>
      </Link>
    </Container>
  );
};

export default MobileFooter;

const Container = styled.nav`
  position: fixed;
  bottom: 0%;
  width: 100vw;
`;