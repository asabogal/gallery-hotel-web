import React from 'react';
import styled from 'styled-components';

const RoomFeatures = ({features}) => {

  const renderFeatures = () => {
    return Object.entries(features).map(([feature, icon]) => {
      return (
        <ul key={feature}>
          <Feature key={feature}><img src={icon} alt='icon'/> {feature}</Feature>
        </ul>
      )
    })
  };

  return (
    <Container>
      <Title>
       <h4>ROOM FEATURES</h4>
      </Title>
      <FeaturesContainer>
        {renderFeatures()}
      </FeaturesContainer>
    </Container>
  );
};

export default RoomFeatures;

const Container = styled.div`
  margin: 0px 40px;
`;

const Title = styled.div`
  border-bottom: 1px solid lightgray;
  h4 {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0;
  }
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ul {
    padding: 0px 5px;
    margin-bottom: 10px;
  }
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 200;
  list-style: none;
  img {
    padding-right: 10px;
  }
`;