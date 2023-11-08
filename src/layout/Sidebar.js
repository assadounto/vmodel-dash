import React from 'react';
import {  NavLink, } from 'react-router-dom';
import logo from '../assets/svgs/logo.svg';

function Sidebar() {

  const navLinks = [
    { text: 'Home', link: '/admin' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
  ];
  return (
    <div className="sidebar-cont">
      <div className="logo-cont">
        <img className="logo" src={logo} alt="" />
      </div>
      <ul>
     
      {navLinks.map((link, index) => (
   <li>
<NavLink
  to={link.link}
  activeClassName="active"
  exact={link.link === '/'}
>
  {link.text}
</NavLink>
</li>
))}    </ul>
    </div>
  );
}

export default Sidebar;
