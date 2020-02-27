import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// images
import chairs from '../../images/home/instagram/chairs.png';
import garden from '../../images/home/instagram/garden_night.png';
import mess from '../../images/home/instagram/mess.png';
import reception from '../../images/home/instagram/reception.png';

const InstagramSection = () => {
  return (
    <Container>
      <Heading>
        <h1>Follow Us on Instagram</h1>
        <a href='https://www.instagram.com/galleryhotelny/' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size='2x'/>
          <p>@galleryhotelny</p>
        </a>
      </Heading>
      <Gallery>
        <Thumbnails>
          <img src={chairs}/> 
        </Thumbnails>
        <Thumbnails>
          <img src= {garden}/> 
        </Thumbnails>
        <Thumbnails>
         <img src={mess}/> 
        </Thumbnails>
        <Thumbnails>
          <img src={reception}/> 
        </Thumbnails>
      </Gallery>
    </Container>
  );
};

export default InstagramSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;

`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  border-bottom: 1px solid #002b5c;
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: inherit;
      text-decoration: none;
      
    }
    p {
      padding-left: 10px;
      font-size: 14px;
    }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 2rem;
  padding-top: 10px;
`;

const Thumbnails = styled.div`
  height: 100%;
  img {
    height: auto;
    width: 100%;
  }
`;