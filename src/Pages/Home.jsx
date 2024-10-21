import React, { useContext, useEffect } from "react";
import { ContactPage } from "./Contact";
import DoctorsSection from "../Sections/HomePage/DoctorsSection";
import Counters from "../components/main/Counters";
import TestimonialsSection from "../Sections/TestimonialsSection";
import Banner from "../Sections/HomePage/Banner";
import Advantages from "../Sections/HomePage/Advantages";
import Aboutus, { AboutusMobile } from "../Sections/HomePage/aboutus";
import { Modal } from "../components/Modal/Modal";
import GalleryMarquee from "../components/main/GalleryMarquee";
import { ModalUser } from "../context/ModalContext";
import Loader from "../components/reusable/Loader";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex-col gap-8 my-12 ">
      <Loader/>
      <div className="relative mb-10 ">
        <Banner />
        <Advantages />
      </div>
      <div className="hidden lg:block">
        <Aboutus />
      </div>
      <div className=" lg:hidden">
        <AboutusMobile />
      </div>

      <GalleryMarquee />
      <TestimonialsSection />
      <DoctorsSection />
      <ContactPage />
    </div>
  );
};

export default Home;
