import React from "react";

import logo from "/logo.png";
import { Link } from "react-router-dom";
import { linksPage } from "../../constants";
import { useTranslation } from "react-i18next";

import "./style.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-footerColor">
      <div className="container px-[15px] lg:px-16  py-10 xl:px-20 xl:py-16">
        <div className="flex flex-col items-start justify-between gap-4 mb-12 xl:flex-row xl:gap-0">
          <div className="md:max-w-[460px] flex justify-center flex-col">
            <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row lg:gap-6 md:w-max">
              <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 p-[4px] bg-white rounded-full">
                <Link to={"/"} className="block w-14 h-14">
                  <img
                    src={logo}
                    alt=""
                    className="object-contain rounded-full"
                  />
                </Link>
              </div>
              <h2 className="lg:text-2xl  text-[17px] font-medium text-white font-poppins">
                {t("main.footer.title")}
              </h2>
            </div>
            <p className="font-poppins px-4 md:px-0 text-center md:text-start lg:leading-9 font-normal text-[13px] lg:text-[17px] text-white mt-3 lg:mt-7">
              {t("main.footer.description")}
            </p>
          </div>
          <div className="flex flex-row gap-6 footer-porblema lg:mt-3 xl:mt-0 md:gap-20">
            <div className="flex flex-col gap-3 text-white xl:gap-7">
              <p className="font-poppins font-medium text-[16px] md:text-[24px]">
                {t("main.footer.subtitle")}
              </p>
              <ul className="flex font-poppins font-normal text-[14px] md:text-[18px] flex-col items-start gap-[12px]">
                {linksPage.map((item) => (
                  <Link key={item.id} to={item.link}>
                    {t(`headersLinks.${item.title}`)}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex flex-1  items-end font-poppins font-normal text-[14px] md:text-[18px] flex-col  gap-3 xl:gap-7 text-white max-w-[440px]">
              <p className="w-full font-poppins font-medium text-[16px] md:text-[24px] text-white ">
                {t("pagesData.contactPage.biz_bilan_boglaning")}
              </p>
              <ul className="flex flex-col  items-stretch justify-center gap-[12px] md:gap-4">
                <li>
                  <a
                    className="flex items-center w-full gap-2 font-normal md:gap-3 font-poppins "
                    href="mailto: info@ultraveda.uz"
                  >
                    <i className="text-md md:text-2xl fa-solid fa-envelope"></i>
                    <p>info@ultraveda.uz</p>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center w-full gap-2 font-normal md:gap-3 font-poppins "
                    href="tel: +998507111105"
                  >
                    <i className="text-md md:text-2xl fa-solid fa-phone-volume"></i>
                    <p>+998(50) 711 1105</p>
                  </a>
                </li>
                <li>
                  <p className="flex items-baseline w-full gap-2 font-normal md:items-center md:gap-3 font-poppins ">
                    <i className="text-md md:text-2xl fa-solid fa-map-location-dot"></i>
                    <span>{t("pagesData.contactPage.manzili")}</span>
                  </p>
                </li>
              </ul>
              <div className="flex items-center justify-start w-full gap-4">
                <div className="flex items-center justify-center bg-white rounded-full w-9 h-9">
                  <a href="" className="flex items-center justify-center">
                    <i className="text-2xl fa-brands fa-telegram text-main"></i>
                  </a>
                </div>
                <div className="flex items-center justify-center bg-white rounded-full w-9 h-9">
                  <a href="" className="flex items-center justify-center">
                    <i className="text-2xl fa-brands fa-instagram text-main"></i>
                  </a>
                </div>
                <div className="flex items-center justify-center bg-white rounded-full w-9 h-9">
                  <a href="" className="flex items-center justify-center">
                    <i className="text-2xl fa-brands fa-youtube text-main"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full text-[#d9d9d9]" />
        <div className="flex justify-center items-center mt-2 gap-[6px] text-white">
          Developed by
          <Link to={"https://www.limon.uz/"} className="limon-link">
            <div className="w-max text-yellow limon">
              Limon IT Company
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
