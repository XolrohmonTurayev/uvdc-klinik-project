import { SwiperSlide } from "swiper/react";
import TitleComponent from "../../components/Title";
import SwiperTestimonials from "../../components/main/SwiperTestimonials";
import DoctorCard from "../../Pages/Cards/DoctorCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DescriptionComponent from "../../components/Description";
import DefaultBtn from "../../components/Buttons/DefaultBtn";
import { doctorNames } from "../../constants";

const DoctorsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="container md:px-0">
      <div className="px-[10px]">
      <TitleComponent title={t("headersLinks.doctors")} />
      <DescriptionComponent
        description={
          t("pagesData.doctorsPage.description")
        }
      />
      </div>
      <SwiperTestimonials>
        {doctorNames.map((el) => (
          <SwiperSlide key={el.id} className="">
            <div className="p-[20px] h-full   overflow-hidden">
              <DoctorCard img={el.img} name={el.name} job={el.job}/>
            </div>
          </SwiperSlide>
        ))}
      </SwiperTestimonials>
      <div className="flex items-center justify-center">
        <Link to={"/doctors"}>
        <DefaultBtn text={"Barchasini ko'rish"}/>
        </Link>
      </div>
    </div>
  );
};
export default DoctorsSection;
