import React, {useEffect} from 'react';
import styled from 'styled-components';
import Video from '../components/utils/Video';
import AboutSection from '../components/home/AboutSection';
import ExperienceSection from '../components/home/ExperienceSection';
import EatDrinkSection from '../components/home/EatDrinkSeaction';
import LocationSection from '../components/home/LocationSection';
import InstagramSection from '../components/home/InstagramSection';
import CovidNotice from '../components/home/CovidNotice';
// video
import intro from '../videos/intro_video.mp4';
// styled
import {PageContainer} from '../components/utils/StyledLayouts';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div>
      <Video video={intro}/>
      <PageContainer>
        <ContentWrapper>
          <CovidNotice/>
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
  grid-template-rows: repeat(6, auto);
  gap: 5rem;
`;