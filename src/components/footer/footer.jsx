import React from "react";

const footer = () => {
  return (
    <>
    <section className="quick-links">
        <a href="index.html" className="logo">
          Shenora
        </a>

        <div className="links">
          <a href="index.html"> home </a>
          <a href="about.html"> about </a>
          <a href="categories.html"> categories </a>
          <a href="login.html"> login </a>
          <a href="register.html"> register </a>
          <a href="cart.html"> cart </a>
        </div>

        <div className="share">
          <a href="s" className="fab fa-facebook-f">f</a>
          <a href="s" className="fab fa-twitter">f</a>
          <a href="s" className="fab fa-instagram">d</a>
          <a href="s" className="fab fa-linkedin">d</a>
        </div>
      </section>
      
      <section class="credit">
        <p>
          created by <span>Banuka Dananjaya</span> | all rights reserved!
        </p>

        <img src="images/card_img.png" alt="" />
      </section>
    </>
  );
};

export default footer;
