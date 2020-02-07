import React from 'react';
import styled from 'styled-components';
import {MenuButton} from '../utils/Buttons';
import logo from '../../images/gh_logo.svg';
import {Button} from '../utils/Buttons';

const NavHeader = (props) => {
  return (
    <Container>
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  z-index: 900;
  margin: 5px 50px;
`;

const MenuBtnContainer = styled.div`
justify-self: start;
  display: flex;
  align-items: center;
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
`;