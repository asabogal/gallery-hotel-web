import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './components/hoc/Layout';
import HomePage from './pages/HomePage';
import Location from './pages/Location';
import Rooms from './pages/Rooms';
import RoomPage from './pages/RoomPage';
import Amenities from './pages/Amenities';
import ContactUs from './pages/ContactUs';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/location' component={Location}/>
            <Route exact path='/amenities' component={Amenities}/>
            <Route exact path='/rooms' component={Rooms}/>
            <Route exact path='/contact' component={ContactUs}/>
            <Route exact path= '/rooms/:name' render={props => <RoomPage {...props}/>}/>
          </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;