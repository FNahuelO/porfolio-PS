import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import UIVector from "../../assets/ui-vector.png";
import UXVector from "../../assets/ux-vector.png";
import UEVector from "../../assets/ue-vector.png";
import { Dot } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { useTranslation } from "react-i18next";

export default function Skills() {
    const { t } = useTranslation()
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel); // Slide visible
    },
  });

  const skills = [
    {
      title: "User Experience",
      description:
        "Me especializo en crear experiencias digitales memorables y eficientes que cautivan desde el primer clic. Me sumerjo en la psicología de tus clientes potenciales, creando interfaces intuitivas, atractivas y funcionales que convierten visitantes en clientes leales.",
      icon: UEVector,
    },
    {
      title: "User Interfaz",
      description:
        "Cada detalle de mi interfaz está cuidadosamente diseñado para garantizar una experiencia fluida y efectiva. No solo me preocupo por la estética, sino también por impulsar tus objetivos comerciales y mejorar la retención de usuarios. Ya sea para aplicaciones móviles, sitios web u otros productos digitales.",
      icon: UIVector,
    },
    {
      title: "UX Desing",
      description:
        "Mi enfoque se centra en comprender las necesidades y deseos de tus usuarios para diseñar interfaces que sean fáciles de usar, atractivas y efectivas. Mi objetivo es garantizar una experiencia digital fluida y satisfactoria para tus clientes, lo que contribuye al logro de tus objetivos comerciales.",
      icon: UXVector,
    },
  ];

  return (
    <div className="bg-white flex flex-col h-full justify-center items-center">
      <span className="text-3xl font-lato text-[#4A4A4A] mb-8">          {t('page.services.title')}
      </span>

      <div ref={sliderRef} className="keen-slider max-w-[25rem] h-[45rem] shadow-2xl rounded-2xl">
        {skills.map((skill, index) => (
          <div key={index} className="keen-slider__slide h-full">
            <div className="bg-white p-6 text-center h-full flex flex-col justify-center gap-4">
              <div className="flex justify-center">
                <div className="rounded-full p-4">
                  <img src={skill.icon} className="w-40 h-40" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-[#4A4A4A] font-lato">
                {skill.title}
              </h3>
              <p className="text-[#8D8D8D] mx-auto w-4/5 font-semibold font-manrope text-lg">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots clicables */}
      <div className="flex mt-4 gap-2">
        {skills.map((_, index) => (
          <button
          className="bg-transparent w-min p-0 focus:outline-none"
            key={index}
            onClick={() => slider.current?.moveToIdx(index)}
          >
            <Dot
              color={currentSlide === index ? "#4A4A4A" : "#D9D9D9"}
              fill={currentSlide === index ? "#4A4A4A" : "none"}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
