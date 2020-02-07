import React from 'react';
import styled from 'styled-components';
import {CloseButton} from '../utils/Buttons';

const SideNav = (props) => {
  return (
    <Container open={props.open}>
      <BtnContainer>
        <CloseButton size='lg'
          color='white'
          click={props.click}
        />
      </BtnContainer>
      
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
  width: 25%;
  min-width: 300px;
  z-index: 999;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.15s ease-out;
  section {
    display: grid;
    grid-template-columns: 30px 100px;
    align-items: center;
    padding-left:30px;
    :hover {
      background-color: #1F5061;
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