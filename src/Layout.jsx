import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";
import ImgModal from "./components/Modal/ImgModal";
import CursorFollow from "./components/reusable/Cursor";
import Loader from "./components/reusable/Loader";
import { useTranslation } from "react-i18next";

const Layout = () => {
  return (
    <div className="relative font-mono">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
      <Modal />
      <ImgModal />
      <CursorFollow />
      <Loader />
    </div>
  );
};

export default Layout;
