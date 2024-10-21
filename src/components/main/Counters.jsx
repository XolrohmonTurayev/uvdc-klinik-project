import React, { useEffect } from "react";
import { counters } from "../../constants";
import Circle from "../reusable/Circle";
import Counter from "../reusable/Counter";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
const Counters = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({duration:5000});
    AOS.refresh();
  }, []);
  return (
    <div data-aos="zoom-in-up" >
      <div className=" py-[35px] md:py-[80px] px-[20px]  font-mono text-[12px]  md:text-1xl xl:text-md font-medium lg:my-16 my-8 bg-[#3F39CF1A]  ">
        <div className="container flex flex-col flex-wrap justify-start gap-4 md:flex-row md:items-center lg:justify-start 2xl:justify-evenly">
          {counters.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 md:gap-4">
              <Circle icon={item.img} />
              <div>
                <Counter count={item.count} />
                <p className="max-w-[230px] md:max-w-[260px]">
                  {t("main.counters.counterNumber" + item.counterNumber)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counters;
