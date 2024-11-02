import DescriptionComponent from "../../components/Description";
import React from "react";
import marq from "/marq.png"
import { useTranslation } from "react-i18next";
const TestimonialCard = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className=" h-full border-t-4  rounded-md  border-main  flex flex-col justify-center items-center  md:pt-[90px] pt-[50px] px-[10px]  lg:px-[40px] relative  w-full  shadow-lg">
      <img
        src={`/testimonials/test${item}.png`}
        className="absolute  h-[90px] w-[90px] lg:h-[110px]  lg:w-[110px] 2xl:w-[150px] 2xl:h-[150px] rounded-full border-[3px] lg:border-[6px] lg:top-[-75px] top-[-45px] z-[100] border-main  "
        alt=""
      />
      <div className="absolute testimonials_car transition-all md:border-b-4 border-b-2 md:border-t-8 border-t-4  z-10 border-main top-[-7px] md:top-[-10px] bottom-[0px] w-[50%]"></div>
      <h1 className=" lg:text-[24px] text-[16px]  font-mono font-semibold">
        {t("pagesData.testimonialPage.testimonials.test" + item + ".author")}
      </h1>
      <p className=" text-[16px] lg:text-[22px] font-mono">{t("main.testimonials.client")}</p>
      <DescriptionComponent
        classList={" lg:mt-4  mt-2 line-clamp-10   lg:!text-[18px] !text-[14px]"}
        description={t(
          "pagesData.testimonialPage.testimonials.test" + item + ".reviews"
        )}
      />
      <img
        src={marq}
        className="my-4 w-[57px] h-[57px] lg:w-[71px] lg:h-[71px]  object-cover text-center "
        alt=""
      />
    </div>
  );
};

export default TestimonialCard;
