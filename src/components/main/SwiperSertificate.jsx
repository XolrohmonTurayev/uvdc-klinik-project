import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

import "./styles.css";

export default function SwiperSertificate() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        loop={true} // Включаем бесконечный цикл
        autoplay={{
          delay: 0, // Минимальная задержка
          disableOnInteraction: false, // Не останавливаем прокрутку при взаимодействии
        }}
        speed={5000} // Увеличиваем скорость для плавного движения
        modules={[FreeMode, Autoplay]} // Подключаем модули FreeMode и Autoplay
        className="mySwiper swiper-sertificate"
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <SwiperSlide>
            <img
              src={`/sertificates/sert${item}.png`}
              alt="Slide 2"
              className="w-[404px] h-[254px] object-cover inline-block"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
