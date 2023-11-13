import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/svgs/logo.svg';
import dash from "../assets/svgs/0.svg"
import users from "../assets/svgs/1.svg"
import jobs from "../assets/svgs/2.svg"
import bookings from "../assets/svgs/3.svg"
import coupons from "../assets/svgs/4.svg"
import report from "../assets/svgs/5.svg"
import ads from "../assets/svgs/6.svg"

function Sidebar() {
  const navLinks = [
    { text: 'Dashboard', link: '/admin/dashboard',logo: dash  },
    { text: 'Users', link: '/admin/users', logo: users },
    { text: 'Jobs & Services', link: '/admin/services' , logo: jobs},
    { text: 'Bookings', link: '/admin/bookings' , logo: bookings },
    { text: 'Coupons', link: '/admin/coupons', logo: coupons },
    { text: 'Reports', link: '/admin/reports', logo:report },
    { text: 'Ads', link: '/admin/ads', logo: ads },
  ];

  const getCurrentPath = () => {
    return window.location.pathname;
  };

 
  return (
    <div className="sidebar-cont">
      <div className="logo-cont">
        <img className="logo" src={logo} alt="" />
      </div>
      <ul>
        {navLinks.map((link, index) => (
          
          <li key={index}>
            <NavLink
              to={link.link} 
              
              
              >
                 {({ isActive}) => (
isActive?
<Property1DashboardActive logo={link.logo} title={link.text} />:
<Property1ReportsInactive logo={link.logo}title={link.text}/>  )}
              
               
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Property1DashboardActive = ({
 logo,title
}) => {
  

  return (
    <div
      className="property-1dashboard-active"
    
    >
      <div className="radix-iconsdashboard-parent">
        <img
          className="radix-iconsdashboard"
          alt=""
          src={logo}
        />
        <div className="dashboard">{title}</div>
      </div>
      <div className="property-1dashboard-active-child" />
    </div>
  );
};

const Property1ReportsInactive = ({
  logo,title
}) => {
 

  return (
    <div
      className="property-1reports-inactive"
      >
      <div className="carbonreport-parent">
        <img className="carbonreport-icon" alt="" src={logo} />
        <div className="reports">{title}</div>
      </div>
    </div>
  );
};

export default Sidebar;
