import React from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import styled from 'styled-components';
import {MenuButton} from '../utils/Buttons';
import logo from '../../images/gh_logo.svg';
import {Button} from '../utils/Buttons';

const NavHeader = (props) => {

  const scrollPosition = useScrollPosition();
  let scrolling = scrollPosition.difference;
  let position = scrollPosition.currentPosition;

  let showHeader;
  if (scrolling <= -1) showHeader = true;
  if (position <= 0 && scrolling >= 0) showHeader = true;

  return (
    <Container show={showHeader}>
      <MenuBtnContainer onClick={props.toggleSideNav}>
        <MenuButton/>
        <p>Menu</p>
      </MenuBtnContainer>
      <LogoContainer>
        <img src={logo} alt='hotel-logo'/>
      </LogoContainer>
      <ReserveContainer>
        <a href='https://galleryhotelny.client.innroad.com'>
          <Button width='150px'>BOOK A ROOM</Button>
        </a>
      </ReserveContainer>
    </Container>
  );
};

export default NavHeader;

const Container = styled.div`
  position: sticky;
  top: 0;
  display: grid;
  opacity: ${props => props.show ? '1' : '0'};
  transition: 0.6s;
  background-color: white;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 80px;
  align-items: center;
  z-index: 900;
  margin: 5px 0px;
  padding: 0 40px;
  @media (max-width: 599px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40px;
    height: 50px;
    align-items: flex-start;
    p {
      font-size: 12px;
    }
    button {
      display: none;
    }
  }
`;

const MenuBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-self: self-start;
  p {
    margin-left: 20px;
  }
  
`;

const LogoContainer = styled.div`
  justify-self: center;
  width: auto;
  height: 90%;
  img {
    width: 100%;
    height: 70px;
  }
  @media (max-width: 599px) {
    justify-self: self-end;
    img {
      width: 100%;
      height: 40px;
    }
  } 
`;

const ReserveContainer = styled.div`
  justify-self: self-end;
`;