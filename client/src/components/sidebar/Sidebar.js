import React from 'react'
import "./Sidebar.css";
import logo from "../../assets/logo.svg";
import {
  Link
} from "react-router-dom";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>DEVI</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <Link to="#">Dashboard</Link>
        </div>
        <h2></h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <Link to="#">HOME</Link>
        </div>
        
        <h2></h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <Link to="#">STUDENT</Link>
        </div>
        
        <h2></h2>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <Link to="#">Reproductive Puzzle</Link>
        </div>

        <h2></h2>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <Link to="#">Stairs And Slides</Link>
        </div>

        <h2></h2>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <Link to="#">Hygiene Run</Link>
        </div>

        <h2></h2>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <Link to="#">Quiz</Link>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;