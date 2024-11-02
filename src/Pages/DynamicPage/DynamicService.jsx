import React, { useContext, useEffect, useState } from "react";
import TitleComponent from "../../components/Title";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import DescriptionComponent from "../../components/Description";
import SubTitle from "../../components/SubTitle";
import { servicesData } from "../../constants/services";
import DoctorsSection from "../../Sections/HomePage/DoctorsSection";
import Contact, { ContactPage } from "../Contact";
import ModalComp, { Modal } from "../../components/Modal/Modal";
import { ModalUser } from "../../context/ModalContext";
import Marquee from "../../components/main/Marquee";
import Loader from "../../components/reusable/Loader";
const DynamicService = () => {

  const { t } = useTranslation();
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const serviceData = servicesData[lang][id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-24 sm:mt-[120px] sm:my-16   sm:pt-5">
      <Loader/>
      <div className="container ">
        <TitleComponent title={serviceData?.title} />

        <div className="mt-4 ">
          <img
            src={`/serviceImg/${serviceData?.icon}/main.jpg`}
            className="object-cover max-w-[1536px] w-full max-h-[600px] lg:rounded-[22px] rounded-[12px] mx-auto "
            alt=""
          />
          <div className="lg:rounded-full rounded-full   flex-wrap  flex items-center justify-center gap-x-[40px] lg:justify-between py-[10px]   bg-white mx-auto -translate-y-[50%] shadow-md lg:py-4 md:ps-[40px] xl:ps-[80px]  px-[20px]  xl:w-[90%] w-[98%] lg:w-[95%]">
            <div>
              <DescriptionComponent
                classList={"!text-[14px]   md:!text-[18px] text-start"}
                description={t("pagesData.servicePage.serviceType")}
              />
              <SubTitle
                classList={"!text-[12px] md:!text-[18px] xl:!text-[20px]"}
                subtitle={serviceData?.title}
              />
            </div>
            <div className="">
              <DescriptionComponent
                classList={"!text-[14px]  md:!text-[18px] text-start"}
                description={t("pagesData.servicePage.doctor")}
              />
              <SubTitle
                classList={"!text-[12px] md:!text-[18px] xl:!text-[20px]"}
                subtitle={t("pagesData.servicePage.doctorLevel")}
              />
            </div>
            <div className="hidden lg:block">
              <ModalComp text={"btns.zayavka_btn"} />
            </div>
          </div>
          <div className="flex  lg:hidden justify-center  -translate-y-[50%]">
            <ModalComp  text={"btns.zayavka_btn"}/>
          </div>
        </div>

        <div className=" mb-4  px-[10px] md:px-0">
          <SubTitle
            classList={"!text-[16px] md:!text-[18px] xl:!text-[20px]"}
            subtitle={serviceData?.question.title}
          />
          <DescriptionComponent
            classList={
              "md:!text-[18px] !text-[14px] !text-black  xl:!text-[20px] text-start"
            }
            description={serviceData?.question.answer}
          />
        </div>
        <div className=" my-4  px-[10px] md:px-0">
          <div className="grid grid-cols-2 gap-2 lg:gap-6 lg:grid-cols-4 ">
            {[1, 2, 3, 4].map((item) => (
              <img
                className="max-w-[400px] w-full lg:rounded-xl rounded-md h-full object-cover"
                src={`/serviceImg/${serviceData?.icon}/img${item}.jpg`}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className=" my-4  px-[10px] md:px-0">
          <SubTitle
            classList={"!text-[16px] md:!text-[18px] xl:!text-[20px]"}
            subtitle={serviceData?.benefits.title + ":"}
          />
          {serviceData?.benefits.answer.map((item) => (
            <div className="xl:!text-[22px] !text-[14px] md:!text-[18px] flex items-baseline mt-2 lg:mt-0 text-main lg:gap-4 gap-2">
              <i class="fa-solid fa-circle-check"></i>
              <DescriptionComponent
                classList={
                  " md:!text-[18px]  !text-[14px] !text-black  xl:!text-[20px]    text-start"
                }
                description={item}
              />
            </div>
          ))}
        </div>
        <div className=" my-4  px-[10px] md:px-0">
          <SubTitle
            classList={"!text-[16px] md:!text-[18px] xl:!text-[20px]"}
            subtitle={serviceData?.stepsTitle + ":"}
          />
          {serviceData?.steps.map((step, idx) => (
            <div className="xl:!text-[22px] !text-[12px] md:!text-[18px] mt-2 flex flex-col items-baseline text-main">
              <DescriptionComponent
                classList={
                  "!text-[14px] md:!text-[18px]  !text-black xl:!text-[20px]    text-start"
                }
                description={idx + 1 + "." + step.name + ":"}
              />
              {typeof step.detail == "string" ? (
                <div className="flex flex-wrap gap-2">
                  <div className="mt-[7px] bg-black rounded-full lg:w-2 w-[6px] lg:h-2 h-[6px] lg:mt-3"></div>
                  <DescriptionComponent
                    classList={
                      "!text-[12px] md:!text-[18px] !text-black xl:!text-[20px]  flex-1   text-start"
                    }
                    description={step.detail}
                  />
                </div>
              ) : (
                step.detail.map((detail) => (
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <div className="mt-[7px] bg-black rounded-full lg:w-2 w-[6px] lg:h-2 h-[6px] lg:mt-3"></div>
                      <DescriptionComponent
                        classList={
                          "!text-[12px] md:!text-[18px] !text-black xl:!text-[20px]  flex-1   text-start"
                        }
                        description={detail.name}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 ms-4">
                      <div className="mt-[7px]  border border-black rounded-full lg:w-2 w-[6px] lg:h-2 h-[6px] lg:mt-3"></div>
                      <DescriptionComponent
                        classList={
                          "!text-[12px] md:!text-[18px] !text-black xl:!text-[20px]  flex-1   text-start"
                        }
                        description={detail.description}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
      <Marquee />
      <div className="px-[10px]">
        <DoctorsSection />
      </div>
      <ContactPage />
    </section>
  );
};

export default DynamicService;
