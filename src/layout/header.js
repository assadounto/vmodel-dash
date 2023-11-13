import React from "react";
import ProfileArea from "../components/ProfileArea";


const Header = () => {

  function getFormattedDate() {
    const today = new Date();
  
    const options = {
      weekday: 'short', // abbreviated day of the week
      month: 'short',   // abbreviated month name
      day: 'numeric',    // numeric day of the month
      year: 'numeric',   // numeric year
      hour: 'numeric',   // numeric hour
      minute: 'numeric', // numeric minute
      hour12: true       // use 12-hour clock
    };
  
    return today.toLocaleString('en-US', options);
  }
  return (
      <div className="header">
     
          <div className="header-date">
         {getFormattedDate()}
          </div>
          <div >
          <ProfileArea/>
          </div>
         
      </div>
  )
}

export default Header;

