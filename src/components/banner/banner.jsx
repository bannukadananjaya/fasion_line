import React from "react";

const banner = () => {
  return (
    <>
      <section className="banner">
        <div className="box-container">
          <a href="categories.html" className="box">
            <img src="images/4.jpg" alt="" />
            <div className="content">
              <span>Wedding Saris</span>
              <h3>upto 10% off</h3>
            </div>
          </a>

          <a href="categories.html" className="box">
            <img src="images/5.jpg" alt="" />
            <div className="content">
              <span>Homecoming Saris</span>
              <h3>upto 15% off</h3>
            </div>
          </a>

          <a href="categories.html" className="box">
            <img src="images/6.jpg" alt="" />
            <div className="content">
              <span>Wedding Frocks</span>
              <h3>upto 25% off</h3>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default banner;
