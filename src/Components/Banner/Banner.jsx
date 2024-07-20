
import './banner.css';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

function Banner() {
  
  return (
    <>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
<div className="homeScroll">
    <div className="homeSection" id="home">
      <div className="homeText">
        <h1>Aman Singh Clinic</h1>
        <div className="d-flex justify-content-center align-item-center mt-5">
          <div className="buttonnav p-2">
          
          <p>LLorem ipsum dolor sit amet consectetur adipisicingorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>
    </div>
  
  </div>
        </SwiperSlide>
        <SwiperSlide>
<div className="homeScroll">
    <div className="homeSection" id="home">
      <div className="homeText">
        <h1>Aman Singh Clinic</h1> 
        <div className="d-flex justify-content-center align-item-center mt-5">
          <div className="buttonnav p-2">
          <p>LLorem ipsum dolor sit amet consectetur adipisicingorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>
    </div>
  
  </div>
        </SwiperSlide>
        <SwiperSlide>
<div className="homeScroll">
    <div className="homeSection" id="home">
      <div className="homeText">
        <h1>Aman Singh Clinic</h1>
        <div className="d-flex justify-content-center align-item-center mt-5">
          <div className="buttonnav p-2">
          
          <p>LLorem ipsum dolor sit amet consectetur adipisicingorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>
    </div>
  
  </div>
        </SwiperSlide>
     
      </Swiper>
    
  </>
  );
}

export default Banner;
