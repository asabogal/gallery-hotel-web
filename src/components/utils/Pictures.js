import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Picture = (props) => {
  if (props.link) {
    return (
      <Link to={props.link}>
        <PictureContainer logo={props.logo} width={props.width} height={props.height} opacity={props.opacity}/>
      </Link>
      )
  } else {
    return <PictureContainer logo={props.logo} width={props.width} height={props.height} opacity={props.opacity}/>
  }

}

const PictureContainer = styled.div`
  background: url(${props => props.logo}) no-repeat;
  background-size: cover !important;
  background-position: start;
  width: ${props => props.width};
  height: ${props => props.height};
  opacity: ${props => props.opacity || '1'};
`;