
import React, { Component } from 'react';
import Login from './Login'
import Paper from 'material-ui/Paper';

class Welcome extends Component{

    constructor(props){
        super(props);
        var message = this.props.welcome_msg;

    }
    render(){
      return(
        <div>
            <Paper  zDepth={1} />
            <p>{this.props.welcome.welcome_msg}</p>
            <Login sample_user={this.props.welcome.sample_user}/>
        </div>
        

      );
     }
    }

    export default Welcome;
