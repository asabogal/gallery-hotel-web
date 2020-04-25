import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './components/hoc/Layout';
import HomePage from './pages/HomePage';
import Location from './pages/Location';
import Rooms from './pages/Rooms';
import RoomPage from './pages/RoomPage';
import Amenities from './pages/Amenities';
import AmenitiesGallery from './pages/AmenitiesGallery';
import EatAndDrink from './pages/EatAndDrink';
import EventsBlocks from './pages/EventsBlocks';
import Menu from './components/eat_drink/Menu';
import ContactUs from './pages/ContactUs';
import Policies from './pages/Policies';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path='/gallery-hotel-web' component={HomePage}/>
            <Route exact path='/location' component={Location}/>
            <Route exact path='/amenities' component={Amenities}/>
            <Route exact path= '/amenities/:name' render={props => <AmenitiesGallery {...props}/>}/>
            <Route exact path='/rooms' component={Rooms}/>
            <Route exact path= '/rooms/:name' render={props => <RoomPage {...props}/>}/>
            <Route exact path='/eatdrink' component={EatAndDrink}/>
            <Route exact path= '/eatdrink/:name' render={props => <Menu {...props}/>}/>
            <Route exact path='/events_blocks' component={EventsBlocks}/>
            <Route exact path='/contact' component={ContactUs}/>
            <Route exact path='/policies' component={Policies}/>
          </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;