import React from 'react';
import styled from 'styled-components';
import NavHeader from '../navigation/NavHeader';
import SideBar from '../navigation/SideBar';
import Video from './Video';
import SocialBar from '../utils/SocialBar';

const TopSection = () => {
  return (
    <Container>
      <NavHeader/>
      <SideBar side='left'>
        
      </SideBar>
      <SideBar side='right'>
        <SocialBar size='lg'/>
      </SideBar>
      <Video/>
    </Container>
  );
};

export default TopSection;

const Container = styled.div`
  position: relative;
  height: auto;
`;