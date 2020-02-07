import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialBar = (props) => {
  return (
    <Container>
      <a href="https://www.instagram.com/galleryhotelny/">
        <FontAwesomeIcon 
          icon={faInstagram} 
          size={props.size}
          color={props.color} 
        />
      </a>

      <a href="https://www.facebook.com/galleryhotelny/">
        <FontAwesomeIcon 
          icon={faFacebookF} 
          size={props.size}
          color={props.color} 
        />
      </a>

      <a href="mailto:info@galleryhotelny.com">
        <FontAwesomeIcon 
          icon={faEnvelope} 
          size={props.size}
          color={props.color} 
        />
        </a>
     </Container>
  );
};

export default SocialBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: inherit;
    padding: 18px 0px;
    cursor: pointer;
  }
`;