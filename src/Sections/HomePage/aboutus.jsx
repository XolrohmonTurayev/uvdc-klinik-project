import React from "react";
import TitleComponent from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import DescriptionComponent from "../../components/Description";

import bannerImg1 from "../../../src/assets/galleryPage/galleryImg14.png";
import bannerImg2 from "../../../src/assets/galleryPage/galleryImg2.png";
import bannerImg3 from "../../../src/assets/galleryPage/galleryImg9.png";
import bannerImg1before from "/aboutSectionDots.png";
import { useTranslation } from "react-i18next";

const Aboutus = () => {

  const {t} = useTranslation()
  
  return (
    <section className="mt-20 pt-60">
      <div className="container">
        <div className="flex-custom gap-9">
          <div className="relative w-[650px] h-[550px]">
            <div className="absolute max-w-[410px] w-full max-h-[450px] h-full top-0 left-0">
              <img
                src={bannerImg1}
                alt="About us"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="absolute w-[200px] h-[200px] top-3 right-5 overflow-visible">
              <img
                src={bannerImg2}
                alt="About us"
                className="relative object-cover w-full h-full about-img2 rounded-2xl"
              />
              <div className="w-[200px] h-[200px] absolute z-[-10] border-2 translate-x-[10px] translate-y-[-210px] border-main rounded-2xl"></div>
            </div>
            <img
              src={bannerImg3}
              alt="About us"
              className="about-img3 absolute w-[350px] h-[320px] bottom-0 right-0 rounded-xl"
            />
            <div className="absolute bottom-[5px] left-[-5px]">
              <div className="px-8 py-4 text-3xl font-semibold text-white bg-grad w-max rounded-xl font-poppins">
                {t("main.aboutUs.level")}
              </div>
              <div className="absolute bottom-[-10px] left-[-10px] z-[-1] border-2 rounded-xl border-dashed border-main w-full h-full"></div>
            </div>
            <img
              src={bannerImg1before}
              className="absolute z-[-1] w-[200px] top-[-30px] left-[-30px]"
            />
          </div>
          <div className="max-w-[650px]">
            <TitleComponent
              title={t("headersLinks.about")}
              classList={"mb-14"}
            />
            <SubTitle
              subtitle={t("pagesData.aboutPage.subtitle1")}
              classList={"md:text-center"}
            />
            <DescriptionComponent
              description={t("pagesData.aboutPage.description1")}
              classList={"text-start mt-9"}
            />
            <div className="border-l-4 border-main bg-[#ececfb] py-6 px-7 rounded-r-[10px] mt-20">
              <p className="font-poppins font-normal text-xl text-[#606060]">
                {t("main.aboutUs.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;

const AboutusMobile = () => {
  const {t} = useTranslation()

  return (
    <section className="mt-20 pt-52 px-[10px]">
      <div className="container ">
        <div className="flex flex-col-reverse items-center justify-center lg:flex-custom gap-9">
          <div className="relative  w-full  h-[350px]">
            <div className="absolute max-w-[410px] w-full max-h-[450px] -z-10 h-full top-0 left-0">
              <img
                src={bannerImg1}
                alt="About us"
                className="object-cover w-[70%] h-[70%] rounded-xl"
              />
            </div>
            <div className="absolute w-[100px] h-[100px] top-3 right-5 overflow-visible">
              <img
                src={bannerImg2}
                alt="About us"
                className="relative z-10 object-cover w-full h-full border border-main about-img2 rounded-2xl"
              />
              <div className="w-[100px] h-[100px] absolute  z-[1] border-2 translate-x-[10px] translate-y-[-110px] border-main rounded-2xl"></div>
            </div>
            <img
              src={bannerImg3}
              alt="About us"
              className="about-img3 absolute w-[200px] h-[200px] border border-main object-cover bottom-0 top-[40%] right-0 rounded-xl"
            />
            <div className="absolute bottom-[20px]  left-[10px] ">
              <div className=" px-4 lg:px-8 lg:py-4 py-2 font-semibold text-white lg:text-3xl text-[15px] bg-grad w-max rounded-xl font-poppins">
                {t("main.aboutUs.level")}
              </div>
              <div className="absolute bottom-[-10px] left-[-10px] z-[-1] border-2 rounded-xl border-dashed border-main w-full h-full"></div>
            </div>
          </div>
          <div className="max-w-[650px]">
            <TitleComponent
              title={t("headersLinks.about")}
              classList={"mb-14"}
            />
            <SubTitle
              subtitle={t("pagesData.aboutPage.subtitle1")}
              classList={"md:text-center"}
            />
            <DescriptionComponent
              description={t("pagesData.aboutPage.description1")}
              classList={"text-start mt-4"}
            />
            <div className="border-l-4 border-main bg-[#ececfb]  p-4 rounded-r-[10px] mt-4">
              <p className="font-poppins font-normal text-[12px] lg:text-xl text-[#606060]">
                {t("main.aboutUs.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutusMobile };
