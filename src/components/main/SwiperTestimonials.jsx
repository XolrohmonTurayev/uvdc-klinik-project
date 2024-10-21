import React, { useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles2.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import TestimonialCard from "../../Pages/Cards/TestimonialCard";

export default function SwiperTestimonials({ children }) {
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 3,
            spaceBetween: 33,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 66,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000, // Интервал в миллисекундах между слайдами (например, 2.5 секунды)
          disableOnInteraction: false, // Продолжает автопрокрутку после взаимодействия с пользователем
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper testimonial-swiper"
      >
        {children}
      </Swiper>
    </>
  );
}
