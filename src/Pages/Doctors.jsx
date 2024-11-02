import React, { useEffect } from "react";
import TitleComponent from "../components/Title";
import DescriptionComponent from "../components/Description";
import DoctorCard from "./Cards/DoctorCard";
import { ContactPage } from "./Contact";
import { useTranslation } from "react-i18next";
import Marquee from "../components/main/Marquee";
import Loader from "../components/reusable/Loader";
import { doctorNames, seoData } from "../constants";
import Seo from "../components/Seo";


const Doctors = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <section className="pt-24 sm:mt-[120px] mb-6  sm:pt-5">
      <Loader />
      <div className=" container px-[10px] md:px-0 mx-auto ">
        <DoctorsPage />
      </div>
      <Marquee />
      <ContactPage />
    </section>
  );
};

export default Doctors;

const DoctorsPage = () => {
  const { i18n, t } = useTranslation();

  return (
    <>
      <TitleComponent title={t("headersLinks.doctors")} />
      <DescriptionComponent
        description={
          t("pagesData.doctorsPage.description")
        }
      />
      <div>
        {seoData.map((el) => (
          <Seo key={el.id} item={el} />
        ))}
      </div>
      <div className="grid my-[20px] px-[10px]  md:my-[60px] lg:my-[100px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[11px] gap-y-[30px] md:gap-[68px]  md:gap-y-[50px] lg:gap-[88px]  lg:gap-y-[70px] justify-center">
        {doctorNames.map((el) => (
          <DoctorCard key={el.id} img={el.img} name={el.name} job={el.job} />
        ))}

      </div>

    </>
  );
};

export { DoctorsPage };
