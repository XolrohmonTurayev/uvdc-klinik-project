import React, { useEffect } from "react";
import TitleComponent from "../components/Title";
import DescriptionComponent from "../components/Description";
import { ContactPage } from "./Contact";
import { useTranslation } from "react-i18next";
import Marquee from "../components/main/Marquee";
import Loader from "../components/reusable/Loader";

const News = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-24 sm:mt-[120px] mb-6  sm:pt-5">
      <Loader />
      <div className="container px-[10px] ">
        <TitleComponent title={t("headersLinks.news")} />
        <DescriptionComponent
          classList={" mx-auto !max-w-[1031px]"}
          description={t(t("pagesData.newsPage.description"))}
        />
        <div className="grid my-6 lg:my-16 grid-news   justify-center   gap-[30px] lg:gap-[50px]">
          {Array(21)
            .fill("")
            .map((item, idx) => (
              <video
                height={"0%"}
                className="rounded-xl w-full lg:w-[300px]"
                controls
              >
                <source
                  src={`/videos/img${idx + 1}.mp4 `}
                  type="video/mp4"
                />
                Ваш браузер не поддерживает видео.
              </video>
            ))}
          <iframe
            className="rounded-xl w-full lg:w-[300px] h-[533.33px]"
            height="200px"
            src="https://www.youtube.com/embed/7_3oKzsZJy0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Marquee />
      <ContactPage />
    </section>
  );
};

export default News;
