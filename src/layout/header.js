import React from "react";
import ProfileArea from "../components/ProfileArea";


const Header = () => {
  return (
      <div className="header">
     
          <div className="header-date">
          Fri, Oct 20 2023 10:30 am
          </div>
          <div >
          <ProfileArea/>
          </div>
         
      </div>
  )
}

export default Header;

