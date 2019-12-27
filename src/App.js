import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './components/hoc/Layout';
import Home from './pages/Home';

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
           <Route exact path='/' component={Home}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;