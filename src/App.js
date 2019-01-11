import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './shared/dishes';
import './App.css';

class App extends Component {


  render() {
    return (
      <div>
        <Navbar dark color = "primary">
          <div className = "container">
              <NavbarBrand href="/">Something Con Fusion</NavbarBrand>
          </div>
        </Navbar>
    
          <MainComponent/>
      </div>
    );    
  }
}

export default App;
