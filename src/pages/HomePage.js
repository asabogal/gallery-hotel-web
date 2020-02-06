import React, { Component } from 'react';
import styled from 'styled-components';
import Video from '../components/home/Video';
import Header from '../components/header_footer/Header';
import HeadMessage from '../components/header_footer/HeadMessage';
import FeaturedSection from '../components/home/FeaturedSection';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <HeadMessage/>
        <Header/>
        <Video/>
        <PageContainer>
          <FeaturedSection left/>
        </PageContainer>
      </div>
    );
  }
}

export default Home;

const PageContainer = styled.div`
  padding: 10px;
`;