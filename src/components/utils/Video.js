import React from 'react';
import styled from 'styled-components'

const Video = ({video}) => {
  return (
    <VideoContainer video={video} height={height} width={width}>
      <video autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
    </VideoContainer>
  );
};

export default Video;

const VideoContainer = styled.div`
 video {
  min-height: 32vh;
  max-height: 90vh;
  object-fit: cover;
}
`;