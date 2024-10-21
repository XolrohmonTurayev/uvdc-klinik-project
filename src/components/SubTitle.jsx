import React from "react";
import { useTranslation } from "react-i18next";

const SubTitle = ({ subtitle, classList }) => {
  const { t } = useTranslation();
  return (
    <p
      className={`font-semibold text-center sm:text-start max-w-[1200px]  sm:text-xs  md:text-md lg:text-[30px] font-mono text-main ${classList} `}
    >
      {subtitle}
    </p>
  );
};

export default SubTitle;
