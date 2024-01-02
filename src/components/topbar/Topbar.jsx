import React,{ useState } from "react";
import { Link } from 'react-router-dom';
import "./topbar.css";
 import Sidebar from '../sidebar/sidebar';

function Topbar() {

  const [sidebarOpen,setSidebarOpen] = useState(false);
  
  const toggleSidebar = (open)=>{
    setSidebarOpen(open);
  }

  return (
    <>
      <header className="header">
        <a href="index.html" className="logo">
          Shenora
        </a>

        <form action="" className="search-form">
          <input
            type="search"
            id="search-box"
            placeholder="search here..."
          ></input>
          <label htmlFor="search-box" class="fas fa-search"></label>
        </form>

        <div class="icons">
          <div id="menu-btn" class="fas fa-bars" onClick={()=>{toggleSidebar(true)}}></div>
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> 
          <div id="search-btn" class="fas fa-search"></div>
          {/*  <Link to="login.html" className="fas fa-user"></Link>

          <Link to="cart.html" class="fas fa-shopping-cart"></Link> */}
        </div>
      </header>
    </>
  );
}

export default Topbar;
