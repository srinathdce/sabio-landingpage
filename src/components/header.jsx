import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export const Header = (props) => {
  const slider = [
    {
      title: "Building Bridges in the Digital Sphere",
      image: "img/landing/fabio-oyXis2kALVg-unsplash.jpg",
    },
    {
      title: "Crafting Ideas",
      image: "img/landing/growtika-nGoCBxiaRO0-unsplash.jpg",
    },
    {
      title: "Where Ideas Converge and Solutions Emerge",
      image: "img/landing/scott-graham-5fNmWej4tAA-unsplash.jpg",
    },
  ];
  return (
    <Swiper
      speed={400}
      modules={[
        Pagination,
        Mousewheel,
        Navigation,
        Scrollbar,
        Autoplay,
        EffectFade,
      ]}
      slidesPerView={1}
      duration={400}
      spaceBetween={10}
      navigation={true}
      autoplay={true}
      autoplay-delay={400}
      pagination={{ clickable: true }}
    >
      {slider.map((img, index) => (
        <SwiperSlide className="swiper-slide-cover" key={index}>
          <img class="slider-image" src={img.image} alt={`Slide ${index}`} />
          <div className="text-overlay">{img.title}</div>
        </SwiperSlide>
      ))}
      ;
    </Swiper>
  );
};
