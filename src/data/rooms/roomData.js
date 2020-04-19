//  images
  // standard
import standard3 from '../../images/rooms/room_pictures/standard_room/standard3.png';
import standard4 from '../../images/rooms/room_pictures/standard_room/standard4.png';
import standard7 from '../../images/rooms/room_pictures/standard_room/standard7.png';
import standard8 from '../../images/rooms/room_pictures/standard_room/standard8.png';
  // kingloft 
import kingLoft5 from '../../images/rooms/room_pictures/king_loft/kingloft5.png'; 
import kingLoft6 from '../../images/rooms/room_pictures/king_loft/kingloft6.png'; 
  // queenDeck
import queenDeck from '../../images/rooms/room_pictures/queen_deck/queendeck.png';   
  // kingDeck
import kingDeck from '../../images/rooms/room_pictures/king_deck/kingdeck.png';
  // gardenSuite
import gardenSuite from '../../images/rooms/room_pictures/garden_suite/gardensuite.png'; 
import gardenSuite2 from '../../images/rooms/room_pictures/garden_suite/gardensuite2.png';
import gardenSuite3 from '../../images/rooms/room_pictures/garden_suite/gardensuite3.png';
import gardenSuite4 from '../../images/rooms/room_pictures/garden_suite/gardensuite4.png';
  // privateSuite
import privateSuite from '../../images/rooms/room_pictures/private_suite/privatesuite.png'; 
import privateSuite2 from '../../images/rooms/room_pictures/private_suite/privatesuite2.png';
import privateSuite3 from '../../images/rooms/room_pictures/private_suite/privatesuite3.png';
import privateSuite4 from '../../images/rooms/room_pictures/private_suite/privatesuite4.png';
import privateSuiteDeck from '../../images/rooms/room_pictures/private_suite/privatesuite_deck.png';   
import privateSuiteTub from '../../images/rooms/room_pictures/private_suite/privatesuite_tub.png';   
// large icons
import twoPersonsLarge from '../../images/rooms/icons/cards/two_persons.svg';
import threePersonsLarge from '../../images/rooms/icons/cards/three_persons.svg';
import fourPersonsLarge from '../../images/rooms/icons/cards/four_persons.svg';
import queenBedLarge from '../../images/rooms/icons/cards/queenBed.svg';
import kingBedLarge from '../../images/rooms/icons/cards/kingBed.svg';
import sofabedLarge from '../../images/rooms/icons/cards/sofabed.svg';
import showerLarge from '../../images/rooms/icons/cards/shower.svg';
import jacuzziLarge from '../../images/rooms/icons/cards/jacuzzi.svg';
import deckLarge from '../../images/rooms/icons/cards/deck.svg';
import accessibleLarge from '../../images/rooms/icons/cards/accessibility.svg';
// small icons
import twoPersons from '../../images/rooms/icons/room_page/two_persons.svg';
import threePersons from '../../images/rooms/icons/room_page/three_persons.svg';
import fourPersons from '../../images/rooms/icons/room_page/four_persons.svg';
import queenBed from '../../images/rooms/icons/room_page/queenBed.svg';
import kingBed from '../../images/rooms/icons/room_page/kingBed.svg';
import sofabed from '../../images/rooms/icons/room_page/sofabed.svg';
import shower from '../../images/rooms/icons/room_page/shower.svg';
import jacuzzi from '../../images/rooms/icons/room_page/jacuzzi.svg';
import deck from '../../images/rooms/icons/room_page/deck.svg';
import tv from '../../images/rooms/icons/room_page/tv.svg';
import bedding from '../../images/rooms/icons/room_page/bedding.svg';
import toiletries from '../../images/rooms/icons/room_page/toiletries.svg';
import minibar from '../../images/rooms/icons/room_page/minibar.svg';
import wifi from '../../images/rooms/icons/room_page/wifi.svg';
import hairDryer from '../../images/rooms/icons/room_page/hairDryer.svg';
import bathrobes from '../../images/rooms/icons/room_page/bathrobes.svg';
import acUnit from '../../images/rooms/icons/room_page/acUnit.svg';
import housekeeping from '../../images/rooms/icons/room_page/housekeeping.svg';
import accessible from '../../images/rooms/icons/room_page/accessibility.svg';

