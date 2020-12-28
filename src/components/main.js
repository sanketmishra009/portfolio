import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Header from './header';
import Web from "./web";
import Data from "./data";
import Dl from "./dl";
// import Footer from './Footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

  render() {
    return (
      <div>
        <Header/>   
            <Route path="/home" component={() => <Home/>} />
        <Route path='/about' component={() => <About />} />
        <Route path="/web" component={() => <Web />} />
        <Route path="/data" component={() => <Data />} />
        <Route path="/dl" component={()=><Dl/>} />
            {/* <Redirect to="/home" /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;
