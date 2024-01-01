import React from "react";

const sidebar = () => {
  return (
    <>
      <div class="side-bar">
        <div id="close-side-bar" class="fas fa-times"></div>

        <nav class="navbar">
          <a href="index.html">
            <i className="fas fa-angle-right"></i> Home
          </a>
          <a href="about.html">
            <i className="fas fa-angle-right"></i> About
          </a>
          <a href="categories.html">
            <i className="fas fa-angle-right"></i> Categories
          </a>
          <a href="login.html">
            <i className="fas fa-angle-right"></i> Login
          </a>
          <a href="register.html">
            <i className="fas fa-angle-right"></i> Register
          </a>
        </nav>
      </div>
    </>
  );
};

export default sidebar;
