import React, {Component } from 'react';
import '../css/login.css';

class Login extends Component {
    render(){
       return <div className='login'>
            <h1> Welcome {this.props.name}!</h1>
        </div>
    }
}


export default Login;