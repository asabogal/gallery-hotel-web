import React from 'react';
import styled from 'styled-components'
import video from '../../videos/intro_video.mp4'

const Video = () => {
  return (
    <VideoContainer>
      <video autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
    </VideoContainer>
  );
};

export default Video;

const VideoContainer = styled.div`
  min-width: 100%; 
  min-height: 80%;
  width: auto; 
  z-index: -100;
  background-size: cover;
  overflow: hidden;
  video {
    height: auto;
  }
`;