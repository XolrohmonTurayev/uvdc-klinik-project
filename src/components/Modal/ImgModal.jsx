import React, { useContext, useState } from "react";
import { ModalUser } from "../../context/ModalContext";

import "./style.css";
const ImgModal = () => {
  const { imageData, openImgModal, closeImgModal, isImgOpen } =
    useContext(ModalUser);

  if (!isImgOpen) return null;

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modalBackActive")) {
      closeImgModal();
    }
  });

  return (
    <div
      className={`fixed ${
        isImgOpen ? "modalBackActive" : "modalBackNone"
      } flex justify-center    items-center  w-full`}
    >
      <div
        className={`${
          isImgOpen ? "modalProductActive" : "modalProductNone"
        } relative flex flex-col top-[50px]  mx-[10px]  overflow-hidden  flex-wrap lg:h-[80%] h-[60%] justify-between transition-all sm:w-[60%] md:w-[80%] lg:w-[90%] max-w-[1000px] p-2 rounded-[12px] gap-[25px] bg-main shadow-md contact-form items-center md:flex-row`}
      >
        <img
          src={imageData}
          className="object-cover w-full h-full rounded-xl"
          alt=""
        />
        <div
          onClick={closeImgModal}
          className="rounded-[12px] absolute top-0 right-0 object-cover p-2 px-4 text-white cursor-pointer bg-main"
        >
          <i class="fa-solid fa-x"></i>
        </div>
      </div>
    </div>
  );
};

export default ImgModal;
