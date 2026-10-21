import Circle from "../assets/Circle";
import Vector from "../assets/VectorHome";
import LuzIzq from "../assets/Luz";
import Mail from "../assets/VectorMail";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div
      id="Inicio"
      className="flex items-center bg-white w-full h-screen justify-center relative overflow-hidden max-lg:px-12 max-lg:min-h-[60rem]"
    >
      <div className="absolute -top-4 -left-12">
        <LuzIzq />
      </div>
      <div className="absolute -bottom-20 -right-12 rotate-180">
        <LuzIzq />
      </div>
      <div className="flex flex-col w-2/5 items-start z-[5] gap-6 max-lg:w-1/2 max-lg:gap-4">
        <span className="text-[3.5rem] font-bold translate-y-6 text-[#0B0A0F] max-lg:text-[3rem] max-lg:leading-tight max-lg:translate-y-0">
          {t("page.home.name")}
        </span>
        <span
          className="text-3xl max-lg:text-2xl"
          style={{
            backgroundImage:
              "linear-gradient(91.01deg, #FB980F 2.15%, #FAC02C 30.61%, #F9F352 79.93%, #F9EC5C 105.1%, #F9EB68 140.34%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("page.home.desing")}
        </span>
        <span className="text-xl text-[#666768] w-[87%] max-lg:w-full max-lg:text-lg">
          {t("page.home.msg")}
        </span>
        <Link to="/contacto">
          <button className="text-white bg-[#FE7234] py-3 px-4 font-bold rounded-[3rem] my-2 flex items-center gap-4 cursor-pointer transition-colors hover:bg-[#5165D3]">
            {t("buttons.contact") + "!"} <Mail />
          </button>
        </Link>
      </div>
      <div className="z-[10] translate-x-[5rem] translate-y-[3rem] w-[50rem] h-[45rem] shrink-0 max-xl:translate-x-[2rem] max-lg:w-[45%] max-lg:h-auto max-lg:translate-x-0 max-lg:translate-y-0">
        <Vector width="100%" height="100%" />
      </div>
      <div className="absolute right-0 -top-12 w-[50rem] h-[45rem] max-lg:w-[40rem] max-lg:h-[36rem]">
        <Circle width="100%" height="100%" />
      </div>
    </div>
  );
}
