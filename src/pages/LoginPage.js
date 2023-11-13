import React, { useState, useRef } from "react";
import LoginForm from "../components/LoginForm";
import logo from "../assets/svgs/logo.svg"
const LoginPage= () => {


  return (
    <div className="login-container">
      <div className="logo-cont">
        <img className="logo" src={logo} alt="" />
        </div>
      <div className="login-form">
       <LoginForm/>
      </div>
    </div>
  );
};

export default LoginPage;
