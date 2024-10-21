import React from "react";
import SubTitle from "../SubTitle";
import { useTranslation } from "react-i18next";
import Counters from "./Counters";

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
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
              <img
                src={`../../sertificates/sert${item}.png`}
                alt={idx}
                className="lg:w-[404px] w-[304px] bg-[#EBEBFA] rounded-md lg:rounded-xl lg:h-[304px] h-[204px] object-cover inline-block"
              />
            ))}
            {[10, 11, 12, 13, 14, 15, 16, 17, 18].map((item, idx) => (
              <img
                src={`../../sertificates/sert${item}.png`}
                alt={idx}
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
