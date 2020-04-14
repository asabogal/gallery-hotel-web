import React from 'react';
import styled from 'styled-components';
import RoomCard from '../components/rooms/RoomCard';
// data
import {cardData} from '../data/rooms/cardData';
// styled
import {PageContainer, HeadingContainer} from '../components/utils/StyledLayouts';

const Rooms = () => {

  const renderCards = (cardData) => {
    return cardData.map(card => {
      return (
        <RoomCard 
          key={card.name} 
          name={card.name}
          image={card.image}
          description={card.description} 
          features={card.features}
          link={card.link}
        />
      )
    })
  }
  return (
    <PageContainer>
      <HeadingContainer>
        <h1>Our Rooms</h1>
        <h3>The hotel features 8 rooms, and 2 luxury suites. All come with Sumptuous Bedding, Indulgent Minibars, 100% Egyptian Cotton Bathrobes, and Complimentary Wireless Internet. Rooms with Sundeck available.</h3>
      </HeadingContainer>
      <Container>
        {renderCards(cardData)}
      </Container>
    </PageContainer>
  );
};

export default Rooms;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: auto auto;
  grid-gap: 5vw;
  background-color: white;
  margin-top: 50px;
`;