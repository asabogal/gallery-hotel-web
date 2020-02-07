import React from 'react';
import styled from 'styled-components';

const FeaturedSection = ({title, description, links, image, side}) => {
  return (
    <Wrapper side={side}>
      <TextContainer>
        <h1>{title}</h1>
        <h5>
          {description}
        </h5>
        <ul>
          {
            Object.entries(links).map(([link, icon]) => {
              if (icon && typeof icon !== 'number') {
                return <Links key={link}><img src={icon} alt='icon'/> {link}</Links>
              } else {
                return <Links key={link}><span>*</span> {link}</Links>
              }
            })
          }
        </ul>
      </TextContainer>
      <ImageContainer>
        <img src={image} alt='featured'/>
      </ImageContainer>
    </Wrapper>
  );
};

export default FeaturedSection;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: ${(props => props.side === 'right' ? 'row-reverse' : 'row')};
`;

const TextContainer = styled.div`
  flex: 0 1 35%;
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