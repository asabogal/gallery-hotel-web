import React from 'react';
import styled from 'styled-components';
import Hero from '../utils/Hero';
// image
import bar from '../../images/eat_drink/bar2.png';

const HeroHeader = () => {

  const content = () => {
    return (
      <ContentContainer>
        <h2>KonTiki</h2>
        <h4>Eclectic Cousine</h4>
    </ContentContainer>
    )

  };

  return (
    <div>
      <Hero 
        image={bar}
        contentTop={content()}
        height='65vh'
      />
    </div>
  );
};

export default HeroHeader;

const ContentContainer = styled.div`
  color: white;
  text-align: center;
  h2 {
    font-size: 2.5rem;
  }
  h2, h4 {
    font-weight: 200;
    letter-spacing: 0px;
  }
  
`;