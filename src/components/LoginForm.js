import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {

    e.preventDefault();
    // Add your authentication logic here, e.g., make an API request to log in the user.
    // If authentication is successful, navigate to admin/dashboard
    console.log("Login button clicked");

    // Assuming authentication is successful, navigate to admin/dashboard
   navigate("/admin/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
     
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
            <button type="submit" className="login-button">
  Login
</button>
      </div>

    </form>
  );
};

export default LoginForm;
