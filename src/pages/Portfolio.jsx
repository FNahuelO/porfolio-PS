import React from "react";
import Carousel from "../components/Carousel";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();
  return (
    <div
      className="bg-white flex flex-col h-screen items-center overflow-hidden gap-8"
      id="Portafolio"
    >
      <span className="text-[2rem] font-bold border-b-2">
        {t("page.portfolio.title")}
      </span>
      <div className="h-[80vh]">
        <Carousel />
      </div>
    </div>
  );
}
