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
  width: 100vw;
`;