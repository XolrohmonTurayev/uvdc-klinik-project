import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const DoctorCard = ({ id, img, name, job }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full mx-auto hover:shadow-card transition-all rounded-[12px] group overflow-hidden max-w-[385px] shadow-md">
      <div className="flex justify-center relative group bg-[#3F39CF1A]">
        <img
          src={`../../../doctors/doctor${img}.png`}
          className="object-cover bg-[#EBEBFA] aspect-[1/2] w-full h-full lg:max-h-[400px] max-h-[300px]"
          alt={`../../../doctors/doctor${img}.png`}
        />
      </div>
      <div className="w-full bg-white ">
        <div className=" flex  flex-col items-center">
          <div className=" translate-y-[-25px] md:translate-y-[-36px]  px-[20px]   bg-main   group-hover:scale-[1.02] transition-all text-main rounded-[40px] justify-center items-center flex gap-[15px] py-[10px] md:px-[45px] 2xl:px-[65px]  md:py-[15px]">
            <Link to={"tel:+998507111105"}>
              <div className="flex text-md xl:text-[22px] rounded-[50%] bg-white justify-center items-center  w-[30px] h-[30px] md:w-[42px] md:h-[42px]">
                <i className="fa-solid fa-phone"></i>
              </div>
            </Link>
            <Link
              to={
                "https://www.instagram.com/uzi_doppler_center_?igsh=MnNkYzhjd3pnbHMx"
              }
              className=" flex-custom"
            >
              <i className="fa-brands md:text-[42px] text-[30px]  fa-telegram  text-white"></i>
            </Link>
            <Link
              to={
                "https://www.instagram.com/uzi_doppler_center_?igsh=MnNkYzhjd3pnbHMx"
              }
            >
              <div className="flex text-xl xl:text-[22px] rounded-[50%] bg-white justify-center items-center  w-[30px] h-[30px] md:w-[42px] md:h-[42px]">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </Link>
          </div>
          <div className="translate-y-[-15px] text-center">
            <h1 className=" text-md lg:text-2xl 2xl:text-[26px] font-semibold">
              {t(`${name}`)}
            </h1>
            <p className=" text-sm md:text-lg lg:text-xl   xl:text-[20px]">
            {t(`${job}`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
