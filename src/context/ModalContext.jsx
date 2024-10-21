import React, { createContext, useEffect, useState } from "react";

export const ModalUser = createContext();
const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImgOpen, setIsImgOpen] = useState(false);

  const [imageData, setImgData] = useState({});

  const openImgModal = (imgData) => {
    setIsImgOpen(true);
    setImgData(imgData);
  };


  const closeImgModal = () => {
    setIsImgOpen(false);
    setImgData({});
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const activeModal = () => {
    setTimeout(() => {
      handleOpenModal();
    }, 7000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const htmlTag = document.querySelector("html");
  if (isModalOpen == true) {
    htmlTag.style.overflow = "hidden";
  }
  else {
    htmlTag.style.overflow = "visible";
  }

  return (
    <ModalUser.Provider
      value={{
        isModalOpen,
        handleCloseModal,
        handleOpenModal,
        imageData,
        openImgModal,
        closeImgModal,
        isImgOpen,
        activeModal,

      }}
    >
      {children}
    </ModalUser.Provider>
  );
};

export default ModalProvider;
