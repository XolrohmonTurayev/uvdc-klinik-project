import React, { useEffect, } from "react";
import TitleComponent from "../components/Title";
import DescriptionComponent from "../components/Description";
import { useTranslation } from "react-i18next";
import SetImg from "../components/Modal/SetImg";
import Marquee from "../components/main/Marquee";
import TestimonialsSection from "../Sections/TestimonialsSection";
import Loader from "../components/reusable/Loader";
import { galleryPageImgData } from "../constants";

const Gallery = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <section className="pt-24 sm:mt-[120px] mb-6  sm:pt-5">
      <Loader />
      <div className="container px-[10px]">
        <TitleComponent title={"Foto Galereya"} classList={"mb-4"} />
        <DescriptionComponent
          classList={" mx-auto max-w-[1100px]"}
          description={t("pagesData.doctorsPage.description")}
        />
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 lg:mb-32 lg:gap-7">
          {galleryPageImgData.map((el) => (
            <div key={el.id}>
              <div className="relative group">
                <img
                  src={el.img}
                  alt="Our Gallery"
                  className="w-full bg-[#EBEBFA] aspect-[4/3] object-cover sm:max-w-[400px] max-h-[300px] rounded-xl"
                />
                <SetImg img={el.img} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Marquee />
      <TestimonialsSection />
    </section>
  );
};

export default Gallery;
