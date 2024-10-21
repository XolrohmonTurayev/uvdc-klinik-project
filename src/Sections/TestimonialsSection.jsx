import React from "react";
import TitleComponent from "../components/Title";
import DescriptionComponent from "../components/Description";
import SwiperTestimonials from "../components/main/SwiperTestimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "../Pages/Cards/TestimonialCard";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container px-[10px] md:px-0">
        <TitleComponent title={t("main.testimonials.title")} />
        <div className="flex justify-center">
          <DescriptionComponent
            classList={" max-w-[1400px]"}
            description={t("main.testimonials.subtitle")}
          />
        </div>
        <div className="w-full md:my-12">
          <SwiperTestimonials>
            {[1, 2, 3].map((item) => (
              <SwiperSlide key={item} className="">
                <div className="pt-[75px] h-full p-4  overflow-hidden">
                  <TestimonialCard item={item} />
                </div>
              </SwiperSlide>
            ))}
            {[1, 2, 3].map((item) => (
              <SwiperSlide key={item} className="">
                <div className="pt-[75px] h-full p-4  overflow-hidden">
                  <TestimonialCard item={item} />
                </div>
              </SwiperSlide>
            ))}
            {[1, 2, 3].map((item) => (
              <SwiperSlide key={item} className="">
                <div className="pt-[75px] h-full p-4  overflow-hidden">
                  <TestimonialCard item={item} />
                </div>
              </SwiperSlide>
            ))}
          </SwiperTestimonials>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
