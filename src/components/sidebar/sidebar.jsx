import React from "react";
import { Link } from 'react-router-dom';

const sidebar = ({isOpen,toggleSidebar}) => {
  return (
    <>
      <div className={isOpen ? 'side-bar active':'side-bar'}>
        <div id="close-side-bar" className="fas fa-times" onClick={()=>toggleSidebar(false)}></div>

        <nav className="navbar">
        <a href="index.html"> <i className="fas fa-angle-right"></i> Home </a>
        <a href="about.html"> <i className="fas fa-angle-right"></i> About </a>
        <a href="categories.html"> <i className="fas fa-angle-right"></i> Categories </a>
        <a href="login.html"> <i className="fas fa-angle-right"></i> Login </a>
        <a href="register.html"> <i className="fas fa-angle-right"></i> Register </a>
        </nav>
      </div>
    </>
  );
};

export default sidebar;
