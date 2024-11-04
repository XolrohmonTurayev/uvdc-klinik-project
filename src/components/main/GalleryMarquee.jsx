import React from "react";
import { useTranslation } from "react-i18next";
import Counters from "./Counters";
import { galleryPageImgData } from "../../constants";

const GalleryMarquee = () => {
  const { t } = useTranslation();
  return (
    <section className="">
      <div className="relative flex flex-col lg:my-16">
        <Counters />
        <div className="flex flex-col gap-8 pb-8 mx-auto mt-12 ">
          <div className="partners__marquee ">
            <div className="partners__marquee__content partners__marquee__content_right support partner">
              {galleryPageImgData.map((el) => {
                <img
                  src={el.img}
                  alt={el.id}
                  className="lg:w-[404px] w-[304px] bg-[#EBEBFA] rounded-md lg:rounded-xl lg:h-[304px] h-[204px] object-cover inline-block"
                />
              })}
            </div>
          </div>{" "}
          <div className="partners__marquee">
            <div className="partners__marquee__content support partner">
              {galleryPageImgData.map((el) => (
                <img
                  src={el.img}
                  alt={el.id}
                  className="lg:w-[404px] bg-[#EBEBFA] w-[304px] rounded-md lg:rounded-xl lg:h-[304px] h-[204px] object-cover inline-block"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryMarquee;
