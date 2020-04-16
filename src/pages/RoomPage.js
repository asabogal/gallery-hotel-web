import React from 'react';
import HeroHeader from '../components/rooms/roomContainer/HeroHeader';
// data
import {roomData} from '../data/rooms/roomPageData';

const RoomPage = (props) => {

  const path = props.match.params.name;
  const room = roomData.find(room => room.path === path);

  return (
    <div>
      <HeroHeader 
        image={room.images.heroImage}
        name={room.name}
        avgRate={room.avgRate}
      />
    </div>
  );
};

export default RoomPage;

