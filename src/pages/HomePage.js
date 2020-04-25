import React from 'react';
import styled from 'styled-components';
import Video from '../components/utils/Video';
import AboutSection from '../components/home/AboutSection';
import ExperienceSection from '../components/home/ExperienceSection';
import EatDrinkSection from '../components/home/EatDrinkSeaction';
import LocationSection from '../components/home/LocationSection';
import InstagramSection from '../components/home/InstagramSection';
// video
import intro from '../videos/intro_video.mp4';
// styled
import {PageContainer} from '../components/utils/StyledLayouts';

const Home = () => {

  return (
    <div>
      <Video video={intro}/>
      <PageContainer>
        <ContentWrapper>
          <AboutSection/>
          <ExperienceSection/>
          <EatDrinkSection/>         
          <LocationSection/>
          <InstagramSection/>
        </ContentWrapper>
      </PageContainer>
    </div>
  );
}

export default Home;

const ContentWrapper = styled.div`
  display: grid;
  gap: 3rem;
`;