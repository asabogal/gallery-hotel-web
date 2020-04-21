import React from 'react';
import styled from 'styled-components';
import {CloseButton} from '../utils/Buttons';
import {Link} from 'react-router-dom';

const SideNav = (props) => {
  return (
    <Container open={props.open}>
      <BtnContainer>
        <CloseButton size='lg'
          color='white'
          click={props.click}
        />
      </BtnContainer>
      <section onClick={props.click}>
        <Link to='/'>HOME</Link>
      </section>
      <section onClick={props.click}>
        <Link to='/location'>LOCATION</Link>
      </section>
      <section onClick={props.click}>
        <Link to='/rooms'>ROOMS</Link>
      </section>
      <section onClick={props.click}>
        <Link to='/amenities'>AMENITIES</Link>
      </section>
      <section onClick={props.click}>
        <Link to='/eatdrink'>EAT & DRINK</Link>
      </section>
      <section onClick={props.click}>
        <Link to='/events_blocks'>EVENTS & BLOCKS</Link>
      </section>
      <section onClick={props.click}>
        <Link to='/contact'>CONTACT US</Link>
      </section>
      <section onClick={props.click}>
        <Link to='/'>RESERVE</Link>
      </section>
      
      
    </Container>
  );
};

export default SideNav;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #042142;
  box-shadow: 1px 0px 10px rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 30vw;
  min-width: 300px;
  z-index: 999;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.15s ease-out;
  section {
    align-items: center;
    padding-left:30px;
    :hover {
      background-color: #153963;
      cursor: pointer;
    }
  }
  a {
    display: block;
    width: 100%;
    font-size: 20px;
    text-decoration: none;
    color: white;
    padding: 20px;
    margin-left: 20px;
  }
`;