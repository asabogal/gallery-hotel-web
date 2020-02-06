import React from 'react';
import styled from 'styled-components';
import facade from '../../images/home/FACADE1.jpg';

const FeaturedSection = ({title, description, links}) => {
  return (
    <Wrapper>
      <TextContainer>
        <h1>{title}</h1>
        <h5>
          {description}
        </h5>
        <ul>
          {
            links.map(link => <Links key={link}>{link}</Links>)
          }
        </ul>
      </TextContainer>
      <ImageContainer>
        <img src={facade} alt='hotel-property'/>
      </ImageContainer>
    </Wrapper>
  );
};

export default FeaturedSection;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: ${(props => props.left ? 'row-reverse' : 'row')};
`;

const TextContainer = styled.div`
  flex: 0 1 40%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-items: center;
  height: auto;
  margin: 20px;
  h1 {
    font-size: 44px;
    line-height: 58px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h5 {
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
  }
  ul {
    margin-left: -30px;
  }
`;

const ImageContainer = styled.div`
  flex: 1 1;
  width: 100%;
  margin: 20px;
  img {
    width: 100%;
    height: auto;
    min-height: 500px;
  }
`;

const Links = styled.li`
  font-size: 14px;
  list-style: none;
  margin-bottom: 15px;
  padding-bottom:5px;
  width: 180px;
  border-bottom: 1px solid rgb(0, 43, 92, 0.2);
;
`;