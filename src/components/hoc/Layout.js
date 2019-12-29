import React from 'react';
import styled from 'styled-components';
import HeadMessage from '../header_footer/HeadMessage';
import Header from '../header_footer/Header';

const Layout = (props) => {
  return (
    <Container>
      <HeadMessage/>
      <Header/>
      {props.children}
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
  z-index: 999;
`;