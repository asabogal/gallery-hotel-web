import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Helmet from 'react-helmet';
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
import RedirectRoute from './routing/RedirectRoute';


const App = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>The Gallery Hotel</title>  
      <meta name="description" content="The Gallery Hotel - A boutique hotel in Greenport, New York"/>
      <meta name="keywords" content="Gallery Hotel, Gallery, Hotel, The Gallery Hotel, Greenport, Greenport Hotel, greenport hotel, hotel, gallery, long island, greenport new york hotel" />  
    </Helmet>
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route exact path='/' component={HomePage}/>
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
              <RedirectRoute path='*'/>
            </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;