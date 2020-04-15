// images
import kingDeck from '../../images/rooms/room_pictures/king_deck/kingdeck.png';
import queenDeck from '../../images/rooms/room_pictures/queen_deck/queendeck.png';
import standard from '../../images/rooms/room_pictures/standard_room/standard3.png';
import kingLoft from '../../images/rooms/room_pictures/king_loft/kingloft5.png';
import gardenSuite from '../../images/rooms/room_pictures/garden_suite/gardensuite.png';
import privateSuite from '../../images/rooms/room_pictures/private_suite/privatesuite.png';
// icons
import twoPersons from '../../images/rooms/icons/cards/two_persons.svg';
import threePersons from '../../images/rooms/icons/cards/three_persons.svg';
import fourPersons from '../../images/rooms/icons/cards/four_persons.svg';
import queenBed from '../../images/rooms/icons/cards/queenBed.svg';
import kingBed from '../../images/rooms/icons/cards/kingBed.svg';
import sofabed from '../../images/rooms/icons/cards/sofabed.svg';
import shower from '../../images/rooms/icons/cards/shower.svg';
import jacuzzi from '../../images/rooms/icons/cards/jacuzzi.svg';
import deck from '../../images/rooms/icons/cards/deck.svg';
import accessible from '../../images/rooms/icons/cards/accessibility.svg';

export const cardData = [
  {
    name: 'Standard Queen',
    image: standard,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    features: {
      'Sleeps Two': twoPersons,
      'Bed Type': queenBed,
      'Shower Type': shower
    },
    link: '/rooms/standard'
  },
  {
    name: 'King Loft',
    image: kingLoft,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    features: {
      'Sleeps Two': twoPersons,
      'Bed Type': kingBed,
      'Shower Type': shower
    },
    link: '/rooms/kingloft'
  },
  {
    name: 'Queen with Deck',
    image: queenDeck,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    features: {
      'Sleeps Two': twoPersons,
      'Bed Type': queenBed,
      'Shower Type': shower,
      'Sun Deck': deck
    },
    link: '/rooms/queendeck'
  },
  {
    name: 'King with Deck',
    image: kingDeck,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    features: {
      'Sleeps Two': twoPersons,
      'Bed Type': kingBed,
      'Shower Type': shower,
      'Sun Deck': deck
    },
    link: '/rooms/kingdeck'
  },
  {
    name: 'Garden Suite',
    image: gardenSuite,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    features: {
      'Sleeps Four': fourPersons,
      'Bed Type': queenBed,
      'Sofa Bed': sofabed,
      'Shower Type': shower,
      'Accessible': accessible
    },
    link: '/rooms/gardensuite'
  },
  {
    name: 'Private Suite',
    image: privateSuite,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    features: {
      'Sleeps Three': threePersons,
      'Bed Type': kingBed,
      'Sofa Bed': sofabed,
      'Shower Type': jacuzzi,
      'Sun Deck': deck
    },
    link: '/rooms/privatesuite' 
  }
]



