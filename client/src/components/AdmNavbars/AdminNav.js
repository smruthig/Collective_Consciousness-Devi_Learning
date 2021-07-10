import React from 'react'
import "./AdminNav.css";
import avatar from "../../assets/avatar.svg";

const AdminNav = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="AdminNav">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="AdminNav__left">
       
        <a className="active_link" href="#">
          Admin
        </a>
      </div>
      <div className="AdminNav__right">
       
        <a href="#!">
          <img width="30" src={avatar} alt="avatar" />
        </a>
        
      </div>
    </nav>
  );
};

export default AdminNav;