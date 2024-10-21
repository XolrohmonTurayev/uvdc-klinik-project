import React from "react";
import { linksPage } from "../../constants";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const LinksPage = () => {
  const { t } = useTranslation();
  return (
    <div className=" flex items-center">
      <div className=" hidden xl:flex   relative   justify-center items-center gap-4 font-mono font-semibold">
        {linksPage.map((item) => (
          <Link key={item.id} to={item.link}>
            {t(`headersLinks.${item.title}`)}
          </Link>
        ))}
      </div>
      <div className="  hidden lg:flex xl:hidden   relative   justify-center items-center gap-4 font-mono font-semibold">
        {linksPage.slice(0, 5).map((item) => (
          <Link key={item.id} to={item.link}>
            {t(`headersLinks.${item.title}`)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinksPage;
