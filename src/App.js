import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // add
import RaisedButton from 'material-ui/RaisedButton'; // add
import AppBar from 'material-ui/AppBar';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
     <AppBar
        title="Home"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <RaisedButton label="Material UI" />

      </div>
 
      </MuiThemeProvider>
    );
  }
}

export default App;