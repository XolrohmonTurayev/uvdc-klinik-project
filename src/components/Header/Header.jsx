import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LinksPage from "./LinksPage";
import Language from "../Language/Language";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { linksPage } from "../../constants";
import siteLogo from "/logo.png";
import "./style.css";
import ModalComp from "../Modal/Modal";

const Header = () => {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  function menuHandle() {setMenuOpen(!menuOpen);}

  return (
    <header className="fixed top-0 z-[100] w-full lg:h-[100px] h-[80px] shadow-md">
      <div className="mx-1 md:mx-4 px-[10px] lg:px-[30px] xl:px-[30px] bg-white shadow-sm fixed   left-0 right-0 header rounded-full flex justify-between py-[5px] 2xl:px-[40px] xl:mx-10 my-[10px] ">
      <Link to={"/"}>
      <img
          src={logo}
          className=" object-cover md:w-[70px] w-[50px] md:h-[70px] h-[50px]"
          alt=""
        />
      </Link>
        <LinksPage />
        <div className="relative flex items-center gap-2 ">
          <div className="absolute left-[-80px]">
            <Language />
          </div>
          <div className="flex items-center justify-center">
            <div className="hidden lg:block">
              <ModalComp text={"btns.zayavka_btn"} />
            </div>
            <button
              onClick={menuHandle}
              className="w-10 h-10 bg-main rounded-full z-[101] flex-custom lg:hidden"
            >
              <i className={`fa-solid fa-bars text-2xl text-white`}></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute  top-0 ${
          menuOpen ? "burger-menu-active" : "burger-menu-inactive"
        } w-full burger-menu-wrapper flex-custom z-[99] h-[100vh]`}
      >
        <div className={`burger-menu bg-white h-full  pt-4`}>
          <div className="px-5 mb-10 ">
            <Link to={"/"}>
              <img
                className="md:w-[70px] w-[50px] md:h-[70px] h-[50px] object-cover"
                src={siteLogo}
                alt=""
              />
            </Link>
          </div>
          <div className="flex flex-col h-full gap-6">
            <nav>
              <ul className="px-5 ml-5 list-disc">
                {linksPage.map((el) => (
                  <li
                    key={el.id}
                    className="capitalize font-semibold text-lg tracking-[1px] w-max"
                  >
                    <Link onClick={menuHandle} to={`/${el.link}`}>
                      {t(`headersLinks.${el.title}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex justify-center">
            <ModalComp text={"btns.zayavka_btn"} />

            </div>
          </div>
          <div className="bg-main p-5  max-w-[300px] absolute bottom-0  ">
            <div className="flex flex-1  items-end font-poppins font-normal text-[14px] md:text-[18px] flex-col  gap-3 xl:gap-7 text-white max-w-[440px]">
              <p className="w-full font-poppins font-medium text-[16px] md:text-[24px] text-white ">
                Biz bilan bog'lanish
              </p>
              <ul className="flex flex-col  items-stretch justify-center gap-[12px] md:gap-4">
                <li>
                  <a
                    className="flex items-center w-full gap-2 font-normal md:gap-3 font-poppins "
                    href="mailto: gulsanam.aytimova@gmail.com"
                  >
                    <i className="text-md md:text-2xl fa-solid fa-envelope"></i>
                    <p>ultraveda@gmail.com</p>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center w-full gap-2 font-normal md:gap-3 font-poppins "
                    href="tel: +998914358651"
                  >
                    <i className="text-md md:text-2xl fa-solid fa-phone-volume"></i>
                    <p>+998(91) 435 8651</p>
                  </a>
                </li>
                <li>
                  <p className="flex items-baseline w-full gap-2 font-normal md:items-center md:gap-3 font-poppins ">
                    <i className="text-md md:text-2xl fa-solid fa-map-location-dot"></i>
                    <span>
                      Urganch sh, Temiryo’lchi MFY, Yoshlik ko’chasi 18\3v uy
                    </span>
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
        <div onClick={menuHandle} className="relative burger-menu-bg">
          <button
            onClick={menuHandle}
            className="absolute right-0 bg-main top-5 w-14 h-14 rounded-l-2xl"
          >
            <i className="text-3xl text-white fa-solid fa-chevron-left"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
