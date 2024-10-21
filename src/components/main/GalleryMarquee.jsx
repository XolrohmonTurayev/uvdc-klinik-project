import React from "react";
import SubTitle from "../SubTitle";
import { useTranslation } from "react-i18next";
import Counters from "./Counters";
// import anyImg from "../../../public/"

const GalleryMarquee = () => {
  const { t } = useTranslation();
  return (
    <section className="">
      <div className="relative flex flex-col lg:my-16">
        <Counters />
        <div className="flex flex-col gap-8 pb-8 mx-auto mt-12 ">
          <div className="partners__marquee ">
            <div className="partners__marquee__content partners__marquee__content_right support partner">
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              ].map((item, idx) => (
                <img
                  src={`../../../public/galleryPage/galleryImg${item}.png`}
                  alt={idx}
                  className="lg:w-[404px] w-[304px] bg-[#EBEBFA] rounded-md lg:rounded-xl lg:h-[304px] h-[204px] object-cover inline-block"
                />
              ))}
            </div>
          </div>{" "}
          <div className="partners__marquee">
            <div className="partners__marquee__content support partner">
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
              ].map((item, idx) => (
                <img
                  src={`../../../public/galleryPage/galleryImg${item + 1}.png`}
                  alt={idx}
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
