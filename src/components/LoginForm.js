import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setuser } from "../redux/login";
import axios from "axios";
import { backendURL } from "../redux/http";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading]   = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
  setLoading(true)
    try {
      const { data } = await axios.post(
        `${backendURL}/login/`,
        { username, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
  console.log(data)
    
     localStorage.setItem('user', JSON.stringify(data.data.user));
     localStorage.setItem('token', data.data.token);
     dispatch(setuser(data));
     

     setLoading(false)
     navigate("/admin/dashboard");
    } catch (error) {
      setLoading(false)
      console.error("Login failed", error);
      alert("Login failed", error)
      // Handle login failure, display an error message, etc.
    }
  };
  

  return (
    <form onSubmit={handleSubmit} method="post">
      <div className="login-cont">
        <div className="login-label">LOGIN</div>
        <div className="label">Username</div>
        <input
          id="email"
          name="email"
          className="form-field"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <div className="label">Password</div>
        <input
          type="password"
          id="password"
          name="password"
          className="form-field"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit"  className="login-button">
          {loading?'wait': 'Login'}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
