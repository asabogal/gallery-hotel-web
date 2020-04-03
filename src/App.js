import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './components/hoc/Layout';
import HomePage from './pages/HomePage';
import Location from './pages/Location';
import ContactUs from './pages/ContactUs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/location' component={Location}/>
              <Route exact path='/contact' component={ContactUs}/>
            </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;