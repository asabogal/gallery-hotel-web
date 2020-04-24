import React from 'react';
import styled from 'styled-components';
import InfoBox from '../components/events_blocks/InfoBox';
import ContactBox from '../components/events_blocks/ContactBox';
import ImageBox from '../components/events_blocks/ImageBox';
// styled
import {PageContainer} from '../components/utils/StyledLayouts';

const EventsBlocks = () => {
  return (
    <PageContainer>
      <Container>
        <InfoContainer>
        <InfoBox/>
          <ContactContainer>
          <ContactBox/>
        </ContactContainer>
        </InfoContainer>
        <ImageBox/>
      </Container>
    </PageContainer>
  );
};

export default EventsBlocks;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));
  gap: 40px;
  max-width: 100%;
  margin-top: 50px;
`;

const InfoContainer = styled.div`
 
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;