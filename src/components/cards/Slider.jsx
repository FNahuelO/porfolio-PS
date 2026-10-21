import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";

const buttonClass =
  "flex items-center justify-center pt-4 px-6 pb-2 bg-white text-[#5EA3C0] text-[1rem] rounded-2xl border-none shadow-[0px_4px_0px_0px_#CDCDCD40,0px_4px_0px_0px_#ACACAC40_inset,0px_4px_4px_0px_#00000040] hover:bg-[#4A82EC] hover:text-white focus:outline-none";

function Card({ imagen, title, text, design, link }) {
  const { t } = useTranslation();
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className="flex flex-col bg-white w-[20rem] h-[40rem] rounded-[2rem] relative"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} className="w-full" alt="" />
      <div className="w-[90%] flex flex-col mx-auto gap-2 h-[38%]">
        <span className="text-[#78778A] text-xl text-center mt-2">{title}</span>
        <span className="text-[#78778A] text-xs text-justify px-6">{text}</span>
      </div>
      <div className="flex justify-center gap-4 absolute bottom-8 w-full">
        {design && (
          <button
            className={buttonClass}
            onClick={() => window.open(design, "_blank")}
          >
            {t("buttons.design")}
          </button>
        )}
        {link && (
          <button
            className={buttonClass}
            onClick={() => window.open(link, "_blank")}
          >
            {t("buttons.proyect")}
          </button>
        )}
      </div>
    </animated.div>
  );
}

export default Card;
