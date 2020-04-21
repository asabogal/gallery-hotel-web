import React, { useEffect } from 'react';
import styled from 'styled-components';
import drinks from '../../images/eat_drink/Beverage Menu 2.1.pdf';
import dinner from '../../images/eat_drink/Food Menu 7.15.pdf';

const Menu = (props) => {

  useEffect(() => {
   window.scrollTo(0, 0); 
  })

  const menuImages = {
    'dinner': dinner,
    'drinks': drinks
  }

  const path = props.match.params.name;

  return (
    <Container>
      <embed
        src={menuImages[path]}
        type="application/pdf"
      />
      
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  display: grid;
  justify-items: center;
  height: 100vh;
  embed {
    display: block;
    height: 100%;
    width: 100%;
  }
`;