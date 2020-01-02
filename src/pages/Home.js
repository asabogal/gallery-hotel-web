import React, { Component } from 'react';
import styled from 'styled-components';
import Video from '../components/home/Video';
import Header from '../components/header_footer/Header';
import HeadMessage from '../components/header_footer/HeadMessage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <HeadMessage/>
        <Video/>
        <Header/>
        <PageContainer/>
      </div>
    );
  }
}

export default Home;

const PageContainer = styled.div`
  padding: 10px;
`;