import React from "react";
import "./topbar.css";

function Topbar() {
  return (
    <>
      <header class="header">
        <a href="index.html" className="logo">
          Shenora
        </a>

        <form action="" className="search-form">
          <input
            type="search"
            id="search-box"
            placeholder="search here..."
          ></input>
          <label for="search-box" class="fas fa-search"></label>
        </form>

        <div class="icons">
          <div id="menu-btn" class="fas fa-bars"></div>
          <div id="search-btn" class="fas fa-search"></div>
          <a href="login.html" className="fas fa-user"></a>

          <a href="cart.html" class="fas fa-shopping-cart"></a>
        </div>
      </header>
    </>
  );
}

export default Topbar;
