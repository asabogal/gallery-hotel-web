import React from 'react';
import styled from 'styled-components';
import Amenity from '../components/utils/Amenity';
// styled
import {HeadingContainer} from '../components/utils/StyledLayouts';
//data
import {amenities} from '../data/amenities/Amenity';

const Amenities = () => {

  const renderAmenities = (data) => {
    return amenities.map(amenity => {
      return (
        <Amenity key={amenity.heading} heading={amenity.heading} description={amenity.description}/>
      )
    })
  }

  return (
    <PageContainer>
      <HeadingContainer>
        <h1>Amenities</h1>
        <h3>More than a good night's sleep. Everything that makes staying at The Gallery Hotel an experience to remember</h3>
      </HeadingContainer>
      <AmenitiesContainer>
        {renderAmenities(amenities)}
      </AmenitiesContainer>
    </PageContainer>
    
  );
};

export default Amenities;

const PageContainer = styled.div`
  display: grid;
  justify-content: center;
`;

const AmenitiesContainer = styled.div`
  display: grid;
  gap: 5vh;
  background-color: white;
  margin: 10vh 20vw;
`;