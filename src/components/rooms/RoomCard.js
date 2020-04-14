import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Picture} from '../utils/Pictures';

const RoomCard = ({name, image, description, features, link}) => {

  const renderIcons = (features) => {
    return Object.entries(features).map(([feature, icon]) => {
      return <img key={feature} src={icon} alt={`${feature}-icon`}/>
    })
  }

  return (
    <Container>
      <ImageContainer>
        <Link to={link}>
          <Picture picture={image} alt='room-picture'/>
        </Link>
      </ImageContainer>
      <InfoContainer>
        <h4>{name}</h4>
        <IconsContainer>
          {renderIcons(features)}
        </IconsContainer>
        <p>{description}</p>
        <Link to={link}>EXPLORE</Link>
      </InfoContainer>
    </Container>
  );
};

export default RoomCard;

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;

const ImageContainer = styled.div`
  height: auto;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
  p {
    font-size: 14px;
  }
  a {
    font-size: 14px;
    text-decoration: none;
    color: #61d1be;
    :hover {
      text-decoration: underline;
    }
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  img {
    padding-right: 15px;
  }
  /* justify-content: space-between;
  justify-items: flex-start; */
`;

