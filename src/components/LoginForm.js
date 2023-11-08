import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here, e.g., make an API request to log in the user.
    console.log("Login button clicked");
  };

  return (
    <form action="#">
     
      <div className="login-cont"> 
      <div className="login-label">LOGIN</div>
      <div className="label">Username</div>
      <input
        type="email"
        id="email"
        name="email"
        className="form-field"
        placeholder="Enter Username"
        required
      />

      <div className="label">Password</div>
      <input
        type="password"
        id="password"
        name="password"
        className="form-field"
        placeholder="Enter Username"
        required
      />
      </div>
    </form>
  );
};

export default LoginForm;
