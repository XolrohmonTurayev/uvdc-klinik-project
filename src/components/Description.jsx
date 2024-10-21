import React from "react";
import { useTranslation } from "react-i18next";

const DescriptionComponent = ({ description, classList }) => {
  const { t } = useTranslation();
  return (
      <p
        className={` text-[12px] sm:text-xs text-center  md:text-[18px] lg:text-[22px] font-mono  !text-black ${classList}`}
      >
        {description}
      </p>
  );
};

export default DescriptionComponent;
