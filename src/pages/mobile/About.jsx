import React from "react";
import AnimatedBubbles from "../../components/mobile/AnimatedBubbles";

export default function Home() {
  return (
    <div className=" flex flex-col h-full justify-center items-center bg-white relative">
      <AnimatedBubbles />
      <div className=" relative z-10 flex flex-col justify-center items-center gap-8 w-4/5 py-32 backdrop-blur-3xl bg-white/30 px-14 rounded-3xl ">
        <span className="text-[#7F7676] text-2xl font-lato">
          Mi nombre es Priscila, con más de 5 años de experiencia en diseño me
          especialice en UI/UX.
        </span>
        <span className="text-[#7F7676] text-2xl font-lato">
          Mi trayectoria me ha proporcionado una sólida base en diversos
          aspectos del diseño, desde la conceptualización hasta la
          implementación de soluciones creativas y funcionales, trabajando en
          proyectos desafiantes que han ampliado mi perspectiva y enriquecido
          mis habilidades continuamente.
        </span>
      </div>
    </div>
  );
}
