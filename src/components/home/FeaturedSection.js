import React from 'react';
import styled from 'styled-components';

const FeaturedSection = ({title, subTitle, description, features, link, image, side}) => {
  return (
    <Wrapper side={side}>
      <TextContainer>
        <h1>{title}</h1>
        { subTitle ? <h2>{subTitle}</h2> : null}
        <h5>
          {description}
        </h5>
        <ul>
          { 
            features ? 
              Object.entries(features).map(([feature, icon]) => {
                if (icon && typeof icon !== 'number') {
                  return <Links key={feature}><img src={icon} alt='icon'/> {feature}</Links>
                } else {
                  return <Links key={feature}>{feature}</Links>
                }
              })
            :
              null 
          }
          <br></br>
          {
            link ? 
              <div>
                <br></br>
                <AnchorDiv>
                 <Links><a href={link}> Visit {subTitle}</a> <span> &rarr;</span></Links>
                </AnchorDiv>
              </div>
            :
              null
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
  /* margin-top: 50px; */
`;

const TextContainer = styled.div`
  flex: 0 1 40%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  /* height: auto; */
  margin: 20px 30px;
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
  position: relative;
  flex: 1 1;
  /* width: 60%; */
  
  height: auto;
  img {
    position: absolute;
    width: 100%;
    height: auto;
    min-height: 80vh;
    max-height: 650px;
  }
`;

const Links = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  list-style: none;
  margin-bottom: 15px;
  padding-bottom:5px;
  width: 220px;
  border-bottom: 1px solid rgb(0, 43, 92, 0.2);
  img {
    padding-right: 10px;
  }

`;

const AnchorDiv = styled.div`
  cursor: pointer;
  a {
    font-size: 16px;
    font-weight: 900;
    text-decoration: none;
    color: inherit;
    padding-right: 10px;
  }
  span {
    font-size: 20px;
    transition: 0.5s;
  }
  &:hover {
    span {
      padding-left: 8px;
    }
  }
`;