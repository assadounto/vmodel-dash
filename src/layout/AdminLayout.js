// AdminLayout.js
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './header';

function AdminLayout({ children }) {
  return (
    <div className='layout-container'>
        <div className='header-layout'>
            <Header/>
        </div>
       <div className='sidebar-layout'>
       <Sidebar/>
       </div>
      <div className="content-layout">
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
