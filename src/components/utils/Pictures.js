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
        <ThumbnailContainer picture={props.picture} width={props.width} height={props.height} opacity={props.opacity}/>
      </Link>
      )
  } else {
    return <ThumbnailContainer picture={props.picture} width={props.width} height={props.height} opacity={props.opacity}/>
  }
}

const Image = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const ThumbnailContainer = styled.div`
  background: url(${props => props.picture}) no-repeat;
  background-size: cover !important;
  background-position: center center;
  width: ${props => props.width};
  height: ${props => props.height};
  opacity: ${props => props.opacity || '1'};
`;