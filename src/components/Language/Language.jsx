import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();

  // Boshlang'ich qiymatni localStorage'dan olish
  const [activeLang, setActiveLang] = useState(localStorage.getItem('selectedLanguage') || 'uz');
  const [isOpen, setIsOpen] = useState(false);
  const langs = ["uz", "ru", "en"];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
    localStorage.setItem('selectedLanguage', lang); // Tilni saqlash
  };

  useEffect(() => {
    // Mahalliy saqlagichda saqlangan tilni olish va yuklash
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && savedLanguage !== activeLang) {
      i18n.changeLanguage(savedLanguage); // Tilingizni saqlangan tilga o'zgartirish
      setActiveLang(savedLanguage); // Aktif tilni yangilash
    }
  }, [i18n, activeLang]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center gap-3 dropdown">
      <div className="relative flex flex-col px-4 py-2 dropdown">
        <div onClick={toggleDropdown} className="flex gap-2 cursor-pointer dropdown">
          <img
            src={`/Main/langs/${activeLang}.svg`}
            className=" w-[20px] rounded-[50%] object-cover h-[20px] "
            alt=""
          />
          <button className="uppercase ">
            {activeLang}
          </button>
        </div>
        {isOpen && (
          <div className="absolute right-0 z-10 flex flex-col w-full gap-2 px-4 py-2 mt-2 font-normal transition-all bg-white rounded shadow-lg top-full">
            {langs.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  changeLanguage(item);
                  toggleDropdown();
                }}
                className="flex gap-2 cursor-pointer"
              >
                <img
                  src={`/Main/langs/${item}.svg`}
                  className=" w-[20px] rounded-[50%] object-cover h-[20px] "
                  alt=""
                />
                <button className="uppercase ">{item}</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Language;
