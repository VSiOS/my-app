import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import logo from './logo.svg';
import Welcome from './Login'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Paper } from 'material-ui';
import { red100, red600, grey600, green600 } from 'material-ui/styles/colors';



class Login extends Component{
   

    constructor(props){
        super(props);
        this.state = {
            header      : "Please Login here",
            user_data   : {
                            username: "",
                            password: ""
            }

        }
        this.handleSubmit    = this.handleSubmit.bind(this);
        this.findDomHandler  = this.findDomHandler.bind(this);
        this.updateUsername  = this.updateUsername.bind(this);

        this.username        = this.props.sample_user.username;    
        this.password        = this.props.sample_user.password;    

    }

    handleSubmit(event){
        var username =  this.refs.usernameFld.getValue();
        var password =  this.refs.passwordFld.getValue();

        if(username === this.username && password === this.password){
            this.setState({header: "Login success"});
            this.findDomHandler(green600);

        }
        else{
            this.setState({header: "Login failed"});
            this.findDomHandler(red600);
        }
        this.createPassword(event)
        event.preventDefault();
    }

    createPassword(event){
       // console.log('=============>'+JSON.stringify(event));
    }

    findDomHandler(color){
        var myDiv = document.getElementById("msgDiv");
        var style = ReactDOM.findDOMNode(myDiv).style;
        style.color = color;

    }

    updateUsername(e){

        var u_data                = this.state.user_data;
        u_data.username           = e.target.value;
        this.setState({user_data : u_data},function(){
         console.log('=============>'+JSON.stringify(this.state.user_data));

        });
    }
    
    render(){
        const style = {
            height: 300,
            width: 300,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
          };

        var messageStyle = {
            color : grey600
        }

        return(
            //TODO : Mui Logion form here 
           
            <div>
            <Paper style = {style}>
            <form onSubmit={event => this.handleSubmit(event)}>

               <div style = {messageStyle} id="msgDiv">
               <p>{this.state.header}</p>
               </div>

               <TextField
                  hintText="Username"
                  floatingLabelText="Username"
                  defaultValue="Default Value"
                  ref="usernameFld"
                  onChange = {this.updateUsername}
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
             </Paper>
            </div>
        );
    }
}

export default Login;