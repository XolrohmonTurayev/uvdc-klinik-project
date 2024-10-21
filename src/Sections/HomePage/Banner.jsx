import React from "react";
import DescriptionComponent from "../../components/Description";
import DefaultBtn from "../../components/Buttons/DefaultBtn";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-center justify-center items-center top-0 flex px-[10px] text-white  min-h-[420px] bg-no-repeat bg-cover banner-section">
      <div className="lg:container">
        <div className="flex flex-col justify-center items-center text-center pt-[0px] md:py-[200px] ">
          <h1 className="max-w-[1250px] font-poppins font-semibold lg:font-bold lg:text-[60px] text-[24px]">
            {t("pagesData.homePage.title")}
          </h1>
          <DescriptionComponent
            classList={"lg:leading-10 !text-white mt-3 mb-4 lg:mb-14"}
            description={t("pagesData.homePage.subtitle")}
          />
          <Link to={"/about"}>
            <DefaultBtn
              classList={"rounded-lg font-poppins font-semibold"}
              text={t("btns.more")}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
