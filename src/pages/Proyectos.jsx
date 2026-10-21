import { useEffect, useState } from "react";
import Card from "../components/cards/Slider";
import Slider from "../components/Slider";
import Vector from "../assets/VectorP";
import { useTranslation } from "react-i18next";
import { localizeProject, useProjects } from "../hooks/useProjects";

export default function Proyectos() {
  const { t, i18n } = useTranslation();
  const [view, setView] = useState(true);
  const [cardsData, setCardsData] = useState([]);
  const projects = useProjects();

  useEffect(() => {
    setCardsData(() =>
      projects.map((project) => {
        const card = localizeProject(project, i18n.language);
        return {
          key: card.id,
          content: (
            <Card
              imagen={card.imagen}
              title={card.title}
              link={card.link}
              design={card.design}
              text={card.text}
            />
          ),
        };
      })
    );
  }, [i18n.language, projects]);

  return (
    <div
      className="bg-white min-h-screen flex flex-col justify-center items-center gap-10 pt-32 pb-16 relative"
      id="Proyectos"
    >
      <div className="flex flex-col items-center z-[55]">
        <span
          className="text-[2rem] font-bold text-center text-[#43ADB9]"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), linear-gradient(180deg, #76B1E1 -7%, #FFFFFF -6.99%, #D5D5D5 31.95%, #F2F5F7 56.55%, #F7F7F7 75%)",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          {t("page.prices.title")}
        </span>
      </div>
      <div className="w-[80vw] h-[44rem]">
        {cardsData.length > 0 && <Slider cards={cardsData} />}
      </div>
      <div className="absolute bottom-[7.5%] left-[4%]">
        <div className="relative">
          <button
            className="w-20 h-20 bg-white rounded-[50%] pt-2 hover:bg-[#5165D3]"
            onClick={() => setView(!view)}
          >
            <Vector width="2rem" height="2rem" />
          </button>
          {view && (
            <div className="absolute bottom-[7rem] left-0 w-[20rem] py-8 px-12 bg-[#f9b233] rounded-[2rem] text-white font-['Josefin_Sans',sans-serif] text-[1.1rem] text-start leading-[1.4] shadow-[5px_5px_15px_rgba(0,0,0,0.1)] after:absolute after:content-[''] after:bottom-[-2rem] after:left-[2rem] after:w-0 after:h-0 after:border-x-[1.5rem] after:border-x-transparent after:border-t-[3rem] after:border-t-[#f9b233] max-lg:w-[16rem] max-lg:py-6 max-lg:px-8 max-lg:text-[1rem]">
              {t("page.prices.bubble")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
