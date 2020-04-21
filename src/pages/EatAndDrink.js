import React from 'react';
import styled from 'styled-components';
import HeroHeader from '../components/eat_drink/HeroHeader';
import InfoSection from '../components/eat_drink/InfoSection';
import Plates from '../components/eat_drink/Plates';
import Seating from '../components/eat_drink/Seating';
// styled
import {PageContainer} from '../components/utils/StyledLayouts';

const EatAndDrink = () => {
  return (
    <div>
      <HeroHeader/>
      <PageContainer>
        <InfoSection/>
        <Plates/>
        <Seating/>
      </PageContainer>
    </div>
  );
};

export default EatAndDrink;

