import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import logo from './logo.svg';
import Welcome from './Login'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



class Login extends Component{
   

    constructor(props){
        super(props);
        this.state = {
            header : "Please Login here",

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.username      =    this.props.sample_user.username;    
        this.password      =    this.props.sample_user.password;    

    }

     b = 10;
     c = 15

    handleSubmit(event){
        var username =  this.refs.usernameFld.getValue();
        var password =  this.refs.passwordFld.getValue();
        
        console.log(username +":"+this.username +":"+b);
        console.log(password +":"+this.password);

        if(username === this.username && password === this.password){
            this.setState({header: "Login success"});

        }
        else{
            this.setState({header: "Login failed"});
        }
        this.createPassword(event)
        event.preventDefault();
    }

    createPassword(event){
       // console.log('=============>'+JSON.stringify(event));
    }

    
    render(){

        return(
            //TODO : Mui Logion form here 
            <div>
            
            <form onSubmit={event => this.handleSubmit(event)}>

               <p>{this.state.header}</p>
               <TextField
                  hintText="Username"
                  floatingLabelText="Username"
                  defaultValue="Default Value"
                  ref="usernameFld"
                  />
               <br />
               <TextField
                  hintText="Password"
                  floatingLabelText="Password"
                  type="password"
                  ref="passwordFld"

                  />
               <br />
               <br/>
               <RaisedButton label="Login" primary={true} type="submit"  />
             </form>  
            </div>
        );
    }
}

export default Login;