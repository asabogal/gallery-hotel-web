import React from 'react';
import styled from 'styled-components';
import {Button} from '../utils/Buttons'
import {Link} from 'react-router-dom';

const MobileFooter = () => {
  return (
    <Container>
      <Link to='/reserve'>
        <Button width='100vw' light>BOOK A ROOM</Button>
      </Link>
    </Container>
  );
};

export default MobileFooter;

const Container = styled.nav`
  position: sticky;
  bottom: 0%;
  width: 100vw;
`;