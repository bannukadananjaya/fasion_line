import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import { Navigation, A11y} from 'swiper/modules'; // Import necessary modules

const Slider = () => {
  return (
    <section className="home">
      <div className="swiper home-slider">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Navigation,A11y]}
            spaceBetween={50}
            slidesPerView={1} 
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
           
          >
            <SwiperSlide>
              <div className="swiper-slide slide">
                <div className="image">
                  <img src="images/1.jpg" alt="" />
                </div>
                <div className="content">
                  <span>upto 10% off</span>
                  <h3>Wedding saris</h3>
                  <a href="categories.html" className="btn">
                    shop now
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide slide">
                <div className="image">
                  <img src="images/2.jpg" alt="" />
                </div>
                <div className="content">
                  <span>upto 15% off</span>
                  <h3>Homecoming saris</h3>
                  <a href="categories.html" class="btn">
                    shop now
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide slide">
                <div className="image">
                  <img src="images/3.jpg" alt="" />
                </div>
                <div className="content">
                  <span>upto 25% off</span>
                  <h3>Wedding Frocks</h3>
                  <a href="categories.html" class="btn">
                    shop now
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
};

export default Slider;
