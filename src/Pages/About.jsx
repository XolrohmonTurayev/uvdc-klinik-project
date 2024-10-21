import React, { useEffect } from "react";
import TitleComponent from "../components/Title";
import DescriptionComponent from "../components/Description";
import SubTitle from "../components/SubTitle";
import { useTranslation } from "react-i18next";
import main from "/pagesImages/about/main.png";
import img1 from "/pagesImages/about/img1.png";
import img2 from "/pagesImages/about/img2.png";
import Circle from "../components/reusable/Circle";
import { afzalliklar } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "../components/main/Marquee";
import { ContactPage } from "./Contact";
import Loader from "../components/reusable/Loader";
const About = () => {

  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-24 sm:mt-[120px] mb-6  sm:pt-5">
      <Loader />
      <div className="container  px-[10px] md:px-0">
        <TitleComponent title={t("headersLinks.about")} />
        <div className="flex justify-center items-center xl:mt-3">
          <SubTitle
            classList={" text-center"}
            subtitle={t("pagesData.aboutPage.subtitle1")}
          />
        </div>
        <DescriptionComponent
          description={t("pagesData.aboutPage.description1")}
        />
        <div className="mt-4 flex justify-center items-center flex-col gap-9 max-w-[1200px] mx-auto">
          <p className="text-center text-[12px] xl:text-[22px] lg:text-xl md:text-lg sm:text-[16px]">{t("pagesData.aboutPage.subDescription")}:</p>
          <ul className="about-list">
            <li>{t("pagesData.aboutPage.subListItem1")}</li>
            <li>{t("pagesData.aboutPage.subListItem2")}</li>
            <li>{t("pagesData.aboutPage.subListItem3")}</li>
            <li>{t("pagesData.aboutPage.subListItem4")}</li>
            <li>{t("pagesData.aboutPage.subListItem5")}</li>
          </ul>
        </div>
        <div className="relative flex justify-center my-4 md:my-16 ">
          <div className="absolute w-[30%] md:w-[40%] bottom-0 xl:left-[3%]  left-0 lg:left-[-10%]">
            <img src={img1} className="object-cover " alt="" />
          </div>
          <img src={main} className=" w-[80%] 2xl:ms-20" alt="" />

          <div className="absolute bottom-0  w-[30%]  right-0    lg:w-auto 2xl:block lg:right-[-0] 2xl:right-[3%]">
            <img src={img2} className="object-cover" alt="" />
          </div>
        </div>

        <div data-aos="zoom-in-up" data-aos-duration="1500">
          <div className="flex flex-wrap gap-3 md:justify-evenly md:my-16 my-6 md:text-[23px]  text-[15px] font-semibold   text-main">
            {afzalliklar.map((item) => (
              <div
                key={item.afzallikNumber}
                className="flex items-center gap-2 md:gap-4"
              >
                <Circle icon={item.img} />
                <p>
                  {t(
                    "pagesData.aboutPage.afzalliklar.afzallik" +
                    item.afzallikNumber
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nega */}
        <div className="flex justify-center md:my-3">
          <SubTitle
            classList={"  text-center font-bold"}
            subtitle={t("pagesData.aboutPage.subtitle2")}
          />
        </div>
        <div className="flex justify-center">
          <DescriptionComponent
            description={t("pagesData.aboutPage.description2")}
            classList={"!max-w-[1000px]    xl:mt-6"}
          />
        </div>
      </div>
      <Marquee />
      <ContactPage />

    </section>
  );
};

export default About;
