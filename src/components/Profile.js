import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import logout from "../assets/svgs/basil_logout-solid.svg";
import settings from "../assets/svgs/Group.svg";

const Profile = () => {
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleSignOut = () => {
    // Clear local storage
    localStorage.clear();

    // Navigate to the login page
    navigate('/login');

    console.log("User signed out");
  };

  return (
    <div className="profile">
      <div className="basilsettings-outline-parent">
        <img
          className="basilsettings-outline-icon"
          alt=""
          src={settings}
        />
        <div className="settings">Settings</div>
      </div>
      <div className="basillogout-solid-parent" onClick={handleSignOut}>
        <img
          className="basilsettings-outline-icon"
          alt=""
          src={logout}
        />
        <div className="settings">Sign Out</div>
      </div>
    </div>
  );
};

export default Profile;
