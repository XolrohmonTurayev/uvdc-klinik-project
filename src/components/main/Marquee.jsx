import React from "react";
import SubTitle from "../SubTitle";
import { useTranslation } from "react-i18next";
import Counters from "./Counters";
import { marqueeSertData } from "../../constants";

const Marquee = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:my-16">
      <Counters/>
      <div className="container flex justify-center   ">
        <SubTitle  subtitle={t("pagesData.aboutPage.subtitle3")} />
      </div>
      <div className="mt-12 pb-8  mx-auto   ">
        <div className="partners__marquee">
          <div className="partners__marquee__content support partner">
            {marqueeSertData.map((el) => (
              <img
                src={el.img}
                className="lg:w-[404px] w-[304px] bg-[#EBEBFA] rounded-md lg:rounded-xl lg:h-[304px] h-[204px] object-cover inline-block"
              />
            ))}
            {marqueeSertData.map((el) => (
              <img
                src={el.img}
                className="lg:w-[404px] bg-[#EBEBFA] w-[304px] rounded-md lg:rounded-xl lg:h-[304px] h-[204px] object-cover inline-block"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
