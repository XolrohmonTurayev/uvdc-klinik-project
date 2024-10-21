<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React-Folder

# utraveda

# utraveda

# utraveda

import React from "react";
import { advantagesData } from "../../constants";

const Advantages = () => {
return (
<section className="  container">
<div className="container absolute bottom-[-100px] ">
<div className="   flex      flex-wrap justify-center items-stretch rounded-2xl">
{advantagesData.map((el) => (
<div
              key={el.id}
              className="adv-card  shadow-md max-w-[380px] w-full text-center p-12 "
            >
<div className="w-28 h-28 rounded-full mx-auto bg-grad flex-custom mb-5">
<img src={el.img} alt="" className="w-[75px]" />
</div>
<div className="adv-info">
<h3 className="mb-4">{el.title}</h3>
<p>{el.text}</p>
</div>
</div>
))}
</div>
</div>
</section>
);
};

export default Advantages;

import React from "react";
import DescriptionComponent from "../../components/Description";
import DefaultBtn from "../../components/Buttons/DefaultBtn";

const Banner = () => {
  return (
    <section className="banner-section relative top-[-150px] bg-homeBannerImg bg-cover bg-no-repeat bg-center ">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center py-[200px]">
          <h1 className="text-white max-w-[1250px] font-poppins font-bold text-[60px]">
            ULTRA VEDA Klinikasi Sizning Sog’ligigiz Haqida Qayg’uradi
          </h1>
          <DescriptionComponent
            classList={"leading-10 mt-3 mb-14"}
            description={
              "ULTRA VEDA Klinikasida siz sog'liginggiz uchun zarur bo'lgan barcha ko'riklardan o'tishinggiz va davolanishinggiz mumkin"
            }
          />
          <DefaultBtn
            classList={"rounded-lg font-poppins font-semibold"}
            text={"Batafsil ma'lumot"}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner; -->
# ultraVeda2
# UVDC
# UVDC-origin
# UVDC
# UVDC
# ultra-veda-diagnostics-center
# uvdc-klinik-project
