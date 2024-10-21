import React, { useEffect, useState, } from "react";
import TitleComponent from "../components/Title";
import SubTitle from "../components/SubTitle";
import DescriptionComponent from "../components/Description";
import DefaultBtn from "../components/Buttons/DefaultBtn";
import { useTranslation } from "react-i18next";
import TestimonialsSection from "../Sections/TestimonialsSection";
import showAddSwal from "../components/swals/AddSwal";
import Marquee from "../components/main/Marquee";
import Loader from "../components/reusable/Loader";
import InputNumber from "../components/main/form/InputNumber";

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-24 sm:mt-[120px] mb-6  sm:pt-5">
      <Loader />
      <TitleComponent title={t("headersLinks.contact")} />
      <ContactPage />
      <Marquee />
      <TestimonialsSection />
    </section>
  );
};

export default Contact;

const ContactPage = () => {
  const { t } = useTranslation();
  const [object, setObject] = useState({});
  const changeHandlerSelf = (e) => {
    const { name, value } = e.target;
    setObject((prev) => {
      prev = {
        ...prev,
        [name]: value,
      };
      const res = prev;
      return res;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showAddSwal("contact", object);
  };

  return (
    <div className="container my-4 lg:my-16 px-[10px] md:px-0 ">
      <div className="flex flex-col-reverse items-center justify-center gap-8 mt-8 lg:flex-row lg:items-start md:mt-12 lg:gap-14">
        <div className="lg:max-w-[650px]  w-full text-left">
          <SubTitle
            subtitle={t("pagesData.contactPage.biz_bilan_boglaning")}
            classList={"mb-3 hidden  lg:block"}
          />
          <DescriptionComponent
            classList={"mb-4 hidden !text-left lg:block"}
            description={t("pagesData.contactPage.ishonch_sozlari")}
          />
          <div className="flex flex-col items-start justify-center gap-3 md:gap-5">
            <div className="flex items-center justify-center gap-3 md:gap-5 *:first-letter:">
              <div className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] rounded-full bg-main flex justify-center items-center">
                <i className="fa-solid fa-phone-volume text-[17px] text-white"></i>
              </div>
              <a
                href="tel: +998507111105"
                className="font-poppins font-medium text-[14px] lg:text-[24px] md:leading-8 text-[#424242]"
              >
                +998(50)-711-1105
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 md:gap-5 *:first-letter:">
              <div className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] rounded-full bg-main flex justify-center items-center">
                <i className="fa-solid fa-envelope text-[17px] text-white"></i>
              </div>
              <a
                href="mailto:info@ultraveda.uz"
                className="font-poppins font-medium text-[14px] lg:text-[24px] md:leading-8 text-[#424242]"
              >
                info@ultraveda.uz
              </a>
            </div>
            <div className="flex items-start justify-center gap-3 md:gap-5 *:first-letter:">
              <div className="w-[35px] h-[35px] md:w-[45px] md:h-[45px]  rounded-full bg-main flex justify-center items-center">
                <i className="fa-solid fa-map-location-dot text-[17px] text-white"></i>
              </div>
              <div className="flex-1 ">
                <p className="font-poppins font-medium text-[14px] lg:text-[24px] md:leading-8 text-[#424242]">
                  {t("pagesData.contactPage.manzil_sozi")}
                </p>
                <p className="text-[#a3a3a3] md:text-[17px] text-[13px] lg:w-[450px]">
                  {t("pagesData.contactPage.manzili")}
                </p>
              </div>
            </div>
          </div>
          <div className="md:px-4 md:py-4 px-2 py-2 bg-[#3e39cf35] mt-9 rounded-[10px]">
            <iframe
              className="rounded-[6px] w-full "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.469220692731!2d60.63554197588669!3d41.53743667128118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc900692569d7%3A0x55bda06fcb079fa6!2sUltra%20veda%20klinika!5e0!3m2!1sru!2s!4v1727031349298!5m2!1sru!2s"
              width="650"
              height="350"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Form  */}
        <div className="lg:contact-form shadow-md border  border-border  p-[15px] lg:p-10 w-full lg:max-w-[650px] rounded-[8px] md:rounded-2xl">
          <SubTitle
            subtitle={t("pagesData.contactPage.biz_bilan_boglaning")}
            classList={"md:mb-3  !text-[20px]  lg:hidden "}
          />
          <DescriptionComponent
            classList={"mb-4 mt-0 !text-[14px] lg:hidden"}
            description={t("pagesData.contactPage.ishonch_sozlari")}
          />
          <form action="">
            <label
              className="w-full ms-2 text-[14px] md:text-[16px] md:ml-5"
              htmlFor="name"
            >
              {t("form.ism")}
            </label>
            <br />
            <input
              className=" mb-2 md:mb-6 contact-input w-full px-3 lg:px-5 py-2 md:py-3 border-[1px] rounded-[8px] md:rounded-[14px] border-borderColor font-poppins font-normal text-sm md:text-lg"
              type="text"
              id="username"
              name="username"
              placeholder={t("form.ism")}
              onChange={changeHandlerSelf}
            />
            <br />
            <label
              className="w-full ms-2 text-[14px] md:text-[16px] md:ml-5"
              htmlFor=""
            >
              {t("form.phone")}
            </label>
            <br />
            <InputNumber func={changeHandlerSelf} id={"phone"} />

            <textarea
              className="text-sm md:text-lg md:mt-[30px] rounded-[8px] md:rounded-[14px] py-[13px] px-[15px] md:py-[20px] md:px-[25px] mt-[20px] mb-4 font-normal resize-none contact-textarea outline-1 font-poppins"
              cols={"70"}
              name="message"
              id="message"
              onChange={changeHandlerSelf}
              placeholder={t("form.message")}
            ></textarea>
            <DefaultBtn
              click={handleSubmit}
              text={t("btns.send")}
              alignment={"center"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export { ContactPage };
