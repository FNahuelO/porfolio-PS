import React from "react";
import { useTranslation } from "react-i18next";
import { localizeProject, useProjects } from "../../hooks/useProjects";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const data = useProjects().map((project) =>
    localizeProject(project, i18n.language)
  );

  return (
    <div className="bg-white flex flex-col h-full justify-center items-center">
      <span className="text-3xl font-lato text-[#4A4A4A] mb-8">
        {t("page.prices.title")}
      </span>

      <Swiper
        effect="cards"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCards]}
        className="mySwiper max-w-[90vw] z-[99999]"
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="bg-white rounded-2xl shadow-xl !w-[90%] !h-[50rem] flex flex-col justify-center items-center"
          >
            <img
              src={item.imagen}
              alt={item.title}
              className="object-cover h-1/2 w-full rounded-t-2xl"
            />
            <div className="p-8">
              <h3 className="font-bold text-xl text-[#4A4A4A] mb-2">
                {item.title}
              </h3>
              <p className="text-[#8D8D8D] text-base">{item.text}</p>
              <div className="flex justify-center gap-4 mt-4">
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    className="bg-white shadow-inner text-[#5D80F5] px-8 py-2 rounded-2xl text-sm"
                  >
                    Ver sitio
                  </a>
                )}
                <a
                  href={item.design}
                  target="_blank"
                  className="border border-white shadow-inner text-[#5D80F5] px-8 py-2 rounded-2xl text-sm"
                >
                  Figma
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
