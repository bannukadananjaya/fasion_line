import React from "react";

const slider = () => {
  return (
    <>
      <section class="home">
        <div ClassName="swiper home-slider">
          <div ClassName="swiper-wrapper">
            <div ClassName="swiper-slide slide">
              <div ClassName="image">
                <img src="images/1.jpg" alt="" />
              </div>
              <div ClassName="content">
                <span>upto 10% off</span>
                <h3>Wedding saris</h3>
                <a href="categories.html" ClassName="btn">
                  shop now
                </a>
              </div>
            </div>

            <div ClassName="swiper-slide slide">
              <div ClassName="image">
                <img src="images/2.jpg" alt="" />
              </div>
              <div ClassName="content">
                <span>upto 15% off</span>
                <h3>Homecoming saris</h3>
                <a href="categories.html" ClassName="btn">
                  shop now
                </a>
              </div>
            </div>

            <div ClassName="swiper-slide slide">
              <div ClassName="image">
                <imag src="images/3.jpg" alt="" />
              </div>
              <div ClassName="content">
                <span>upto 25% off</span>
                <h3>Wedding Frocks</h3>
                <a href="categories.html" ClassName="btn">
                  shop now
                </a>
              </div>
            </div>
          </div>

          <div ClassName="swiper-button-next"></div>
          <div ClassName="swiper-button-prev"></div>
        </div>
      </section>
    </>
  );
};

export default slider;
