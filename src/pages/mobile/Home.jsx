import React from "react";
import p from "../../assets/P.svg";
import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-white flex flex-col h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-12">
        <img src={p} className="w-52 mb-8" />
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#033148] text-3xl">¡Hola! Soy Priscila.</span>
          <span className="text-3xl bg-[linear-gradient(91.25deg,#FB980F_2.14%,#FAC02C_23.95%,#F9F352_61.76%,#F9EC5C_81.05%,#FB980F_108.06%)] text-transparent bg-clip-text">
            UX/UI Designer
          </span>
        </div>
        <span className="text-[#666768] w-2/3 text-center text-xl font-lato">
          Explora mi portafolio y descubrí cómo transformar ideas en
          experiencias digitales intuitivas y atractivas.
        </span>
        <NavLink to={"contact"}>
          <button className="bg-[#FB8501] py-4 px-5 rounded-full text-2xl flex items-center text-white">
            Contactame ! <ChevronRight size="1.75rem" />
          </button>
        </NavLink>
      </div>
    </div>
  );
}
