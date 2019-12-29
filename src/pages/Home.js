import React, { Component } from 'react';
import styled from 'styled-components';
import Video from '../components/home/Video';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <PageContainer>
        <Video/>
      </PageContainer>
    );
  }
}

export default Home;

const PageContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
`;