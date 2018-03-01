import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // add
import RaisedButton from 'material-ui/RaisedButton'; // add
import AppBar from 'material-ui/AppBar';

import Welcome from './Welcome'

import logo from './logo.svg';
import './App.css';
import Login from './Login';






class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      welcome :{
        welcome_msg : "Hey there, Welcome to my React App",

        sample_user : {
          username :'test',
          password : 'test'
        }

      }
    }
  }
  
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome To My App </h2>
        </div>
        <Welcome welcome={this.state.welcome}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;





