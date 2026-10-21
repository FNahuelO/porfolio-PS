import React from "react";
import UIVector from "../../assets/ui-vector.png";
import UXVector from "../../assets/ux-vector.png";
import UEVector from "../../assets/ue-vector.png";

export default function Services({ title, text, color }) {
  const vectores = {
    FED20750: UIVector,
    "4B40F650": UEVector,
    E1A1A450: UXVector,
  };

  return (
    <div
      className="w-[24%] min-h-[58vh] bg-none flex flex-col items-center justify-start pt-[6vh] pb-10 px-8 relative rounded-[2rem] gap-4 transition-all hover:scale-105 xl:gap-6 max-lg:w-1/3 max-lg:min-h-0 max-lg:py-8 max-lg:px-4"
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 15px 0 ${color}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={vectores[color.substring(1)]}
        alt=""
        className="w-[10rem] h-[10rem] max-md:w-[8rem] max-md:h-[8rem]"
      />

      <span className="text-2xl font-bold text-[#4A4A4A] text-center xl:text-[2.25rem] max-md:text-xl">
        {title}
      </span>
      <span className="font-semibold text-center w-full text-sm text-[#8D8D8D] xl:text-[1.4rem] xl:leading-[1.5]">
        {text}
      </span>
    </div>
  );
}
