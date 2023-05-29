import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
  const settings = {  
    arrows: false,  
    dots: true,  
    infinite: true,  
    speed: 500, 
    slidesToShow: 1,  
    slidesToScroll: 1,  
    autoplay: true,  
    autoplaySpeed: 3000, 
};

  return (
    <>
           	
      <Slider {...settings}>
            <div><img src="img/p_main1.jpg" alt="ban" /></div>
            <div><img src="img/p_main1.jpg" alt="ban" /></div>
      </Slider>
          
    </>
  );
}

export default Banner;
