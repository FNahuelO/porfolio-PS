import Vector from "../assets/Circles";
import { useTranslation } from "react-i18next";

export default function Nosotros() {
  const { t } = useTranslation();

  return (
    <div
      className="bg-transparent flex flex-col h-screen items-center justify-center max-lg:h-auto max-lg:min-h-screen max-lg:py-32"
      id="Sobre Mi"
    >
      <div className="absolute w-4/5 max-lg:w-[95%]">
        <Vector width="100rem" height="45rem" className="max-w-full" />
      </div>
      <div className="w-2/5 flex flex-col gap-4 bg-[#FFFFFF7A] p-16 rounded-2xl backdrop-blur-[39.75px] translate-y-[5%] max-xl:w-1/2 max-lg:w-[70%] max-lg:p-12 max-md:w-[85%]">
        <span className="text-4xl font-bold text-start text-[#FFFFFF90] [text-shadow:-3px_3px_7.6px_#F37008]">
          {t("page.us.title")}
        </span>
        <div className="flex flex-col gap-4 items-start">
          <span className="text-xl text-[#7F7676] text-justify [text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] max-lg:text-lg">
            {t("page.us.name")}
          </span>
          <span className="text-xl text-[#7F7676] text-justify [text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] max-lg:text-lg">
            {t("page.us.text")}
          </span>
        </div>
      </div>
    </div>
  );
}
