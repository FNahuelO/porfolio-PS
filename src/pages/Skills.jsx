import { useTranslation } from "react-i18next";
import Card from "../components/cards/Services";

export default function Skills() {
  const { t } = useTranslation();

  const cardTexts = [
    {
      title: t("page.services.cards.design.title"),
      text: t("page.services.cards.design.text"),
      color: "#FED20750",
    },
    {
      title: t("page.services.cards.seo.title"),
      text: t("page.services.cards.seo.text"),
      color: "#4B40F650",
    },
    {
      title: t("page.services.cards.redesign.title"),
      text: t("page.services.cards.redesign.text"),
      color: "#E1A1A450",
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center flex-col pt-32 pb-16"
      id="My Skills"
    >
      <div className="w-[80%] gap-10 flex flex-col max-lg:w-[90%]">
        <span
          className="text-[2rem] font-bold text-center text-[#43ADB9]"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), linear-gradient(180deg, #76B1E1 -7%, #FFFFFF -6.99%, #D5D5D5 31.95%, #F2F5F7 56.55%, #F7F7F7 75%)",
            backgroundClip: "text",
          }}
        >
          {t("page.services.title")}
        </span>
        <div className="flex justify-evenly items-stretch gap-8 max-lg:justify-between max-lg:gap-4">
          {cardTexts.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
