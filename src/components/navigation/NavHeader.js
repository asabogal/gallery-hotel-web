import React from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import styled from 'styled-components';
import {MenuButton} from '../utils/Buttons';
import logo from '../../images/gh_logo.svg';
import {Button} from '../utils/Buttons';

const NavHeader = (props) => {

  const scrollPosition = useScrollPosition();
  let scrolling = scrollPosition.difference;

  return (
    <Container scroll={scrolling}>
      <MenuBtnContainer onClick={props.toggleSideNav}>
        <MenuButton/>
        <p>Menu</p>
      </MenuBtnContainer>
      <LogoContainer>
        <img src={logo} alt='hotel-logo'/>
      </LogoContainer>
      <ReserveContainer>
        <a href='https://clients.innroad.com/gallery/property.aspx'>
          <Button width='160px'>BOOK A ROOM</Button>
        </a>
      </ReserveContainer>
    </Container>
  );
};

export default NavHeader;

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: grid;
  opacity: ${props => props.scroll <=0 ? '1' : '0'};
  transition: 0.6s;
  background-color: white;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  z-index: 998;
  margin: 5px 0px;
`;

const MenuBtnContainer = styled.div`
justify-self: start;
  display: flex;
  align-items: center;
  margin-left: 50px;
  p {
    margin-left: 10px;
  }
  
`;

const LogoContainer = styled.div`
  justify-self: center;
  padding-right: 20px;
  height: auto;
  width: 200px;
  img {
    width: 100%;
    height: auto;
  }
`;

const ReserveContainer = styled.div`
  justify-self: flex-end;
  margin-right: 50px;
`;