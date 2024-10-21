import React from "react";
import { useTranslation } from "react-i18next";

const TitleComponent = ({ title, classList }) => {
  const { t } = useTranslation();

  return (
    <h1
      className={`text-center mb-2 lg:my-0 text-xl md:text-2xl  lg:text-[48px] font-mono font-semibold text-main ${classList}`}
    >
      {title}
    </h1>
  );
};

export default TitleComponent;
