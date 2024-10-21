import React, { useEffect } from "react";
import { advantagesData } from "../../constants";
import SwiperTestimonials from "../../components/main/SwiperTestimonials";
import { SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

const Advantages = () => {
  return (
    <section className=" absolute z-10 w-full  lg:bottom-[-40%] bottom-[-65%]">
      <div className="container">
        <AdvantagesComputer />
        <div className="mt-12">
          <AdvantagesMobile />
        </div>
      </div>
    </section>
  );
};

export default Advantages;

const AdvantagesMobile = () => {
  const { i18n } = useTranslation();

  const lang = i18n.language;
  return (
    <div className="lg:hidden px-[20px] ">
      <SwiperTestimonials>
        {advantagesData[lang]?.map((el, idx) => (
          <SwiperSlide
            className="h-full overflow-hidden border shadow-sm hover:border-none border-border rounded-xl"
            key={idx}
          >
            <div
              key={el.id}
              className="  adv-card2 group min-h-[283px] h-full max-w-[380px] w-full text-center lg:p-12 p-6 "
            >
              <div className="mx-auto mb-5  rounded-full lg:w-28 w-[75px] lg:h-28 h-[75px] bg-grad flex-custom">
                <img
                  src={el.img}
                  alt=""
                  className=" w-[48px] h-[48px] lg:h-[75px] lg:w-[75px] "
                />
              </div>
              <div className="adv-info">
                <h3 className="lg:mb-4 mb-2 group-hover:text-white text-main font-medium text-[16px]">
                  {el.title}
                </h3>
                <p className="text-[14px] group-hover:text-white">{el.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperTestimonials>
    </div>
  );
};

const AdvantagesComputer = () => {
  const { i18n } = useTranslation();

  const lang = i18n.language;

  return (
    <div className="flex-wrap items-stretch justify-center hidden lg:flex adv-container rounded-2xl">
      {advantagesData[lang]?.map((el) => (
        <div
          key={el.id}
          className="adv-card border border-border max-w-[380px] w-full text-center p-12 "
        >
          <div className="mx-auto mb-5 rounded-full w-28 h-28 bg-grad flex-custom">
            <img src={el.img} alt="" className="w-[75px]" />
          </div>
          <div className="adv-info">
            <h3 className="mb-4 font-medium">{el.title}</h3>
            <p>{el.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
