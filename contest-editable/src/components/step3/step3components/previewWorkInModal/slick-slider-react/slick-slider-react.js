import React from 'react';
import Slider from 'react-slick';
import "./slick-slider-react.scss";


export const ResponsiveSlickSlider = function({children}) {
  let settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: "unslick"
      }
    ],
  };
  return (
      <Slider {...settings}>
        {children}
      </Slider>
  );
};
