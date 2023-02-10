import React from 'react';
import Slider from 'react-slick';
import "./slick-slider-react.scss";


export const ResponsiveSlickSlider = function({children}) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          arrows: false,
        },
      },
      //{
      //  breakpoint: 480,
      //  settings: {
      //
      //    slidesToShow: 3,
      //    slidesToScroll: 3,
      //    arrows:false,
      //  },
      //},
      //{
      //  breakpoint: 480,
      //  settings: "unslick"
      //}
    ],
  };
  return (
      <Slider {...settings}>
        {children}
      </Slider>
  );
};
