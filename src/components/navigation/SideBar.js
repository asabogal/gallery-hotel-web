import React from 'react';
import styled from 'styled-components';

const SideBar = (props) => {
  return (
    <Container side={props.side}>
      {props.children}
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  position: absolute;
  top: 0;
  ${(props => props.side === 'left' ? 'left: 0' : 'right: 0')}
  height: 100%;
  width: 3rem;
  display: flex;
  justify-content: start;
  align-content: center;
  background-color: white;
  z-index: 900;
`;