export const roomData = [
  {
    name: 'Standard Queen',
    avgRate: 288,
    roomType: 'Guest Room',
    sleeps: 2,
    maxSleeps: null,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cardFeatures: {
      'Sleeps Two': twoPersonsLarge,
      'Bed Type': queenBedLarge,
      'Shower Type': showerLarge
    },
    features: {
      'Two Adults': twoPersons,
      'Queen Bed': queenBed,
      'Pressure Shower': shower,
      'Acca Kappa Toiletries': toiletries,
      'Bathrobes': bathrobes,
      '400 Thread Count Bedding': bedding,
      'Indulgent Minibar': minibar,
      'Flat Screen & Cable TV': tv,
      'High-Speed Wi-Fi': wifi,
      'Hair Dryer': hairDryer,
      'Individual AC Unit': acUnit,
      'Daily Housekeeping': housekeeping
    },
    images: {
      cardImage: standard3,
      heroImage: standard3,
      other: [standard8, standard4, standard7, standard3]
    },
    link: '/rooms/standard',
    path: 'standard'
  },

  {
    name: 'King Loft',
    avgRate: 323,
    roomType: 'Guest Room',
    sleeps: 2,
    maxSleeps: null,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cardFeatures: {
      'Sleeps Two': twoPersonsLarge,
      'Bed Type': kingBedLarge,
      'Shower Type': showerLarge
    },
    features: {
      'Two Adults': twoPersons,
      'King Bed': kingBed,
      'Pressure Shower': shower,
      'Acca Kappa Toiletries': toiletries,
      'Bathrobes': bathrobes,
      '400 Thread Count Bedding': bedding,
      'Indulgent Minibar': minibar,
      'Flat Screen & Cable TV': tv,
      'High-Speed Wi-Fi': wifi,
      'Hair Dryer': hairDryer,
      'Individual AC Unit': acUnit,
      'Daily Housekeeping': housekeeping
    },
    images: {
      cardImage: kingLoft5,
      heroImage: kingLoft5,
      other: [kingLoft6, kingLoft5]
    },
    link: '/rooms/kingloft',
    path: 'kingloft'
  },

  {
    name: 'Queen With Deck',
    avgRate: 323,
    roomType: 'Guest Room',
    sleeps: 2,
    maxSleeps: null,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cardFeatures: {
      'Sleeps Two': twoPersonsLarge,
      'Bed Type': queenBedLarge,
      'Shower Type': showerLarge,
      'Sun Deck': deckLarge
    },
    features: {
      'Two Adults': twoPersons,
      'Queen Bed': queenBed,
      'Sun Deck': deck,
      'Pressure Shower': shower,
      'Acca Kappa Toiletries': toiletries,
      'Bathrobes': bathrobes,
      '400 Thread Count Bedding': bedding,
      'Indulgent Minibar': minibar,
      'Flat Screen & Cable TV': tv,
      'High-Speed Wi-Fi': wifi,
      'Hair Dryer': hairDryer,
      'Individual AC Unit': acUnit,
      'Daily Housekeeping': housekeeping
    },
    images: {
      cardImage: queenDeck,
      heroImage: queenDeck,
    },
    link: '/rooms/queendeck',
    path: 'queendeck'
  },

  {
    name: 'King With Deck',
    avgRate: 353,
    roomType: 'Guest Room',
    sleeps: 2,
    maxSleeps: null,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cardFeatures: {
      'Sleeps Two': twoPersonsLarge,
      'Bed Type': kingBedLarge,
      'Shower Type': showerLarge,
      'Sun Deck': deckLarge
    },
    features: {
      'Two Adults': twoPersons,
      'King Bed': kingBed,
      'Sun Deck': deck,
      'Pressure Shower': shower,
      'Acca Kappa Toiletries': toiletries,
      'Bathrobes': bathrobes,
      '400 Thread Count Bedding': bedding,
      'Indulgent Minibar': minibar,
      'Flat Screen & Cable TV': tv,
      'High-Speed Wi-Fi': wifi,
      'Hair Dryer': hairDryer,
      'Individual AC Unit': acUnit,
      'Daily Housekeeping': housekeeping
    },
    images: {
      cardImage: kingDeck,
      heroImage: kingDeck
    },
    link: '/rooms/kingdeck',
    path: 'kingdeck'
  },

  {
    name: 'Garden Suite',
    avgRate: 550,
    roomType: 'Suite',
    sleeps: 4,
    maxSleeps: 6,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cardFeatures: {
      'Sleeps Four': fourPersonsLarge,
      'Bed Type': queenBedLarge,
      'Sofa Bed': sofabedLarge,
      'Shower Type': showerLarge,
      'Accessible': accessibleLarge
    },
    features: {
      'Four Adults': fourPersons,
      'Additional Two (fee)': twoPersons,
      '2 Queen Beds': queenBed,
      '2 Sofa Beds': sofabed,
      'Accessible Room': accessible,
      'Pressure Shower': shower,
      'Acca Kappa Toiletries': toiletries,
      'Bathrobes': bathrobes,
      '400 Thread Count Bedding': bedding,
      'Indulgent Minibar': minibar,
      'Flat Screen & Cable TV': tv,
      'High-Speed Wi-Fi': wifi,
      'Hair Dryer': hairDryer,
      'Individual AC Unit': acUnit,
      'Daily Housekeeping': housekeeping
    },
    images: {
      cardImage: gardenSuite,
      heroImage: gardenSuite3,
      other: [gardenSuite, gardenSuite2, gardenSuite4, gardenSuite3]
    },
    link: '/rooms/gardensuite',
    path: 'gardensuite'
  },

  {
    name: 'Private Suite',
    avgRate: 650,
    roomType: 'Suite',
    sleeps: 2,
    maxSleeps: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cardFeatures: {
      'Sleeps Three': threePersonsLarge,
      'Bed Type': kingBedLarge,
      'Sofa Bed': sofabedLarge,
      'Shower Type': jacuzziLarge,
      'Sun Deck': deckLarge
    },
    features: {
      'Two Adults': twoPersons,
      'Three Adults (fee)': threePersons,
      'King Bed': kingBed,
      '1 Sofa Beds': sofabed,
      'Sun Deck': deck,
      'Tub/Jacuzzi': jacuzzi,
      'Acca Kappa Toiletries': toiletries,
      'Bathrobes': bathrobes,
      '400 Thread Count Bedding': bedding,
      'Indulgent Minibar': minibar,
      'Flat Screen & Apple TV': tv,
      'High-Speed Wi-Fi': wifi,
      'Hair Dryer': hairDryer,
      'Individual AC Unit': acUnit,
      'Daily Housekeeping': housekeeping
    },
    images: {
      cardImage: privateSuite,
      heroImage: privateSuite,
      other: [privateSuite2, privateSuite3, privateSuite4, privateSuiteTub, privateSuiteDeck]
    },
    ink: '/rooms/privatesuite',
    path: 'privatesuite'
  }
]