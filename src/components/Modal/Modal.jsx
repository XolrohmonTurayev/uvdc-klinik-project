import React, { useContext, useState } from "react";
import { ModalUser } from "../../context/ModalContext";
import DefaultBtn from "../Buttons/DefaultBtn";
import "./style.css";
import img1 from "/qabul.webp";
import Input from "../main/form/Input";
import { useTranslation } from "react-i18next";
import OutlineBtn from "../Buttons/OutlineBtn";
import showAddSwal from "../swals/AddSwal";
import InputNumber from "../main/form/InputNumber";

const Modal = () => {
  const { isModalOpen, handleCloseModal } = useContext(ModalUser);
  const [isClosing, setIsClosing] = useState(false);
  const [object, setObject] = useState({});

  const { t } = useTranslation();

  if (!isModalOpen && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      handleCloseModal();
    }, 300); // Длительность анимации закрытия в миллисекундах
  };

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modalBackActive")) {
      handleClose();
    }
  });

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
    showAddSwal("booking", object, handleClose);
  };

  return (
    <div
      className={`fixed ${
        isModalOpen ? "modalBackActive" : "modalBackNone"
      } flex justify-center   items-center w-full`}
    >
      <div
        className={`${
          isModalOpen && !isClosing ? "modalProductActive" : "modalProductNone"
        } relative flex flex-col flex-wrap justify-between transition-all w-[90%] sm:w-[60%] md:w-[80%] lg:w-[90%] max-w-[500px] lg:p-6 p-3 rounded-[12px] gap-[25px] bg-white shadow-md contact-form items-center md:flex-row`}
      >
        <img src={img1} className="w-full h-full rounded-xl" alt="" />
        <form className="w-full ">
          <Input   func={changeHandlerSelf} id={"username"} place={t("form.ism")} />
          <InputNumber
            func={changeHandlerSelf}
            id={"phone"}
            place={"Telefon raqamingiz"}
          />
          <div className="flex items-center justify-between mt-4">
            <OutlineBtn click={handleClose} text={t("btns.back")} />
            <DefaultBtn click={handleSubmit} text={t("btns.send")} />
          </div>
        </form>
      </div>
    </div>
  );
};

export { Modal };

const ModalComp = ({text}) => {
  const { t } = useTranslation();
  const { handleOpenModal } = useContext(ModalUser);

  return <DefaultBtn click={handleOpenModal} text={t(text)} />;
};

export default ModalComp;
