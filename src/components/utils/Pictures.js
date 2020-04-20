import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Picture = (props) => {
  return (
   <Image src={props.picture} alt={props.alt}/>
  )
}

export const Thumbnail = (props) => {
  if (props.link) {
    return (
      <Link to={props.link}>
        <ThumbnailContainer>
          <img src={props.image} alt={props.alt}/>
          {props.heading &&
           <ThumbnailInfo>
            <h4>{props.heading}</h4>
            <p>{props.info}</p>
          </ThumbnailInfo>
          }
      </ThumbnailContainer>
      </Link>
      )
  } else {
    return (
      <ThumbnailContainer>
        <img src={props.image} alt={props.alt}/>
        {props.heading &&
          <ThumbnailInfo>
            <h4>{props.heading}</h4>
            <p>{props.info}</p>
          </ThumbnailInfo>
        }
      </ThumbnailContainer>
    ) 
  }
}

const Image = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
`;

const ThumbnailInfo = styled.div`
  position: absolute;
  width: 80%;
  bottom: 1rem;
  left: 1rem;
  background-color: rgba(252, 252, 252, 0.9);
  margin: 0 1rem;
  padding: 0 1rem;
  p {
    margin: 0;
  }
`;