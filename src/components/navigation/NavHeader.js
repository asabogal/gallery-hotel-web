import React from 'react';
import styled from 'styled-components';
import {MenuButton} from '../utils/Buttons';
import logo from '../../images/gh_logo.svg';
import {Button} from '../utils/Buttons';

const NavHeader = () => {
  return (
    <Container>
      <MenuBtnContainer>
        <MenuButton/>
        <p>Menu</p>
      </MenuBtnContainer>
      <LogoContainer>
        <img src={logo} alt='hotel-logo'/>
      </LogoContainer>
      <div>
      <a href='https://clients.innroad.com/gallery/property.aspx' style={{paddingLeft: '40px'}}><Button>RESERVE A ROOM</Button></a>
      </div>
    </Container>
  );
};

export default NavHeader;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  background-color: white;
`;

const MenuBtnContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    padding-left: 10px;
  }
  
`;

const LogoContainer = styled.div`
  height: auto;
  width: 200px;
  img {
    width: 100%;
    height: auto;
  }
`;