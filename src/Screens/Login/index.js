import React from 'react';
import { ReactDOM } from 'react';
import "../Login/login.css";
import Header from '../../Components/Header';
import LoginForm from '../../Components/LoginForm';


function LoginScreen() {
  return (
    <div className='login-main' >
        <Header />
        <LoginForm />
    </div>
  )
}

export default LoginScreen;