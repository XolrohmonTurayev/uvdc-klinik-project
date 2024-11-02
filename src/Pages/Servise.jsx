import React, { useContext, useEffect } from "react";
import TitleComponent from "../components/Title";
import DescriptionComponent from "../components/Description";
import { servicesData } from "../constants/services";
import DefaultBtn from "../components/Buttons/DefaultBtn";
import { Link } from "react-router-dom";
import DoctorsSection from "../Sections/HomePage/DoctorsSection";
import { useTranslation } from "react-i18next";
import { ModalUser } from "../context/ModalContext";
import Marquee from "../components/main/Marquee";
import Loader from "../components/reusable/Loader";
const Servise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const { activeModal } = useContext(ModalUser);
  useEffect(() => {
    activeModal();
  }, []);


  const { t, i18n } = useTranslation();

  const lang = i18n.language;
  return (
    <section className="pt-24 sm:mt-[120px] mb-6  sm:pt-5">
      <Loader />
      <div className="container px-[10px]  lg:px-0">
        <div classList="">
          <TitleComponent title={t("headersLinks.service")} />
          <DescriptionComponent
            description={t("pagesData.servicePage.description")}
          />
          <Link to={"/contact"}>
            <h3 className="w-max mx-auto transition-all mt-5 text-main text-2xl text-center font-bold md:text-4xl lg:hover:-tracking-tighter">{t("pagesData.servicePage.consultation")}</h3>
          </Link>
          <div className="flex justify-center items-center">
            <div className="grid my-[20px] md:my-[60px] lg:my-[100px] grid-cols-2 lg:grid-cols-3 gap-[11px] gap-y-[20px] md:gap-[68px]  md:gap-y-[50px] lg:gap-[88px]  lg:gap-y-[70px] justify-between">
              {servicesData[lang]?.map((item, idx) => (
                <div className=" group flex flex-col  rounded-[12px] overflow-hidden max-w-[385px] shadow-md">
                  <div className="flex lg:pt-[70px] pt-[30px] lg:pb-[50px] pb-[20px] justify-center bg-[#3F39CF1A]  ">
                    <img
                      src={`/servicesIcons/${item.icon}.png`}
                      className="object-cover group-hover:scale-110  all  duration-[.3s]  lg:w-[100px] w-[55px] lg:h-[100px] h-[55px] "
                      alt={`/servicesIcons/${item.icon}.png`}
                    />
                  </div>
                  <div className="w-full   h-full  relative  bg-white lg:p-[20px] p-[10px] ">
                    <h1 className=" text-main   text-center text-sm md:text-md lg:text-2xl 2xl:text-[22px] font-semibold">
                      {item.title}
                    </h1>
                    <div className="absolute left-0     opacity-0  group-hover:opacity-100 flex justify-center items-center right-0 top-[100%] transition-all group-hover:top-0 bottom-0 backdrop-blur-sm">
                      <Link to={`/service/${idx}`}>
                        <DefaultBtn
                          classList={"px-[50px]  !rounded-[8px]"}
                          text={t("btns.more")}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Marquee />
      <DoctorsSection />

    </section>
  );
};

export default Servise;
