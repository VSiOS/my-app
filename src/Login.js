import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
        var u_name =  this.refs.usernameFld.getValue();
        var p_word =  this.refs.passwordFld.getValue();

        var url = 'https://private-33177f-vsios.apiary-mock.com/auth';
        axios.post(url,{username:u_name, password:p_word}).then((response)=>{
             var data = response.data;
             console.log("response:"+JSON.stringify(data));

             if(data){
                 var error = data.error;
                 if(error === '0'){
                     this.setState({header : 'Login success'});
                     this.findDomHandler(green600);

                 }
                 else{
                    this.setState({header : 'Login failed'});
                    this.findDomHandler(red600);

                 }
             }

        }).catch(function(error){
            this.setState({header : 'Login failed'});
            this.findDomHandler(red600);


        });
        
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